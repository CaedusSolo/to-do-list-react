import { useState, createContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import AddRemoveBtn from "./components/AddRemoveBtn";
import { nanoid } from "nanoid";

export const AppContext = createContext();

function App() {
  const [listItems, setListItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(listItems))
  },[listItems])

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  return (
    <div className="container">
      <Navbar />
      <AppContext.Provider
        value={{
          listItems,
          setListItems,
          showModal,
          setShowModal,
          handleShow,
          handleClose
        }}
      >
        <MainSection />
        <AddRemoveBtn />
      </AppContext.Provider>
    </div>
  );
}

export default App;