import './App.css';

const helloWorld = "Hello World!"
const data = new Date().toDateString()
function App() {
  return (
    <>
    <div className="format"><h2>{helloWorld}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{helloWorld.toUpperCase()}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{helloWorld.toLowerCase()}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{helloWorld.split('').reverse().join('')}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{helloWorldEmbaralhado(helloWorld)}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{helloWorldEmbaralhado(helloWorld.split('').reverse().join(''))}</h2><p> Data: {data}</p></div>
    <div className="format" id="world7"><h2>Hello World!</h2><button onClick={alteraFundo}>Alterar</button><p> Data: {data}</p></div>
    <div className="format"><h2>{alteraLetras(helloWorld)}</h2><p> Data: {data}</p></div>
    <div className="format"><h2>{alteraLetras(helloWorld.split('').reverse().join(''))}</h2><p> Data: {data}</p></div>
    </>
  );
}
function helloWorldEmbaralhado(string){
  let embaralhado = string.split('');
  let cont = 0;
  while(cont<embaralhado.length){
      if(cont%2 === 1){
        embaralhado[cont] = embaralhado[cont].toUpperCase();
      }else{
        embaralhado[cont] = embaralhado[cont].toLowerCase();
      }
      cont++;
  }
  return embaralhado;
}
function alteraFundo(){
  let elem = document.getElementById("world7")
  if(elem){
    elem.classList.toggle("fundo");
  }  
}
function alteraLetras(string){
  let separado = string.split('');
  console.log(separado)
  let cont = 0;
  while(cont<12){
    if(separado[cont] === 'e') {
      separado[cont] = 5;
    }else if(separado[cont] === 'o'){
      separado[cont] = 0;
    }else if(separado[cont] === 'l') {
      separado[cont] = 1;
    }
      cont++;
  }
  return separado;
}
export default App;
