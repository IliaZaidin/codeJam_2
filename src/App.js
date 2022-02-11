
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main'
import { useState, useEfftect } from 'react';
import { Image } from './components/Image/Image';



function App() {

  const [isPopupWithImgOpen, setIsPopupWithImgOpen] = useState(false)

  function OpenPopupWithImages() {

    setIsPopupWithImgOpen(true)

  }

  function setCardBackGround(imgsrc) {
    document.querySelector('.card').style.backgroundImage = `url(${imgsrc})`
    console.log(imgsrc)
  }




  return (
    <div className="App">
      <Header />

      <Main
        isOpen={isPopupWithImgOpen}
        setIsPopupWithImgOpen={OpenPopupWithImages}
        onImageClick={setCardBackGround}


      />


    </div>
  );
}

export default App;
