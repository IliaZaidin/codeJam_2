import "./Image.css"
import { useDrag } from 'react-dnd'


export function Image({ src, alt, id, onImageClick }) {

    const [{ isDragging }, dragRef] = useDrag({
        type: 'Image',
        item: { id },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),

        }),

    })



    return (
        <>
            <img ref={dragRef} className='image' src={src} alt={alt} id={id} onClick={() => onImageClick(id)} style={{
                opacity: isDragging ? '0.5' : "1"
            }} />
        </>
    )
}