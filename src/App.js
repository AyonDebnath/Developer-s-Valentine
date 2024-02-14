import icon from './valentines-day.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import {Link} from "react-router-dom";



function App() {

    const [noClickCount, setNoClickCount] = useState(0);
    const [yesButtonVisible, setYesButtonVisible] = useState(true);
    // const [noButtonVisible, setNoButtonVisible] = useState(true);
    let noButtonVisible = true;
    let yesButtonClass = 'yesButton';
    let noButtonClass = 'noButton';

    const handleNoClick = () => {
        setNoClickCount(noClickCount + 1);
        console.log('No Button clicked!');
    };

    const handleYesClick = () => {
        setYesButtonVisible(false);
        console.log("yesButtonVisible:", yesButtonVisible)
        console.log('Yes Button clicked!');
    };

    if (noClickCount == 1) {
        yesButtonClass = 'yesButton1';
        noButtonClass = 'noButton1';
    }
    else if (noClickCount == 2) {
        yesButtonClass = 'yesButton2';
        noButtonClass = 'noButton2';
    }
    else if (noClickCount == 3) {
        noButtonVisible = false;
        yesButtonClass = 'yesButton3';
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
      </header>
      <header className='question'> Will you be my Valentine?</header>
        {yesButtonVisible ? (<button className={yesButtonClass} onClick={handleYesClick}>Yes</button>) : (<p className="yesRespnse" >Aww that's so sweet </p>)}
      {"      "}
      {noButtonVisible && yesButtonVisible && (<button className={noButtonClass} onClick={handleNoClick}>No</button>)}
    </div>
  );
}

export default App;
