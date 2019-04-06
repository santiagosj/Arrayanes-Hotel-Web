import React , { Component } from 'react';
import Form from './formulario/formulario';

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
        </div>
        
        <br/>
      </section>
    )
  }
}

export default Contacto;
