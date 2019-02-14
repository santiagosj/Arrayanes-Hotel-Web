import React, { Component } from 'react';

const stylesFooter = {
  width:'100%',
  height:150,
  backgroundColor:'#00000052',
  textAlign:'center'
}

class Footer extends Component{
  render(){
    return(
      <div style={stylesFooter} >
         <a href="https://es-la.facebook.com/Departamentosarrayanes" target="_blank"  rel="noopener noreferrer" className="fa fa-facebook"></a>
         <p>Encontranos en Facebook</p>
         <ul>
            <li>Telefono: 03547-429157 </li>
            <li>Direccion:ViceInt.Doctor Jorge Nahal 235</li>
         </ul>
      </div>
    )
  }
}

export default Footer;
