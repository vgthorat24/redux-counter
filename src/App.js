import logo from './logo.svg';
import './App.css';
import Conuter from './components/Conuter';

function App() {
  const addition=()=>{
    let a=10;
    let b=20;
    let total=a+b;
  }
  return (
    <div className="App">
     <Conuter/>
    </div>
  );
}

export default App;
