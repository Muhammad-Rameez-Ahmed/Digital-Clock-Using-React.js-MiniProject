import './App.css';
import Clock from './Components/Clock';
import Show from './Components/Show';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <div className='App'>
        <Clock />
        <Show />
      </div>
      

    </>
  );
}

export default App;
