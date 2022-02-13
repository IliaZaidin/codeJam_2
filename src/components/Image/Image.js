<<<<<<< HEAD
import "./Image.css"

export function Image({ src, alt, id, onImageClick }) {


    return (
        <>
            <img className='image' src={src} alt={alt} id={id} onClick={() => onImageClick(src)} />
        </>
    )
=======
export function Image({ src, alt, id, onImageClick }) {
  return (
    <>
      <img className='image' src={src} alt={alt} id={id} onClick={() => onImageClick(src)} />
    </>
  )
>>>>>>> 0513a751176f7271a0184e95bc3c66f6964435df
}