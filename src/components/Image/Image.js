import { useDrag } from 'react-dnd'

import { useRef } from 'react'

export function Image({ src, alt, id, position }) {

    const imageRef = { useRef }

    const [{ isDragging }, dragRef] = useDrag({
        type: 'Image',
        item: { id },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return (
        <>
            <img onClick={() => console.log(imageRef.current)} ref={dragRef} className='image' src={src} alt={alt} id={id} style={{
                backgroundColor: isDragging ? 'gold' : "transperent",
            }} />
        </>
    )
}