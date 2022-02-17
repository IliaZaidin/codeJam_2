import '../../index.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Logo } from '../Logo/Logo';
import { useState } from 'react';

function App() {
  const [cardBackgroundColor, setCardBackgroundColor] = useState('#EDDBF0');

  function handleColorPickerSubmit(event) {
    setCardBackgroundColor(event.target.value);
  }

  return (
    <div className='App'>
      <div className='App__wrapper'>
        <Header children>
          <Logo />
        </Header>
        <Main
          cardBackgroundColor={cardBackgroundColor}
          onColorPickerSubmit={handleColorPickerSubmit}
        />
      </div>
    </div>
  );
}

export default App;
