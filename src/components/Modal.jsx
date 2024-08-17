import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Modal";

const Modal = () => {
  const { showModal, setShowModal, addFile, currentFile, deleteFile } =
    useAppContext();
  return (
    <Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (showModal?.type === "add") {
            const formData = new FormData(e.currentTarget);
            addFile(Object.fromEntries(formData));
          } else {
            deleteFile();
          }
          setShowModal({ ...showModal, open: false });
        }}
        className="modal-card"
      >
        {showModal.type === "add" ? (
          <>
            <h4>Add document</h4>
            <p className="roboto-slab-regular">Enter document name</p>
            <input type="text" placeholder="untitled.md" name="fileName" />
            <div className="btn-container">
              <button
                className="cancel-btn btn"
                onClick={() => setShowModal({ ...showModal, open: false })}
              >
                Cancel
              </button>
              <button type="submit" className="add-btn btn">
                Add
              </button>
            </div>
          </>
        ) : (
          <>
            <h4>Delete this document?</h4>
            <p className="roboto-slab-regular">
              Are you sure you want to delete the '{currentFile?.name}' document
              and its contents? This action cannot be reversed.
            </p>
            <div className="btn-container">
              <button
                className="cancel-btn btn"
                onClick={() => setShowModal({ ...showModal, open: false })}
              >
                Cancel
              </button>
              <button className="delete-btn btn">Confirm & Delete</button>
            </div>
          </>
        )}
      </form>
    </Wrapper>
  );
};
export default Modal;
