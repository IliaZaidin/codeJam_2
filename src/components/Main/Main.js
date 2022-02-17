import { Card } from '../Card/Card'
import { Button } from '../Button/Button';

import { initialImages } from "../../utils/costants";
import { Image } from "../Image/Image";
import { useState } from 'react';
import { PopupColorPicker } from '../PopupColorPicker/PopupColorPicker';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer'

export function Main({ cardText, onTextButtonClick, onColorPickerSubmit, cardBackgroundColor }) {
  const [initialData, setInitialData] = useState(initialImages)
  const [droppedImages, setDroppedImages] = useState([])
  const [dragging, setDragging] = useState(false)

  function handleDragModeClick() {
    setDragging(!dragging)

  }



  return (
    <div className="Main">
      <div className='panel-wrapper'>
        <Button classType='on-off-drag-mode' text='drag on/off' onButtonClick={handleDragModeClick} />

      </div>
      <Card dragging={dragging} setInitialData={setInitialData} onDrop={setDroppedImages} droppedImages={droppedImages} initialData={initialData} cardBackgroundColor={cardBackgroundColor} children>

      </Card>

      <div className='button-wrapper'>
        {/* <Button classType='button' text='Text' onButtonClick={onTextButtonClick} /> */}
        <PopupColorPicker onColorPickerSubmit={onColorPickerSubmit} />

        {initialData.map((image) => {
          return (
            <Image src={image.src} key={image.id} alt={image.alt} id={image.id} onImageClick={() => { }} />
          )
        })}
      </div>
      <AudioPlayer />
    </div>
  )
}