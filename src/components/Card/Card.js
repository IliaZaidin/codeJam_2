export function Card({ id, cardBackgroundColor }) {
  return (
    <div className='card' id={id} style={{ backgroundColor: `${cardBackgroundColor}` }}>
    </div >
  )
}