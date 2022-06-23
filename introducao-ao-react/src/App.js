import logo from './logo.svg';
import './App.css';

const helloWorld = "Hello World!"
const data = new Date().toDateString()
function helloWorldEmbaralhado(string){
    let embaralhado = string.split('');
    let cont = 0;
    while(cont<12){
        if(cont%2 == 1){
          embaralhado[cont] = embaralhado[cont].toUpperCase();
        }else{
          embaralhado[cont] = embaralhado[cont].toLowerCase();
        }
        cont++;
    }
    return embaralhado;
}
function App() {
  return (
    <>
    <div className="format"><h2>{helloWorld}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{helloWorld.toUpperCase()}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{helloWorld.toLowerCase()}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{helloWorld.split('').reverse().join('')}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{helloWorldEmbaralhado("Hello World!")}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{helloWorldEmbaralhado(helloWorld.split('').reverse().join(''))}</h2><p> Data: {data}</p></div>
    </>
  );
}

export default App;
