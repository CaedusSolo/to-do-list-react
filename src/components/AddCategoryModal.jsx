import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function AddCategoryModal() {
  const { handleCloseAddCategoryModal, addCategory } = useContext(AppContext);
  const [newCategoryName, setNewCategoryName] = useState('')

  function updateCategoryName(categoryName) {
    setNewCategoryName(categoryName)
  }

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel1"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel1">
              Add New Category
            </h5>
          </div>
          <div className="modal-body">
            <div className="newCategoryInput">
              <label htmlFor="newCategory">Enter New Category Name</label>
              <input type="text" name="newCategory" id="newCategory" onChange={(e) => updateCategoryName(e.target.value)} />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleCloseAddCategoryModal}
            >
              Close
            </button>
            <button type="button" 
            className="btn btn-primary"
            disabled={newCategoryName.length < 4}
            onClick={() => addCategory(newCategoryName)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategoryModal;