
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main'
import { useState, useEfftect } from 'react';



function App() {

  const [isPopupWithImgOpen, setIsPopupWithImgOpen] = useState(false)

  function OpenPopupWithImages() {
    setIsPopupWithImgOpen(true)
  }


  return (
    <div className="App">
      <Header />

      <Main
        isOpen={isPopupWithImgOpen}
        setIsPopupWithImgOpen={OpenPopupWithImages} />


    </div>
  );
}

export default App;
