import type { PropsWithChildren } from "react";

import "./index.scss";

const Badges: React.FC<PropsWithChildren> = ({
  children
}) => (
  <div className="badges">{children}</div>
);

export default Badges;
