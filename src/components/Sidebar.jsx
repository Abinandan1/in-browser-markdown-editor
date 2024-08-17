import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Sidebar";
import iconLogo from "/assets/logo.svg";
import iconDocument from "/assets/icon-document.svg";
import iconMoon from "/assets/icon-dark-mode.svg";
import iconSun from "/assets/icon-light-mode.svg";
const Sidebar = () => {
  const {
    showSidebar,
    files,
    currentFile,
    setCurrentFile,
    darkTheme,
    setDarkTheme,
    setShowModal,
  } = useAppContext();

  return (
    <Wrapper
      showsidebar={showSidebar ? "true" : "false"}
      darktheme={darkTheme ? "true" : "false"}
    >
      <aside>
        <img className="logo" src={iconLogo} alt="" />
        <p className="roboto-medium">MY DOCUMENTS</p>
        <button
          onClick={() => setShowModal({ open: true, type: "add" })}
          className="btn new-document-btn"
        >
          + New Document{" "}
        </button>
        <div className="documents">
          {files.map((file) => {
            return (
              <div
                onClick={() => setCurrentFile(file)}
                key={file?.name}
                className="document"
              >
                <img src={iconDocument} alt="" />
                <div className="document-info">
                  <p className="in-app-body-small">{file?.createdAt}</p>
                  <span className="in-app-heading-medium">{file?.name}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div
          onClick={() => setDarkTheme(!darkTheme)}
          className="theme-btn-container"
        >
          <img src={iconMoon} alt="" />
          <div className="theme-toggle-container">
            <span className="toggle-theme-btn"></span>
          </div>
          <img src={iconSun} alt="" />
        </div>
      </aside>
    </Wrapper>
  );
};
export default Sidebar;
