import React from 'react';
import Form from './formulario/form'
import Mapa from './formulario/map'
import '../styles/contacto.scss';

const Contacto = () => {
    
    return (
        <main className="container-contacto">
             <section className="brand">
                     <p>A</p>
                     <p className="page">04</p>
             </section>
             <section className="box-1">
                 <div className="datos-container">
                     <div className="datos">
                        <h2>Nuestros Datos</h2>
                        <p>Teléfono: 03547-429157</p>
                        <p>Dirección: ViceInt.Doctor Jorge Nahal 235</p>
                     </div>
                    
                 </div>
             </section>
             <section className="box-2">
                 <div className="form-container">
                     <h1>Envianos tu consulta</h1>
                    <Form/>
                 </div>
             </section>
             <section className="box-3">
                 <div className="mapa-container">
                    <Mapa/>
                 </div>
             </section>
        </main>
    )
}

export default Contacto;