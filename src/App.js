import icon from './valentines-day.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import {Link} from "react-router-dom";



function App() {

    const [noClickCount, setNoClickCount] = useState(0);

    const handleNoClick = () => {
        setNoClickCount(noClickCount + 1);
        console.log('No Button clicked!');
    };

    const handleYesClick = () => {
        console.log('Yes Button clicked!');
    };

    let yesButtonClass = 'yesButton';
    let noButtonClass = 'noButton';
    let noButtonVisible = true
    if (noClickCount == 1) {
        yesButtonClass = 'yesButton1';
        noButtonClass = 'noButton1';
    }
    else if (noClickCount == 2) {
        yesButtonClass = 'yesButton2';
        noButtonClass = 'noButton2';
    }
    else if (noClickCount == 3) {
        yesButtonClass = 'yesButton3';
        noButtonVisible = false;
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
      </header>
      <header className='question'> Will you be my Valentine?</header>
      <button className={yesButtonClass} onClick={handleYesClick}>Yes</button>
      {"      "}
      {noButtonVisible && (<button className={noButtonClass} onClick={handleNoClick}>No</button>)}
    </div>
  );
}

export default App;
