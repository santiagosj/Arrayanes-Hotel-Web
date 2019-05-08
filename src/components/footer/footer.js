import React, { Component } from 'react'
import FacebookIcon from '../Icons/Facebook'
import Wapp from '../Icons/Wapp'
import '../../assets/css/svg.css'
import '../../assets/css/footer.min.css'

class Footer extends Component{
  render(){
    return(
      <div className="footer">
         <ul >
            <li>Encontranos en Facebook
                <a className="c-link c-link--facebook c-tooltip" aria-label="Facebook" href="https://www.facebook.com/Departamentosarrayanes/">
                    <FacebookIcon className="c-icon" />
                </a>
            </li><br/>
            <li>Telefonos: 03547-429157 / 03547-15510209
                <a className="c-link c-link--wapp c-tooltip" aria-label="WhatsApp">
                    <Wapp className="c-wapp"/>
                </a>
            </li><br/>
            <li>Direccion: ViceInt.Doctor Jorge Nahal 235</li>
         </ul>
      </div>
    )
  }
}

export default Footer;
