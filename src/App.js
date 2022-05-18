import './App.css';
import React, {useState, useEffect} from 'react';
import Comentarios from './components/Comentarios';
import { dato } from './data/data';

function App() {

  const [testimonios, setTestimonios] = useState([])

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dato)
      },2000)
    })
    
    promesa
      .then((res)=>{setTestimonios(res)})
      .then(()=>console.log(testimonios))
      .catch((error)=>console.log(error))
    }, [])
  

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros clientes:</h1>

        { testimonios.length > 0 ? ( testimonios.map( (t) => <Comentarios props={t} key={t.id}/>)) : (<h1>Cargando...</h1>)}
      </div>
    </div>
  );
}

export default App;
