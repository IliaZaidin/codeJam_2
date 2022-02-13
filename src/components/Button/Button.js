export function Button({ classType, text, onClick }) {
    return (
        <button className={`button ${classType}`} type="button" onClick={onClick}  >{text}</button >
    )

}