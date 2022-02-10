import "./Button.css"

export function Button({ classType, text }) {
    return (
        <button className={`button ${classType}`} type="button"  >{text}</button >
    )

}