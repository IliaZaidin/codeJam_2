import './DropBox.css'

import { useDrop } from 'react-dnd';
import { initialImages } from '../../utils/costants';
import { useState, useEffect } from 'react';
import { Image } from '../Image/Image';


export function DropBox({ id, children, setInitialData, initialData, droppedImages, onDrop }) {
    const [monitorId, setMonitorId] = useState('')
    const [img, setImg] = useState([])
    const [state, setState] = useState(true)


    function handleDropItem(id, targetMonitor) {
        setMonitorId(targetMonitor.targetId)
        const image = initialImages.find((image) => image.id === id)
        image.drag = true;
        onDrop([image, ...droppedImages])
        setImg(image)
        // setInitialData(initialData.filter((image) => image.id !== id))
        console.log(targetMonitor)
        setState(true)



    }


    const [{ isOver }, dropRef] = useDrop({
        accept: 'Image',
        drop: (item, targetMonitor) => { handleDropItem(item.id, targetMonitor) },
        collect: (monitor) => ({
            isOver: !monitor.isOver(),
        }),
    })

    function handleClick() {

        setState(false);

    }





    return (
        <div onClick={handleClick} id={id} ref={dropRef} className='DropBox' style={{ backgroundColor: isOver ? '' : 'violet' }}>

            {id === monitorId && state ? <Image src={img.src} key={img.id} alt={img.alt} id={img.id} /> : ''}

        </div >
    )
}