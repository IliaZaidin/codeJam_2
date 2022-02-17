
import { DropBox } from '../DropBox/DropBox';


export function Card({ dragging, setInitialData, initialData, droppedImages, onDrop, cardBackgroundColor, children }) {



  return (
    <div className='card' role={'container'} style={{ backgroundColor: `${cardBackgroundColor}` }} >
      <DropBox dragging={dragging} id={'T0'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children>
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T1'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T2'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T3'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T4'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T5'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T6'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T7'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T8'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T9'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T10'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
      <DropBox dragging={dragging} id={'T11'} setInitialData={setInitialData} initialData={initialData} droppedImages={droppedImages} onDrop={onDrop} children >
        {children}
      </DropBox>
    </div >
  )
}