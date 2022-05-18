import React from 'react'
import '../styles/Comentarios.css'

const Comentarios = ({props}) => {
  return (
    <div className='contenedor-comentarios'>
      <img 
        className='imagen-comentario'
        src={`https://robohash.org/${props.id}/?set=set2`}
        alt='Foto de usuario' />
      <div className='contenedor-texto'>
        <p className='nombre-comentario'>{props.nombre} del {props.planeta}</p>
        <p className="cargo-comentario">{props.cargo} en {props.empresa}</p>
        <p className="texto-comentario"> "{props.comentario}"</p>
      </div>
    </div>
  )
}

export default Comentarios