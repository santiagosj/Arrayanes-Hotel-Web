import React , { Component } from 'react';

class Servicios extends Component {
  render(){
    return(
      <section className="mainServ">
        <div className="headImg serv">
            <div className="maskPages"></div> 
        </div>
          <h1>Nuestros servicios</h1>
           <div className="container">

           <div className="desayunos">
             <h2>Desayunos secos de elaboración casera</h2>
               <h3>Desayuno Completo</h3>
                 <ul>
                   <li>Infusión a elección (Café, té o mate cocido)</li>
                   <li>Jugo de naranja</li>
                   <li>2 rodajas de pan casero</li>
                   <li>Manteca y Dulce</li>
                   <li>1 Porción de pasta frola</li>
                   <li>1 Alfajor de Maizena o 2 rodajas de budín (naranja o vainilla)Adicionales:  Manteca, mermelada, azúcar, edulcorante y leche en polvo.</li>
                   <li>Adicionales:  Manteca, mermelada, azúcar, edulcorante y leche en polvo.</li>
                 </ul>
               <h3>Desayuno Simple</h3>
                 <ul>
                   <li>Infusión a elección ( Café, té o mate cocido)</li>
                   <li>2 rodajas de pan casero</li>
                   <li>Adicionales: Manteca, mermelada, Azúcar, edulcorante y leche en polvo.</li>
                 </ul>
               </div>
               <div className="aviso">
                   <h2>Importante</h2>
                   <p> Por favor, consulte con anticipación por la disponibilidad de los desayunos, ya que son de elaboración casera y por lo tanto siempre frescos, es un servicio que se cobra aparte de su estadía, por lo tanto es un servicio opcional. La lista de elementos que se incluyen de los mismos son por persona. Los desayunos son secos, se provee las infusiones y los adicionales como azúcar, edulcorante, leche en polvo en saquitos, la manteca y la mermelada vienen en blisters individuales.</p>
               </div>
                  <br/>
               <div className="limpieza">
                    <h2>Limpieza</h2>
                     <p>El servicio de limpieza se realiza cada 3 días, e incluye cambio de ropa blanca (toallas, sabanas, etc).El horario de limplieza es a convenir.</p>
               </div>
             </div>


        </section>
    )
  }
}

export default Servicios;
