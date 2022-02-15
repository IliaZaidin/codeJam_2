import { PopupColorPicker } from '../PopupColorPicker/PopupColorPicker';

export function Card({ id, cardBackgroundColor,isPopupColorPickerOpen, onColorPickerSubmit }) {
  return (
    <div className='card' id={id} style={{ backgroundColor: `${cardBackgroundColor}` }}>
      <PopupColorPicker isPopupColorPickerOpen={isPopupColorPickerOpen} onColorPickerSubmit={onColorPickerSubmit} />
    </div >
  )
}