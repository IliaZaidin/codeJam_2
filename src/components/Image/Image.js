import "./Image.css"
import { useDrag } from 'react-dnd'


export function Image({ src, alt, id, position }) {





    const [{ isDragging }, dragRef] = useDrag({
        type: 'Image',
        item: { id },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),

        }),

    })



    return (
        <>
            <img ref={dragRef} className='image' src={src} alt={alt} id={id} style={{
                opacity: isDragging ? '0.5' : "1",
                position: `${position}`,

            }} />
        </>
    )
}