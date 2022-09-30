import React from "react";
import { ChainSearch } from './ChainSearch.js';
import { ChainList } from './ChainList.js';
import { ChainItem } from './ChainItem.js';
import { ChainButton } from './ChainButton.js';
//import './App.css';

const data = [
  { Cedula: "#", Fecha: "12/4/2020", Cliente: "Jose", Empresa_Envio: "Fedex", Tracking: "#132", Currier: "IDK", Via: "Barquisimeto", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
  { Cedula: "#",Fecha: "12/4/2020", Cliente: "Jose", Empresa_Envio: "Fedex", Tracking: "#132", Currier: "IDK", Via: "Barquisimeto", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
  { Cedula: "#",Fecha: "12/4/2020", Cliente: "Jose", Empresa_Envio: "Fedex", Tracking: "#132", Currier: "IDK", Via: "Barquisimeto", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
  { Cedula: "#",Fecha: "12/4/2020", Cliente: "Jose", Empresa_Envio: "Fedex", Tracking: "#132", Currier: "IDK", Via: "Barquisimeto", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
];

function App() {
  return (
    <React.Fragment>
    <ChainSearch />
    <ChainList>
      {data.map(data => (
        <ChainItem text={data.text}/>
      ))}
    </ChainList> 
      <ChainButton />
    </React.Fragment>
  );
}

export default App;
