export function PopupColorPicker({ isPopupColorPickerOpen, onColorPickerSubmit }) {
  return (
    <form className={`PopupColorPicker ${isPopupColorPickerOpen && "PopupColorPicker__visible"}`} >
      <label className='ColorInputWrapper'>Select color
        <input className="ColorInput" type='color' onChange={onColorPickerSubmit} defaultValue='#C69CC1' />
      </label>
    </form>
  )
}