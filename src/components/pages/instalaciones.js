import React , { Component } from 'react';
import Galeria from './gallery/galeria_1';
import Galeria2 from './gallery/galeria_2';

class Instalaciones extends Component {
  render(){
    return(
      <section className="mainInst">
      
        <div className="headImg inst">
            <div className="maskPages"></div> 
        </div>

            <br/>

            <div className="container">
               <h1>Nuestras Instalaciones</h1>

                <div className="listas">
                  <div className ="dpto1">
                  <br/>
                    <hr/>
                  <br/>
                <h2>Instalaciones Dpto 1</h2>
                  <ul>
                    <li>Capacidad para 6 personas</li> -
                    <li>Dos dormitorios (Matrimonial y habitación con 4 camas)</li> - <br/>
                    <li>Amplio estar</li> - 
                    <li>Direct-Tv</li> -
                    <li>Cocina completa (incluye microondas y vajilla)</li> -
                    <li>Ambiente climatizado (Calefacción y aire acondicionado)</li> -
                    <li>Asador y patio interno</li> -
                    <li>Cochera cubierta</li> -
                    <li>Incluye ropa blanca</li> - <br/>
                    <li>Servicio de Wifi</li> 
                    <br />
                    <div className="btn-1">
                      <Galeria className="buttonGallery"/>
                  </div>
                  </ul>
                  
               </div>

              <div className ="dpto2">
                  <br/>
                    <hr/>
                  <br/>
                <h2>Instalaciones Dpto 2</h2>
                  <ul>
                    <li>Capacidad para 4 personas</li> - <br/>
                    <li>Dormitorio matrimonial</li> - <br/>
                    <li>Estar con dos camas</li> -
                    <li>Direct-Tv</li> - 
                    <li>Cocina completa ( incluye microondas y vajilla)</li> - 
                    <li>Ambiente Climatizado (Calefacción y aire acondicionado)</li> -
                    <li>Cochera cubierta</li> -
                    <li>Incluye ropa blanca</li> -
                    <li>Servicio de Wifi</li> -
                    <br/>
                    <div className="btn-2">
                       <Galeria2 className="buttonGallery"/>
                    </div>
                   </ul>
                             
                   </div>
                </div>

                 <br/>
                 <hr/>
            </div>

               <br/>
                
           </section>
    )
  }
}

export default Instalaciones;
