import { createContext, useContext, useState } from "react";
import { Navbar, Sidebar, TextEditor } from "./components";

const AppContext = createContext();
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <AppContext.Provider value={{ showSidebar, setShowSidebar }}>
      <main>
        <Sidebar />
        <div className="container">
          <Navbar />
          <TextEditor />
        </div>
      </main>
    </AppContext.Provider>
  );
}
export const useAppContext = () => useContext(AppContext);
export default App;
