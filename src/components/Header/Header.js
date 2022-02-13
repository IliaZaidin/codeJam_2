import './Header.css'

export function Header({ children }) {
    return (
        <header className="header">
            <h1 className='header__title'>Make your own Valentin’s Cards </h1>
            {children}
        </header>
    )

}