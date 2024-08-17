import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/TextEditor";
import Markdown from "./Markdown";
import Preview from "./Preview";

const TextEditor = () => {
  const { showPreview, setShowPreview, currentFile } = useAppContext();
  return (
    <Wrapper showpreview={showPreview ? "true" : "false"}>
      {currentFile && (
        <div className="editor-container">
          {showPreview ? (
            <Preview />
          ) : (
            <>
              <Markdown />
              <hr />
              <Preview />
            </>
          )}
        </div>
      )}
    </Wrapper>
  );
};
export default TextEditor;
