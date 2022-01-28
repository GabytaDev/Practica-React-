import './App.css';
import React, {useState} from 'react';

const App = ()=>{

  const [textoUsuario, setTextoUsuario] = useState("")
  const [valorCheckbox, setValorCheckbox] = useState("NO")
  const [mostrarModal, setMostrarModal] = useState("modal-oculto")

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
  
  const handleClick=()=>{
    setMostrarModal("modal")
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
        <button onClick={handleClick}>Acepto</button>

        <div className={mostrarModal}>
          <p>Se registró con exito</p>
        </div>
      </div>
    </div>
  )
  
}
export default App;
