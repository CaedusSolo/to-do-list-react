import React, { useContext } from "react";
import { AppContext } from "../App";
import AddCategoryModal from "./AddCategoryModal";

function AddCategoryBtn() {
  const { showAddCategoryModal, handleShowAddCategoryModal } = useContext(AppContext);
  return (
    <div>
      <button
        className="btn addCategoryBtn"
        onClick={handleShowAddCategoryModal}
      >
        Add New Category
      </button>
      {showAddCategoryModal && <AddCategoryModal />}
    </div>
  );
}

export default AddCategoryBtn;
