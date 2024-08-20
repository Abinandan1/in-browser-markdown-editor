import Markdown from "react-markdown";
import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Preview";
import EditorType from "./EditorType";

const Preview = () => {
  const { currentFile } = useAppContext();

  return (
    <Wrapper className="preview">
      <EditorType name="PREVIEW" />
      <Markdown className="content">{currentFile?.content}</Markdown>
    </Wrapper>
  );
};
export default Preview;
