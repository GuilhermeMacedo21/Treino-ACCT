import logo from './logo.svg';
import './App.css';

const helloWorld = "Hello World!"
const data = new Date().toDateString()
function App() {
  return (
    <>
    <h2>{helloWorld}</h2><p> Data: {data}</p>
    <h2>{helloWorld.toUpperCase()}</h2><p> Data: {data}</p>
    <h2>{helloWorld.toLowerCase()}</h2><p> Data: {data}</p>
    <h2>{helloWorld.split('').reverse().join('')}</h2><p> Data: {data}</p>
    </>
  );
}

export default App;
