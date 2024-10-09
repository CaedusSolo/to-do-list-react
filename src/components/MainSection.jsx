import React, {useContext} from "react";
import ListCategory from "./ListCategory";
import { AppContext } from "../App";

function MainSection() {
  const {listItems} = useContext(AppContext)

  function mapListCategoryItems() {
    return listItems.map(listItem => {
      return <ListCategory 
      category={listItem.category}
      tasks={listItem.tasks}
      />
    })
  }

  return (
    <section className="mainSection">
      {mapListCategoryItems()}
    </section>
  );
}

export default MainSection;