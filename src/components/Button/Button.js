export function Button({ classType, text, onButtonClick }) {
  return (
    <button className={`button ${classType}`} type="button" onClick={ onButtonClick }>{text}</button >
  )
}