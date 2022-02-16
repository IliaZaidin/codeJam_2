import { PopupColorPicker } from '../PopupColorPicker/PopupColorPicker';
import { useDrop } from 'react-dnd';


import { initialImages } from '../../utils/costants';



export function Card({ setInitialData, initialData, droppedImages, onDrop, cardBackgroundColor, isPopupColorPickerOpen, onColorPickerSubmit, children }) {

  function handleDropItem(id) {

    const image = initialImages.find((image) => image.id === id)
    image.drag = true;
    onDrop([image, ...droppedImages])
    setInitialData(initialData.filter((image) => image.id !== id))




  }

  const [{ isOver }, dropRef] = useDrop({
    accept: 'Image',
    drop: (item) => handleDropItem(item.id),
    collect: (monitor) => ({
      isOver: !monitor.isOver(),
    }),
  })

  return (
    <div className='card' role={'container'} ref={dropRef} style={{ backgroundColor: isOver ? `${cardBackgroundColor}` : 'violet' }}>
      <PopupColorPicker isPopupColorPickerOpen={isPopupColorPickerOpen} onColorPickerSubmit={onColorPickerSubmit} />
      {children}
    </div >
  )
}

// backgroundColor: `${cardBackgroundColor}` 