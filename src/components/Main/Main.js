import { Card } from '../Card/Card'
import { Button } from '../Button/Button';
import { PopupWithImages } from '../PopupWithImages/PopupWithImages'
import { initialImages } from "../../utils/costants";
import { Image } from "../Image/Image";

export function Main({ isOpen, setIsPopupWithImgOpen, onImageClick, onTextButtonClick, onColorButtonClick, isPopupColorPickerOpen, onColorPickerSubmit, cardBackgroundColor }) {
  return (
    <div className="Main">

      <Card id="div1" cardBackgroundColor={cardBackgroundColor} isPopupColorPickerOpen={isPopupColorPickerOpen} onColorPickerSubmit={onColorPickerSubmit}/>

      <div className='button-wrapper'>
        <Button classType='button' text='Text' onButtonClick={onTextButtonClick} />
        <Button classType='button' text='Color' onButtonClick={onColorButtonClick} />
        {initialImages.map((image) => {
          return (
            <Image src={image.src} key={image.id} alt={image.alt} id={image.id} onImageClick={onImageClick} />
          )
        })}
      </div>

      {/* <PopupWithImages isOpen={isOpen} >

        {initialImages.map((image) => {
          return (
            <Image src={image.src} key={image.id} alt={image.alt} id={image.id} onImageClick={onImageClick} />
          )
        })}

      </PopupWithImages> */}
    </div>
  )
}