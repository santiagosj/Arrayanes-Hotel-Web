import React from 'react';
import '../styles/instalaciones.scss'
import Galeria1 from './gallery/gallery-1'
import Galeria2 from './gallery/gallery-2'

const Instalaciones = () => {
    return (
    <main className="container-instalaciones">
         <section className="box-1">
                     <p>A</p>
                     <p className="page">02</p>
        </section>
        <section className="box-2">

            <div className="content-container">

               <div className="title">
                  <h2>I</h2>
                  <p>nstalaciones</p>
               </div>   

          <div className="deptos-container">
                <div className="dpto-1-container">
                    <h2>Depto-1</h2>
                    <ul>
                        <li>Capacidad para 6 personas</li>
                        <li>Dos dormitorios (Matrimonial y habitación con 4 camas)</li>
                        <li>Amplio estar -Direct-Tv</li>
                        <li>Cocina completa (incluye microondas y vajilla)</li>
                        <li>Ambiente climatizado (Calefacción y aire acondicionado)</li>
                        <li>Asador y patio interno -Cochera cubierta -Incluye ropa blanca</li>
                        <li>Servicio de Wifi</li>
                    </ul>
                        <div className="btn">
                            <Galeria1 className="buttonGallery"/>
                        </div>
                    </div>
                    <div className="dpto-2-container">
                        <h2>Depto-2</h2>
                            <ul>
                                <li>Capacidad para 4 personas</li>
                                <li>Dormitorio matrimonial</li>
                                <li>Estar con dos camas -Direct-Tv</li>
                                <li>Cocina completa ( incluye microondas y vajilla) </li>
                                <li>Ambiente Climatizado (Calefacción y aire acondicionado)</li>
                                <li>Cochera cubierta - Incluye ropa blanca </li>
                                <li>Servicio de Wifi</li>
                            </ul>
                          <div className="btn">
                             <Galeria2 className="buttonGallery"/>
                          </div>
                    </div>
             </div>
            
            </div>
            
        </section>
    </main>
    )
}

export default Instalaciones;