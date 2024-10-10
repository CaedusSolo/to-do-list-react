import { useState, createContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import AddTaskBtn from "./components/AddTaskBtn";


export const AppContext = createContext();

function App() {
  const [listItems, setListItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(listItems))
    setShowModal(false)
  },[listItems])

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  function addTask(categoryName, newTask) {
    setListItems(prevItems => {
      return prevItems.map(item => {
        if (item.category === categoryName) {
          return {
            ...item,
            tasks: [...item.tasks, newTask]
          }
        }
        else {
          return item
        }
      })
    })
  }

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
          handleClose,
          addTask
        }}
      >
        <MainSection />
        <AddTaskBtn />
      </AppContext.Provider>
    </div>
  );
}

export default App;