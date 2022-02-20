import { useDrag } from 'react-dnd'

import { useRef } from 'react'

export function Image({ src, alt, id, dragging }) {

    let x = 0
    const imageRef = useRef();

    const [{ isDragging }, dragRef] = useDrag({
        type: 'Image',
        item: { id },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    function click() {
        if (dragging) {
            x = x + 45;

            imageRef.current.style.transform = `rotate(${x}deg)`

            console.log(imageRef.current.style)


        }


    }


    return (
        <>
            <img onClick={click} ref={dragging ? imageRef : dragRef} className='image' src={src} alt={alt} id={id} style={{
                backgroundColor: isDragging ? 'gold' : "transperent",
            }} />
        </>
    )
}