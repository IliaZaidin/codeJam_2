<<<<<<< HEAD
import "./Button.css"

=======
>>>>>>> 0513a751176f7271a0184e95bc3c66f6964435df
export function Button({ classType, text, onClick }) {
    return (
        <button className={`button ${classType}`} type="button" onClick={onClick}  >{text}</button >
    )

}