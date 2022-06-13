import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const widthHandler = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(()=>{
    console.log('addEventListener called');
    window.addEventListener('resize',widthHandler);

    return () => {
      console.log('removeEventListener called');
      window.removeEventListener('resize',widthHandler);
    }
  },[windowWidth])

  
  return (
    <>
      {windowWidth}
    </>
  );
}

export default App;
