import Markdown from "react-markdown";
import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Preview";
import EditorType from "./EditorType";

const Preview = () => {
  const { currentFile } = useAppContext();

  // currentFile.content.replace("# ", map.get("# "));
  const content = { __html: currentFile.content };

  return (
    <Wrapper className="preview">
      <EditorType name="PREVIEW" />
      <Markdown className="content">{currentFile.content}</Markdown>
    </Wrapper>
  );
};
export default Preview;
