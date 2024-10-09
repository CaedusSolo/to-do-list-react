import { useState, createContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import AddRemoveBtn from "./components/AddRemoveBtn";
import { nanoid } from "nanoid";

export const AppContext = createContext();

function App() {
  const [listItems, setListItems] = useState([
    {
      category: "Work",
      tasks: [
        { id: nanoid(), task: "Finish report", completed: false },
        { id: nanoid(), task: "Email client", completed: false },
      ],
    },
    {
      category: "Coding",
      tasks: [
        { id: nanoid(), task: "Deploy project", completed: false },
        { id: nanoid(), task: "Fork GitHub repo", completed: false },
      ],
    },
  ]);

  return (
    <div className="container">
      <Navbar />
      <AppContext.Provider
        value={{
          listItems,
          setListItems,
        }}
      >
        <MainSection />
        <AddRemoveBtn />
      </AppContext.Provider>
    </div>
  );
}

export default App;
