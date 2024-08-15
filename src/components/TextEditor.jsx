import { Wrapper } from "../wrappers/TextEditor";
import Markdown from "./Markdown";
import Preview from "./Preview";

const TextEditor = () => {
  return (
    <Wrapper>
      <div className="editor-container">
        <Markdown />
        <hr />
        <Preview />
      </div>
    </Wrapper>
  );
};
export default TextEditor;
