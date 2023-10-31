import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { imageList, ItemDetails } from "../../data/items";
import Items from "./Items";
import Header from "./Header";

export default function Gallery() {
  const [items, setItems] = useState<ItemDetails[]>(imageList);
  const [toDelete, setToDelete] = useState(0);


  useEffect(() => {
    // maintain count of selected Items
    setToDelete(items.reduce((acc,curr) => acc + (curr.selected ? 1 : 0) , 0));
  }, [toDelete,items]);


  // handle the event after dropping dragged element
  function handleOnDragEnd(result) {
    console.log(result.source.index , result.destination.index);
    const _items = Array.from(items);
    const [reorderedItem] = _items.splice(result.source.index, 1);
    _items.splice(result.destination.index, 0, reorderedItem);

    setItems(_items);
  }

  // toggle item check / uncheck
  function toggleItem(id){

    const newItems = items.map((item) => {
      if(item.id === id){
        return {...item, selected: !item.selected };
      }else return item;
    });
    setItems(newItems as ItemDetails[]);
  }

  // handle delete items event
  function handleDelete(){
      console.log('delete called');
      const newItems = items.filter(item => item.selected != true);
      setItems(newItems);
  }

  return (
    <div className="h-auto w-5/6 rounded-xl bg-white">
      <Header toDelete={toDelete} handleDelete={handleDelete}></Header>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="items" direction="vertical">
          {(provided) => (
            <ul
              className="grid md:grid-cols-4 lg:grid-cols-7 sm:grid-cols-2 place-items-start gap-3 p-10"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Items items={items} toggleItem={toggleItem}></Items>
              {provided.placeholder}
            </ul>
          
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

