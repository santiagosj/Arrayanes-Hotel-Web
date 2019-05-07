import React, { Component } from 'react';
//practicando estilos en linea, lo cual en realidad no es muy buena practica
const stylesFooter = {
  width:'100%',
  height:'100%',
  backgroundColor:'rgba(0, 0, 0, 0.82)',
  color:'white',
  ulStyle:{padding:'20px',marginBottom:'0'},
  liStyle:{padding:'15px'}
}

class Footer extends Component{
  render(){
    return(
      <div style={stylesFooter} >
         <ul style={stylesFooter.ulStyle}>
            <li style={stylesFooter.liStyle}>Encontranos en Facebook</li><br/>
            <li style={stylesFooter.liStyle}>Telefonos: 03547-429157 / 03547-15510209</li><br/>
            <li style={stylesFooter.liStyle}>Direccion: ViceInt.Doctor Jorge Nahal 235</li>
         </ul>
      </div>
    )
  }
}

export default Footer;
