import { createContext, useContext, useEffect, useState } from "react";
import { Modal, Navbar, Sidebar, TextEditor } from "./components";
import { nanoid } from "nanoid";
import { months } from "./utils/months";

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || false;
  console.log(localStorage.getItem("theme"), theme);

  return theme;
};
const getFilesFromLocalStorage = () => {
  const files = JSON.parse(localStorage.getItem("files")) || [];
  return files;
};
const AppContext = createContext();
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [darkTheme, setDarkTheme] = useState(getThemeFromLocalStorage());
  const [files, setFiles] = useState(getFilesFromLocalStorage());
  const [currentFile, setCurrentFile] = useState(files[0]);
  const [showPreview, setShowPreview] = useState(false);
  const [showModal, setShowModal] = useState({ open: false, type: "add" });
  const deleteFile = () => {
    const newFiles = files.filter((file) => file.id !== currentFile.id);
    setFiles(newFiles);
  };
  const addFile = ({ fileName }) => {
    const date = new Date();
    const [day, month, year] = [
      date.getDate(),
      months[date.getMonth()],
      date.getFullYear(),
    ];
    const file = {
      id: nanoid(),
      createdAt: `${
        day.toString().length === 1 ? "0" : ""
      }${day} ${month} ${year}`,
      name: `${fileName || "untitled"}.md`,
      content: "",
    };
    setFiles([...files, file]);
  };
  const updateFile = () => {};
  useEffect(() => {
    localStorage.setItem("theme", darkTheme);
    document.querySelector("main").classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);
  useEffect(() => {
    setCurrentFile(files[0]);
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);
  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        files,
        currentFile,
        setCurrentFile,
        darkTheme,
        setDarkTheme,
        showPreview,
        setShowPreview,
        deleteFile,
        addFile,
        updateFile,
        showModal,
        setShowModal,
      }}
    >
      <main>
        <Sidebar />
        <div className="container">
          <Navbar />
          <TextEditor />
        </div>
        {showModal.open && <Modal />}
      </main>
    </AppContext.Provider>
  );
}
export const useAppContext = () => useContext(AppContext);
export default App;
