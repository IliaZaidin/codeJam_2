<<<<<<< HEAD
import './Header.css'

export function Header({ children }) {
    return (
        <header className="header">
            <h1 className='header__title'>Make your own Valentin’s Cards </h1>
            {children}
=======
export function Header({ children }) {
    return (
        <header className="header">
            {children}
            <h1 className='header__title'>Make your own Valentine’s Card</h1>
>>>>>>> 0513a751176f7271a0184e95bc3c66f6964435df
        </header>
    )

}