import React from 'react';
import Form from './formulario/form'
import Mapa from './formulario/map'
import '../styles/contacto.scss';
import MarginLeft from '../marginLeftNumber/marginLeft';

const Contacto = () => {

    return (
        <main className="container-contacto">
            <MarginLeft page={4} />

            <section className="box-3">
                <div className="mapa-container">
                    <Mapa />
                </div>
            </section>
        </main>
    )
}

export default Contacto;