import "./Main.css"
import { Card } from '../Card/Card'
import { Button } from '../Button/Button';

export function Main() {
    return (
        <div className="Main">
            <Card />
            <div className='button-wrapper'>
                <Button classType="button_type_add-image" text='' />
                <Button classType="button_type_add-text" text='Text' />

            </div>
        </div>
    )
}