import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <h1 style={{
        textAlign:'center'
      }}>LIFE IS AWESOME....</h1>
      <Navbar/>
      <Skills/>
    </div>
  );
}

export default App;
