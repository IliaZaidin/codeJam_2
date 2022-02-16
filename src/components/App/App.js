import '../../index.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Logo } from '../Logo/Logo';
import { useState, useEfftect } from 'react';

function App() {
  const [isPopupWithImgOpen, setIsPopupWithImgOpen] = useState(false);
  const [cardBackgroundColor, setCardBackgroundColor] = useState('#EDDBF0');


  function OpenPopupWithImages() {
    setIsPopupWithImgOpen(true)
  }

  function selectImage(imgsrc) {
    // document.querySelector('.card').style.backgroundImage = `url(${imgsrc})`
  }

  function handleColorPickerSubmit(event) {
    setCardBackgroundColor(event.target.value);
  }

  function handleTextButtonClick() {
    //
  }

  return (
    <div className='App'>
      <div className='App__wrapper'>
        <Header children>
          <Logo />
        </Header>
        <Main
          isOpen={isPopupWithImgOpen}
          setIsPopupWithImgOpen={OpenPopupWithImages}
          onImageClick={selectImage}
          onTextButtonClick={handleTextButtonClick}

          onColorPickerSubmit={handleColorPickerSubmit}
          cardBackgroundColor={cardBackgroundColor}
        />
      </div>
    </div>
  );
}

export default App;
