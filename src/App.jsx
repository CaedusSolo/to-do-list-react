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
  ]);

  return (
    <>
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
    </>
  );
}

export default App;
