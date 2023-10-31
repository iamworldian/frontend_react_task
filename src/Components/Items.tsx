
import { Draggable } from "react-beautiful-dnd";

const Items = ({items,toggleItem}) => {
  return (
    <>
    {
        items.map(({ id, image_url_path, selected }, index) => {
        return (
          <Draggable
            key={id}
            draggableId={id.toString()}
            index={id}
            
          >
            {(provided) => (
              <li
                className={`w-full h-full relative rounded-lg border-4 ${
                  index === 0 ? "col-span-2 row-span-2 border-4 border-yellow-500" : ""
                }`}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                onClick={() => toggleItem(id)}
              >
            {
              <div className={`absolute ${selected ? '' : 'opacity-0'}   hover:opacity-90 h-full w-full bg-slate-300/80 z-10`}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="m-4 h-4 w-4 rounded-sm border-2 border-blue-500 accent-yellow-200"
                    checked={selected}
                  />
                </div>
            }
                <img src={image_url_path} alt="" className="z-1"/>
              </li>
            )}
          </Draggable>
        );
      
      })}
      </>
  )
}

export default Items