<<<<<<< HEAD

import './PopupWithImages.css'





export function PopupWithImages({ isOpen, children }) {


    return (
        <div className={`popup popup_type_select-img ${isOpen ? "popup__visible" : " "}`}>
            {children}
        </div >
    )
=======
export function PopupWithImages({ isOpen, children }) {
  return (
    <div className={`popup popup_type_select-img ${isOpen ? "popup__visible" : " "}`}>
      {children}
    </div >
  )
>>>>>>> 0513a751176f7271a0184e95bc3c66f6964435df
}