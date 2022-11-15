import React from "react";
import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [category, setCategory] = useState('All')

 const handleFilterCategory= (event) =>{
  setCategory(event.target.value);
 }

 const itemsToDisplay = items.filter((item) => {
  if(category === 'All'){
    return true;
  }else{
    return item.category === category;
  }
})

  const itemList = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))
  return (
    <div className="ShoppingList">
      <div className="Filter">

        <select name="filter" onChange={handleFilterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
