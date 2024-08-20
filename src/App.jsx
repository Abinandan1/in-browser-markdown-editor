import { createContext, useContext, useEffect, useState } from "react";
import { Modal, Navbar, Sidebar, TextEditor } from "./components";
import { nanoid } from "nanoid";
import { months } from "./utils/months";
import { toast } from "./components/Notification";

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || false;
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
  const [currentFile, setCurrentFile] = useState(null);
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
  const updateFile = () => {
    const newFiles = files.map((file) => {
      if (file.id === currentFile.id) {
        return currentFile;
      }
      return file;
    });
    toast.success("Saved successfully");
    setFiles(newFiles);
  };
  useEffect(() => {
    localStorage.setItem("theme", darkTheme);
    document.querySelector("main").classList.toggle("dark-theme", darkTheme);
    document
      .querySelector(".notification")
      .classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);
  useEffect(() => {
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
