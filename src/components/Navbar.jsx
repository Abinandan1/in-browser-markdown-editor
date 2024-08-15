import { Wrapper } from "../wrappers/Navbar";
import iconClose from "/assets/icon-close.svg";
import iconMenu from "/assets/icon-menu.svg";
import iconLogo from "/assets/logo.svg";
import iconDocument from "/assets/icon-document.svg";
import iconSave from "/assets/icon-save.svg";
import { useAppContext } from "../App";
const Navbar = () => {
  const { showSidebar, setShowSidebar } = useAppContext();
  return (
    <Wrapper>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="sidebar-toggle-btn"
      >
        {showSidebar ? (
          <img className="sidebar-toggle" src={iconClose} alt="" />
        ) : (
          <img className="sidebar-toggle" src={iconMenu} alt="" />
        )}
      </button>
      <div className="logo-information">
        <img className="logo" src={iconLogo} alt="" />
        <hr />
        <div className="document-information">
          <img src={iconDocument} alt="" />
          <div className="info">
            <p className="in-app-body-small">Document Name</p>
            <h1 className="in-app-heading-medium">welcome.md</h1>
          </div>
        </div>
      </div>
      <div className="edit">
        <button className="delete-btn">
          <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
              fill="#7C8187"
            />
          </svg>
        </button>
        <button className="save-btn btn">
          <img src={iconSave} alt="" /> <span>Save Changes</span>
        </button>
      </div>
    </Wrapper>
  );
};
export default Navbar;
