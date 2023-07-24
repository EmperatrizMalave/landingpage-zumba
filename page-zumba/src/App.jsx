import './App.css'
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';

function App() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header className={isHeaderHidden ? 'header hidden' : 'header'} />
    </div>
  );
}

export default App
