import React from "react";
import { ChainSearch } from './ChainSearch.jsx';
import { ChainList } from './ChainList.jsx';
import { ChainItem } from './ChainItem.jsx';
import { ChainButton } from './ChainButton.jsx';
//import './App.css';

const defaultDatos = [
  { Cedula: "121", Fecha: "12/4/2020", Cliente: "Jose", Empresa_Envio: "Fedex", Tracking: "#132", Currier: "IDK", Via: "Barquisimeto", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
  { Cedula: "131", Fecha: "12/4/2020", Cliente: "carlos", Empresa_Envio: "Fedex2", Tracking: "#133", Currier: "IDK", Via: "CDMX", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
  { Cedula: "141", Fecha: "12/4/2020", Cliente: "Joshua", Empresa_Envio: "Fedex3", Tracking: "#134", Currier: "IDK", Via: "David", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
  { Cedula: "341", Fecha: "12/4/2020", Cliente: "Maria", Empresa_Envio: "Fedex4", Tracking: "#135", Currier: "IDK", Via: "Nueva York", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
];


function App() {
  const [datos] = React.useState(defaultDatos);
  const [searchValue, setSearchValue] = React.useState('');

  let searchedDatos = [];

  if (!searchValue.length >= 1) {
    searchedDatos = datos;
  } else {
    searchedDatos = datos.filter(dato => {
      const datoText = dato.text.toLowerCase();
      const SearchText = searchValue.toLowerCase();
      return datoText.includes(SearchText);
    });
  }

  return (
    <React.Fragment>
    <ChainSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    <ChainList>
      {searchedDatos.map(dato => (
        <ChainItem key={dato.Cedula} {...dato}/>
      ))},
    </ChainList> 
      <ChainButton />
    </React.Fragment>
  );
}

export default App;
