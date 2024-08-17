import { useEffect } from "react";
import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Markdown";
import EditorType from "./EditorType";
const Markdown = () => {
  const { currentFile } = useAppContext();
  const content = { __html: currentFile?.content };
  return (
    <Wrapper className="markdown">
      <EditorType name="MARKDOWN" />
      <p contentEditable={true} className="content roboto-mono-regular">
        {currentFile?.content}
      </p>
    </Wrapper>
  );
};
export default Markdown;
