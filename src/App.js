import './App.css';
import { useContext, useEffect } from 'react';
import {AppContext} from './hooks/AppContext';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const { fetchpost } = useContext(AppContext);

  useEffect(() => {
    fetchpost();
  },[]);

  return (
    <div className="App">
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
