import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type props = {
  code: string;
};

const AllSyntax: React.FC<props> = ({ code }) => {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={atomOneDark}
      className="text-xs md:text-sms rounded-md border border-black/50 my-3"
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default AllSyntax;
