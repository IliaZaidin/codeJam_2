export function PopupColorPicker({ onColorPickerSubmit }) {
  return (
    <div className="PopupColorPicker" >
      <label className='ColorInputWrapper'>
        <h2 className="ColorPickerTitle">Color</h2>
        <input className="ColorInput" type='color' onChange={onColorPickerSubmit} defaultValue='#EDDBF0' />
      </label>
    </div>
  )
}