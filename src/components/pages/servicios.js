import React , { Component } from 'react';

class Servicios extends Component {
  render(){
    return(
      <section className="mainServ">

        <div className="headImg serv">
            <div className="maskPages"></div> 
        </div>
            <br/>
           <div className="container">
           <h1>Desayunos secos de elaboración casera</h1>
              <br/>
                <hr/>
            <div className="desayunos">

                <div className="desayuno-1">
                   <h2>Desayuno Completo</h2>
                       <ul>
                          <li>Infusión a elección (Café, té o mate cocido)</li> - <br/>
                          <li>Jugo de naranja</li> - <br/>
                          <li>2 rodajas de pan casero</li> - <br/>
                          <li>Manteca y Dulce</li> - <br/>
                          <li>1 Porción de pasta frola</li> - <br/>
                          <li>1 Alfajor de Maizena o 2 rodajas de budín (naranja o vainilla)</li>
                          <li>Adicionales:  Manteca, mermelada, azúcar, edulcorante y leche en polvo.</li>
                       </ul>
                </div>
                
                 <br/>
                 <hr/>

                <div className="desayuno-2">
                     <h2>Desayuno Simple</h2>
                     <ul>
                        <li>Infusión a elección ( Café, té o mate cocido)</li> - <br/>
                        <li>2 rodajas de pan casero</li> - <br/>
                        <li>Adicionales: Manteca, mermelada, Azúcar, edulcorante y leche en polvo.</li>
                    </ul>
                </div>
                    
              </div>
                
                <br/>
                <hr/>

               <div className="aviso">
                   <h2>Importante</h2>
                   <p> Por favor, consulte con anticipación por la disponibilidad de los desayunos, ya que son de elaboración casera y por lo tanto siempre frescos, es un servicio que se cobra aparte de su estadía, por lo tanto es un servicio opcional. La lista de elementos que se incluyen de los mismos son por persona. Los desayunos son secos, se provee las infusiones y los adicionales como azúcar, edulcorante, leche en polvo en saquitos, la manteca y la mermelada vienen en blisters individuales.</p>
               </div>

                <br/>
                <hr/>

               <div className="limpieza">
                  <h2>Limpieza</h2>
                  <p>El servicio de limpieza se realiza cada 3 días, e incluye cambio de ropa blanca (toallas, sabanas, etc).El horario de limplieza es a convenir.</p>
               </div>
                  <hr/>
             </div>
            
                <br/>

        </section>
    )
  }
}

export default Servicios;
