/*
  - don't forget to write a test
*/
import { CardBox } from "../CardBox";
import List from "../../../assets/List.json";
import CardListStyling from "./CardList.module.scss";
import { useState } from "react";

export const CardList = () => {
  const [dragItem, setDragItem] = useState<number>(0);
  const [dragOverItem, setDragOverItem] = useState<number>(0);
  const [list, setList] = useState(List.items)

  const dragStart = (position: number) => {
    setDragItem(position);
  };

  const dragEnter = (position: number) => {
    setDragOverItem(position);
  };

  const drop = () => {
    // sorting & update state 
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem];
    copyListItems.splice(dragItem, 1);
    copyListItems.splice(dragOverItem, 0, dragItemContent);
    setList(copyListItems)
  };

  const listCard = list.map((item, index) => {
    return (
      <CardBox
        key={index}
        title={item.title}
        index={index}
        dragStart={dragStart}
        dragEnter={dragEnter}
        drop={drop}
      />
    );
  });
  
  return (
    <section
      data-testid="child-cardlist"
      className={CardListStyling.list_card}
      onDrop={drop}
    >
      {listCard}
    </section>
  );
};