import type { FC } from "react";
import CodeBlock from "../CodeBlock";
import Link from "../Link";

const code = `aws ec2 describe-images \\
  --owners 535002876703 \\
  --filters "Name=name,Values=determinate/nixos/epoch-1/*" \\
            "Name=architecture,Values=x86_64,arm64" \\
  --query "Images | sort_by(@, &CreationDate) | [-1]"`;

const FindAwsAMIs: FC = () => {
  return (
    <>
      <p>
        Use NixOS with Determinate on AWS with our pre-published AMIs in every
        region.
      </p>
      <CodeBlock
        kind={"snippet"}
        language={"shell"}
        code={code}
        title={"Search for AMIs"}
      />
      <p>
        See{" "}
        <Link href="https://github.com/DeterminateSystems/nixos-amis">
          DeterminateSystems/nixos-amis on GitHub
        </Link>
        .
      </p>
    </>
  );
};

export default FindAwsAMIs;
