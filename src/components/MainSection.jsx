import React, { useContext } from "react";
import ListCategory from "./ListCategory";
import { AppContext } from "../App";

function MainSection() {
  const { listItems } = useContext(AppContext);

  function mapListCategoryItems() {
    return listItems.map((listItem, index) => {
      return (
        <ListCategory
          category={listItem.category}
          tasks={listItem.tasks}
          categoryNum={index + 1}
        />
      );
    });
  }

  return (
    <section className="mainSection">
      {listItems?.length > 0 ? (
        <div className="accordion">{mapListCategoryItems()}</div>
      ) : (
        <h1 className="text-center mt-4">Start Adding Some Stuff!</h1>
      )}
    </section>
  );
}

export default MainSection;