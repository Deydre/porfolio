import { useState, useEffect } from 'react';
import { context } from './context/context'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    isDark
      ? document.body.classList.remove('light')
      : document.body.classList.add('light')
  }, [isDark]);

  const updateDarkMode = (boolean) => {
    setIsDark(boolean)
  };

  return (
    <>
      <div className="background"></div>
      <context.Provider value={{ isDark, updateDarkMode }}>
        <Header />
        <Main />
      </context.Provider >
      <Footer />
    </>
  )
}

export default App
