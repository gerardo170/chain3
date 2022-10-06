import React from "react";
import './ChainSearch.css'

function ChainSearch({searchValue, setSearchValue}){
const onSearchValueChange = (event) => {
  console.log(event.target.value);
  setSearchValue(event.target.value);
  };

    return [
        <input 
        className="ChainSearch"
        placeholder="Buscar"
        value={searchValue}
        onChange={onSearchValueChange}
         />,
         <p>{searchValue}</p>
    ];
}

export { ChainSearch };