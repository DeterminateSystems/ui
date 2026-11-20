# `@determinate-systems/ui`

## Usage

The only special note here is that there is a bundled CSS file that needs to be imported alongside the usual React components. Most bundlers are able to ingest CSS, so this import statement should suffice:

```javascript
import "@determinate-systems/ui/reset.min.css";
import "@determinate-systems/ui/index.min.css";
```

And, add this to your `<head>` so fonts work:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
  rel="stylesheet"
/>
```

## Development

Run `process-compose` to start the various processes.

Remember to use `npm run format:fix` to match Prettier's expected formatting style.

## Styling

Components are styled with [Tailwind CSS v4](https://tailwindcss.com) utility classes. The stylesheets live in `src/styles`:

- `index.css` holds the design tokens (in `@theme`) and is compiled to `lib/index.min.css` with only the utilities that the components use.
- `reset.css` is Tailwind's `preflight` reset, compiled to `lib/reset.min.css`.

Every utility class and theme variable carries a `ui` prefix (`ui:flex`, `--ui-color-orange`), so the compiled CSS can't collide with an application's own Tailwind classes or theme.

Dark is the default color scheme. Use the `light:` variant for light-mode overrides, as in `ui:text-white ui:light:text-black`.

Storybook reads the compiled files in `lib`, so `process-compose` runs `npm run watch:css` alongside it.
