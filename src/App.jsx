import { useState, createContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import AddTaskBtn from "./components/AddTaskBtn";
import AddCategoryBtn from "./components/AddCategoryBtn";

export const AppContext = createContext();

function App() {
  const [listItems, setListItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(listItems));
    setShowAddTaskModal(false);
    setShowAddCategoryModal(false);
  }, [listItems]);

  const handleShowAddTaskModal = () => setShowAddTaskModal(true);
  const handleCloseAddTaskModal = () => setShowAddTaskModal(false);
  const handleShowAddCategoryModal = () => setShowAddCategoryModal(true);
  const handleCloseAddCategoryModal = () => setShowAddCategoryModal(false);

  function addTask(categoryName, newTask) {
    setListItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.category === categoryName) {
          return {
            ...item,
            tasks: [...item.tasks, newTask],
          };
        } else {
          return item;
        }
      });
    });
  }

  function addCategory(newCategory) {
    setListItems((prevItems) => {
      return [
        ...prevItems,
        {
          category: newCategory,
          tasks: [],
        },
      ];
    });
  }

  function setTaskAsComplete(taskId, taskCategory) {
    setListItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.category === taskCategory) {
          const updatedTasks = item.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed }; 
            }
            return task;
          });

          setTimeout(() => {
            setListItems((newItems) => {
              return newItems.map((item) => {
                if (item.category === taskCategory) {
                  return {
                    ...item,
                    tasks: item.tasks.filter((task) => task.id !== taskId), 
                  };
                }
                return item;
              });
            });
          }, 1000);
          return { ...item, tasks: updatedTasks };
        }
        return item;
      });
    });
  }

  return (
    <div className="container">
      <Navbar />
      <AppContext.Provider
        value={{
          listItems,
          setListItems,
          showAddTaskModal,
          setShowAddTaskModal,
          handleShowAddTaskModal,
          handleCloseAddTaskModal,
          addTask,
          showAddCategoryModal,
          handleShowAddCategoryModal,
          handleCloseAddCategoryModal,
          addCategory,
          setTaskAsComplete,
        }}
      >
        <MainSection />
        <div className="buttonsContainer">
          <AddTaskBtn />
          <AddCategoryBtn />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
