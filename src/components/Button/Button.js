export function Button({ classType, text, onButtonClick }) {
  return (
    <div>
      <button className={classType} type="button" onClick={onButtonClick}>{text}</button >
    </div>
  )
}