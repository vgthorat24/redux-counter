import logo from './logo.svg';
import './App.css';
import Conuter from './components/Conuter';

function App() {
  const substraction=()=>{
    let p=20;
    let q=30;
    let total=p-q;
  }
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
