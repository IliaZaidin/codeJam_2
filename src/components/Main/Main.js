import { Card } from '../Card/Card'
import { Button } from '../Button/Button';
import { PopupWithImages } from '../PopupWithImages/PopupWithImages'
import { initialImages } from "../../utils/costants";
import { Image } from "../Image/Image";
import { PopupColorPicker } from '../PopupColorPicker/PopupColorPicker';

export function Main({ isOpen, setIsPopupWithImgOpen, onImageClick, onTextButtonClick, onColorPickerSubmit, cardBackgroundColor }) {
  return (
    <div className="Main">

      <Card id="div1" cardBackgroundColor={cardBackgroundColor}/>

      <div className='button-wrapper'>
        <Button classType='button' text='Text' onButtonClick={onTextButtonClick} />
        <PopupColorPicker onColorPickerSubmit={onColorPickerSubmit} />
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