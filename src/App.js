import './App.css';
import React, {useState} from 'react';

const App = ()=>{

  const [textoUsuario, setTextoUsuario] = useState("")
  const [valorCheckbox, setValorCheckbox] = useState("NO")
  const [mostrarModal, setMostrarModal] = useState("modal-oculto")
  const [cerrarModal, setCerrarModal] = useState("modal-abierto")

  const handleChangeTexto=(e)=>{
    setTextoUsuario(e.target.value)
  }
  //checkbox
  const handleChangeCheckBox=(e)=>{
    if(e.target.checked){
      setValorCheckbox("SI")
    }else{
      setValorCheckbox("NO")
    }
  }
  
  //abre modal
  const handleClick=()=>{
    setMostrarModal("modal")
    
  }
  //cerrar modal
  const handleClickCerrar = ()=>{
    setMostrarModal("modal-oculto")
  }
  
  return(
    <div className='content-general'>
      <div className='content-input'>
        <input type="text" name="nombre" onChange={handleChangeTexto}></input>
        <p>Usted ingreso: <span>{textoUsuario}</span> </p>
        
        <div className='content-agree'>
        <p>Esta de acuerdo? <span>{valorCheckbox}</span></p>
        <input type="checkbox" name="agree" onChange={handleChangeCheckBox}></input>
        </div>
        <br></br>
        <button onClick={handleClick} className='btn-acept'>Acepto</button>
        <div className={mostrarModal}>
          <button className={cerrarModal} onClick={handleClickCerrar}>cerrar</button> 
          <p>Se registró con exito</p>
          <p>Sus datos: <span>{textoUsuario}</span> </p>
          <p>De acuerdo: <span>{valorCheckbox}</span></p>
        </div>
      </div>
    </div>
  )
  
}
export default App;
