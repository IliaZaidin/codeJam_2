import { Card } from '../Card/Card'
import { Button } from '../Button/Button';
import { PopupWithImages } from '../PopupWithImages/PopupWithImages'
import { initialImages } from "../../utils/costants";
import { Image } from "../Image/Image";

export function Main({ isOpen, setIsPopupWithImgOpen, onImageClick }) {
  return (
    <div className="Main">

      <Card id="div1" />

      <div className='button-wrapper'>
        <Button classType='button' text='Text' />
        <Button classType='button' text='Upload' />
        {/* <Button classType="button_type_add-image" text='' onClick={setIsPopupWithImgOpen} /> */}
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