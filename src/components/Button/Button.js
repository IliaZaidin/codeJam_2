export function Button({ classType, text, onButtonClick, isPopupColorPickerOpen, onColorPickerSubmit }) {
  return (
    <div>
      <button className={classType} type="button" onClick={onButtonClick}>{text}</button >
    </div>
  )
}