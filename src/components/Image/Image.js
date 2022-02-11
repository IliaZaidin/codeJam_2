import "./Image.css"

export function Image({ src, alt, id }) {
    return (
        <img className='image' src={src} alt={alt} id={id} />
    )
}