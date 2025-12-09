import { type FC } from "react";
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

export interface ClipboardIconProps {
  /**
   * Was the value recently copied?
   */
  copied: boolean;

  className?: string;
}

/**
 * The clipboard icon that is responsive to when a user has recently clicked it.
 */
const ClipboardIcon: FC<ClipboardIconProps> = ({ copied, className }) => {
  const Icon = copied ? ClipboardDocumentCheckIcon : ClipboardDocumentIcon;

  return <Icon className={className} />;
};

export default ClipboardIcon;
