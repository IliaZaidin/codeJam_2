import '../index.css';
import { Header } from './Header';
import { Main } from './Main';
import { Logo } from './Logo';
import { useState, useEfftect } from 'react';

function App() {
  const [isPopupWithImgOpen, setIsPopupWithImgOpen] = useState(false)

  function OpenPopupWithImages() {
    setIsPopupWithImgOpen(true)
  }

  function setCardBackGround(imgsrc) {
    document.querySelector('.card').style.backgroundImage = `url(${imgsrc})`
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
          onImageClick={setCardBackGround}
        />
      </div>
    </div>
  );
}

export default App;
