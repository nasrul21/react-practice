import { useState } from "react"
import AccordionItem from "./AccordionItem";

export default function Accordion({ items = [] }) {
  const [openedItem, setOpenedItem] = useState();
  const onItemClick = (index) => {
    if (index !== openedItem) setOpenedItem(index);
    else setOpenedItem();
  }

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} isOpen={openedItem === index} onItemClick={() => onItemClick(index)} />
      ))}
    </div>
  )
}

