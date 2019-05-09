import React , { Component } from 'react';
import Form from './formulario/formulario';
import Mapa from './formulario/map'

class Contacto extends Component {
  render(){
    return(
      <section className="mainContact">

        <div className="headImg cont">
           <div className="maskPages"></div> 
        </div>

        <div className="container">

           <br/>

           <h1>Formulario de Contacto</h1>

           <br/>
             <hr/>
           <br/>

              <Form />
                <hr/>
              <Mapa/>
           
           <br/>
            <hr/>
           <br/>

        </div>
          
      </section>
    )
  }
}

export default Contacto;
