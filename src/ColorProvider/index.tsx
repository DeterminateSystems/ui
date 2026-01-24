import React, {
	type PropsWithChildren,
	useEffect,
	useInsertionEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from "react";

import ColorContext, {
	type ColorContextValue,
	type ColorScheme,
	type ColorSchemePreference,
} from "../ColorContext";

import useSystemColorScheme from "../hooks/useSystemColorScheme";
import { applyTheme } from "../theme";

const STORAGE_KEY =
  "@determinate-systems/ui/ColorProvider/scheme-preference";

export interface ColorProviderProps {
	/** Root element for this color context. Defaults to the HTML `<body>` element, but can be scoped more narrowly for testing. */
	root?: Element | undefined;

	/**
	 * Sync the user's preferred color scheme to local storage.
	 *
	 * Defaults to enabled, specify false to turn it off.
	 **/
	useLocalStorage?: boolean;

	/** (For testing) Which color scheme to use instead of querying the system? */
	simulatedSystemColorScheme?: ColorScheme;

	/** (For testing) Which color scheme does the user prefer? */
	preferredColorScheme?: ColorSchemePreference;
}

function computeInitialColorSchemePreference(
	useLocalStorage: boolean,
	preferredColorScheme?: ColorSchemePreference,
): ColorSchemePreference {
	if (useLocalStorage) {
		const storedPreference = readSchemeFromLocalStorage();
		if (storedPreference) return storedPreference;
	}

	if (preferredColorScheme) return preferredColorScheme;

	// SPA default
	return "auto";
}

function readSchemeFromLocalStorage(): ColorSchemePreference | undefined {
  const value = localStorage.getItem(STORAGE_KEY);
  return value === "auto" || value === "light" || value === "dark"
    ? value
    : undefined;
}

function writeSchemeToLocalStorage(preference: ColorSchemePreference) {
	try {
		localStorage.setItem(
			"@determinate-systems/ui/ColorProvider/scheme-preference",
			preference,
		);
	} catch {
		// Ignore errors
	}
}

function resolveColorScheme(
	preferredScheme: ColorSchemePreference,
	systemColorScheme?: ColorScheme,
): ColorScheme {
	if (preferredScheme === "auto") return systemColorScheme ?? "dark";
	return preferredScheme;
}

// Apply as early as React allows (insertion), else layout.
const useEarlyEffect =
	typeof useInsertionEffect === "function"
		? useInsertionEffect
		: useLayoutEffect;

const ColorProvider: React.FC<PropsWithChildren<ColorProviderProps>> = ({
	useLocalStorage = true,
	simulatedSystemColorScheme,
	preferredColorScheme,
	root: initialRoot = undefined,
	children,
}) => {
	const actualSystemColorScheme = useSystemColorScheme();
	const systemColorScheme =
		simulatedSystemColorScheme ?? actualSystemColorScheme;

	const root: Element | null =
		initialRoot ?? (typeof document !== "undefined" ? document.body : null);

	const [preference, setPreference] = useState<ColorSchemePreference>(() =>
		computeInitialColorSchemePreference(useLocalStorage, preferredColorScheme),
	);

	const [scheme, setScheme] = useState<ColorScheme>(() =>
		resolveColorScheme(preference, systemColorScheme),
	);

	// Sync scheme whenever preference/system changes
	useEffect(() => {
		if (useLocalStorage) writeSchemeToLocalStorage(preference);
		setScheme(resolveColorScheme(preference, systemColorScheme));
	}, [preference, systemColorScheme, useLocalStorage]);

	// Apply the theme "super early" (without doing it during render)
	useEarlyEffect(() => {
		if (!root) return;
		applyTheme(root, scheme);
	}, [root, scheme]);

	const value = useMemo<ColorContextValue>(
		() => ({ scheme, setScheme, preference, setPreference }),
		[scheme, preference],
	);

	return (
		<ColorContext.Provider value={value}>{children}</ColorContext.Provider>
	);
};

export const nextSchemePreference = (
	preference: ColorSchemePreference,
): ColorSchemePreference => {
	switch (preference) {
		case "auto":
			return "dark";
		case "dark":
			return "light";
		case "light":
			return "auto";
	}
};

export default ColorProvider;
