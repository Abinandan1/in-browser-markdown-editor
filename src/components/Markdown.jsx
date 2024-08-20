import { useRef } from "react";
import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Markdown";
import EditorType from "./EditorType";
const Markdown = () => {
  const content = useRef("");
  const { currentFile, setCurrentFile } = useAppContext();
  return (
    <Wrapper className="markdown">
      <EditorType name="MARKDOWN" />
      <textarea
        value={currentFile?.content}
        className="content roboto-mono-regular"
        ref={content}
        onInput={(e) =>
          setCurrentFile({ ...currentFile, content: content.current.value })
        }
        rows={38}
      />
    </Wrapper>
  );
};
export default Markdown;
