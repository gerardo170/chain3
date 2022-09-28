import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TableChain} from "./TableChain/TableChain";
import {InsertChain} from "./InsertChain/InsertChain";

function App(props) {
  const data = [
    { Cedula: "#", Fecha: "12/4/2020", Cliente: "Jose", Empresa_Envio: "Fedex", Tracking: "#132", Currier: "IDK", Via: "Barquisimeto", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
    { Cedula: "#",Fecha: "12/4/2020", Cliente: "Jose", Empresa_Envio: "Fedex", Tracking: "#132", Currier: "IDK", Via: "Barquisimeto", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
    { Cedula: "#",Fecha: "12/4/2020", Cliente: "Jose", Empresa_Envio: "Fedex", Tracking: "#132", Currier: "IDK", Via: "Barquisimeto", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
    { Cedula: "#",Fecha: "12/4/2020", Cliente: "Jose", Empresa_Envio: "Fedex", Tracking: "#132", Currier: "IDK", Via: "Barquisimeto", Cantidad_Pieza: " 3", Peso: "3K", Costo_Envio: "30$", Status: "Entregado" },
  ];
  
  class App extends React.Component {
    state = {
      data: data,
      form:{
        Cedula:'',
        Usuario:'',
        Cliente:'',
        EmpresaEnvio:'',
        Tracking:'',
        Currier:'',
        Via:'',
        cantidad:'',
        Peso:'',
        Costo:'',
      },
      modalInsertar: false,
      modalEditar: false,
    };
  
  handleChange=e=>{
  props.setState({
  form:{
    ...props.state.form,
    [e.target.name]: e.target.value,
    
  }
  });
  }
  
  mostrarModalInsertar=()=>{
    props.setState({modalInsertar: true});
  }
  
  ocultarModalInsertar=()=>{
    props.setState({modalInsertar: false});
  }
  
  mostrarModalEditar=(registro)=>{
    props.setState({modalEditar: true, form: registro});
  }
  ocultarModalEditar=()=>{
    props.setState({modalEditar: false});
  }
  
  insertar=()=>{
    var valorNuevo={...props.state.form};
    valorNuevo.id=props.state.data.length+1;
    var lista=props.state.data;
    lista.push(valorNuevo);
    props.setState({data: lista, modalInsertar: false});
  }
  
  editar=(dato)=>{
    var contador=0;
    var lista=props.state.data;
    lista.Map((registro)=>{
      if(dato.id===registro.id){
        lista[contador].Cedula=dato.Cedula;
        lista[contador].Fecha=dato.Fecha;
        lista[contador].Cliente=dato.Cliente;
        lista[contador].Empresa_Envio=dato.Empresa_Envio;
        lista[contador].Tracking=dato.Tracking;
        lista[contador].Currier=dato.Currier;
        lista[contador].Via=dato.Via;
        lista[contador].Cantidad_Pieza=dato.Cantidad_Pieza;
        lista[contador].Peso=dato.Peso;
        lista[contador].Costo_Envio=dato.Costo_Envio;
        lista[contador].Status=dato.Status;
      }
      contador++;
    });
    props.setState({data: lista});
  }
  
    render() {
      return (
        <div>
         <TableChain />,
         <InsertChain />,
       </div>)
    }
  }
}


export default App;