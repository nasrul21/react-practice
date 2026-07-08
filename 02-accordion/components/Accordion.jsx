import { useState } from "react"

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

function AccordionItem({ item, isOpen = false, onItemClick = () => { } }) {
  return (
    <div style={styles.accordionItem}>
      <h4 style={styles.accordionTitle} onClick={onItemClick}>
        {item.title}
      </h4>
      <div style={{ ...styles.accordionSlider, gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ ...styles.accordionContent }}>
            {item.content}
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  accordionItem: {
    borderBottom: '1px solid var(--primary)',
  },
  accordionTitle: {
    margin: 0,
    padding: '16px',
    cursor: 'pointer'
  },
  accordionSlider: {
    display: 'grid',
    overflow: 'hidden',
    transition: 'grid-template-rows 0.3s ease-in-out'
  },
  accordionContent: {
    margin: '16px',
  },
}
