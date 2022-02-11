import "./Main.css"
import { Card } from '../Card/Card'
import { Button } from '../Button/Button';
import { PopupWithImages } from '../PopupWithImages/PopupWithImages'
import { initialImages } from "../../utils/costants";
import { Image } from "../Image/Image";

export function Main({ isOpen, setIsPopupWithImgOpen, onImageClick }) {
    return (
        <div className="Main">
            <div className="page-wrapper">
                <Card id="div1" />


                <div className='button-wrapper'>
                    <Button classType="button_type_add-image" text='' onClick={setIsPopupWithImgOpen} />
                    <Button classType="button_type_add-text" text='Text' />


                </div>
            </div>
            <PopupWithImages isOpen={isOpen} >

                {initialImages.map((image) => {
                    return (

                        <Image src={image.src} key={image.id} alt={image.alt} id={image.id} onImageClick={onImageClick} />
                    )


                })}

            </PopupWithImages>
        </div>
    )
}