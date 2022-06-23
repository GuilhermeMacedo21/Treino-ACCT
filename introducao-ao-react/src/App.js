import logo from './logo.svg';
import './App.css';

const helloWorld = "Hello World!"

function App() {
  return (
    <>
    <h2>{helloWorld}</h2>
    <h2>{helloWorld.toUpperCase()}</h2>
    <h2>{helloWorld.toLowerCase()}</h2>
    <h2>{helloWorld.split('').reverse()}</h2>
    </>
  );
}

export default App;
