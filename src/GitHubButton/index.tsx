import { type FC } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import "./index.scss";

export interface GitHubButtonProps {
  /**
   * GitHub owner. Organization / user.
   */
  owner: string;

  /**
   * Repository name.
   */
  repo: string;
}

const GitHubButton: FC<GitHubButtonProps> = ({ owner, repo }) => {
  return (
    <a
      className="github-button"
      href={`https://github.com/${owner}/${repo}`}
      aria-label={`${owner}/${repo} on GitHub`}
    >
      <GitHubLogoIcon />
    </a>
  );
};

export default GitHubButton;
