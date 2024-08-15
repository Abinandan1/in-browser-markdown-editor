import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Sidebar";
import iconLogo from "/assets/logo.svg";
import iconDocument from "/assets/icon-document.svg";
const Sidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper showsidebar={showSidebar ? "true" : "false"}>
      <aside>
        <img className="logo" src={iconLogo} alt="" />
        <p className="roboto-medium">MY DOCUMENTS</p>
        <button className="btn new-document-btn">+ New Document </button>
        <div className="documents">
          <div className="document">
            <img src={iconDocument} alt="" />
            <div className="document-info">
              <p className="in-app-body-small">01 April 2022</p>
              <h1 className="in-app-heading-medium">untitled-document.md</h1>
            </div>
          </div>
          <div className="document">
            <img src={iconDocument} alt="" />
            <div className="document-info">
              <p className="in-app-body-small">12 May 2023</p>
              <h1 className="in-app-heading-medium">welcome.md</h1>
            </div>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};
export default Sidebar;
