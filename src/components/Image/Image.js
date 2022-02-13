export function Image({ src, alt, id, onImageClick }) {
  return (
    <>
      <img className='image' src={src} alt={alt} id={id} onClick={() => onImageClick(src)} />
    </>
  )
}