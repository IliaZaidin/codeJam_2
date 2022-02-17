import { Card } from '../Card/Card'
import { Button } from '../Button/Button';

import { initialImages } from "../../utils/costants";
import { Image } from "../Image/Image";
import { useState } from 'react';
import { PopupColorPicker } from '../PopupColorPicker/PopupColorPicker';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer'

export function Main({ onTextButtonClick, onColorPickerSubmit, cardBackgroundColor }) {
  const [initialData, setInitialData] = useState(initialImages)
  const [droppedImages, setDroppedImages] = useState([])

  // function handleDropImageClick(id) {
  //   const deleteImage = droppedImages.find((image) => image.id === id)
  //   setDroppedImages(droppedImages.filter((image) => image !== deleteImage))
  //   setInitialData(initialData.concat(deleteImage))
  // }

  return (
    <div className="Main">

      <Card setInitialData={setInitialData} onDrop={setDroppedImages} droppedImages={droppedImages} initialData={initialData} cardBackgroundColor={cardBackgroundColor} children>
        {/* {droppedImages.map((image) => {
          return (
            <Image src={image.src} key={image.id} alt={image.alt} id={image.id} />
          )
        })} */}
      </Card>

      <div className='button-wrapper'>
        <Button classType='button' text='Text' onButtonClick={onTextButtonClick} />
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