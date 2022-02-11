
import './PopupWithImages.css'





export function PopupWithImages({ isOpen, children }) {


    return (
        <div className={`popup popup_type_select-img ${isOpen ? "popup__visible" : " "}`}>
            {children}
        </div >
    )
}