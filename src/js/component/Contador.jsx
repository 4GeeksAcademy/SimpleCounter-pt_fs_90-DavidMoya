import React from "react";
import ReactDOM from "react-dom/client";

const Counter = ({ horas, minutos, segundos }) => {
  return (
    <div className="contenedorContador row">
      <div className="reloj col-auto"><i className="fa-solid fa-clock"></i></div>
      <div className="digitos col-auto">{horas.toString().padStart(2, "0")}</div>
      <div className="separador col-auto">:</div>
      <div className="digitos col-auto">{minutos.toString().padStart(2, "0")}</div>
      <div className="separador col-auto">:</div>
      <div className="digitos col-auto">{segundos.toString().padStart(2, "0")}</div>
    </div>
  )
}

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

setInterval(() => {
  ReactDOM.createRoot(document.getElementById('contador')).render(
    <React.StrictMode>
      <Counter horas={counter3} minutos={counter2} segundos={counter1} />
    </React.StrictMode>,
  )
  counter1 += 1;
  if (counter1 === 60) {
    counter1 = 0; 
    counter2 += 1;
  }
  if (counter2 === 60) {
    counter2 = 0;
    counter3 += 1;
  }

}, 1000);

