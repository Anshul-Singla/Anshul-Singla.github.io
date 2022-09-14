import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/skills';
import ProfileComponent from './components/profile/Profile';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <h1 style={{
        textAlign:'center'
      }}>LIFE IS AWESOME....</h1>
      <Navbar/>
      <ProfileComponent/>
      <About/> 
      <Skills/>
    </div>
  );
}

export default App;
