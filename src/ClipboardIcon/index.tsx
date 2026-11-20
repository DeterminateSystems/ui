import { type FC } from "react";

import { CheckIcon, CopyIcon } from "../icons";

export interface ClipboardIconProps {
  /**
   * Was the value recently copied?
   */
  copied: boolean;

  /** Sets the size and color. Without it the icon is 24px. */
  className?: string;
}

/**
 * The copy icon, which becomes a check mark once the value has been copied.
 */
const ClipboardIcon: FC<ClipboardIconProps> = ({ copied, className }) => {
  const Icon = copied ? CheckIcon : CopyIcon;

  return <Icon className={className} />;
};

export default ClipboardIcon;
