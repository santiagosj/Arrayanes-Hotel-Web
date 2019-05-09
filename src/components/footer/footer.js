import React, { Component } from 'react'
import FacebookIcon from '../Icons/Facebook'
import Wapp from '../Icons/Wapp'
import PlaceholderNew from '../Icons/PlaceholderNew'
import '../../assets/css/svg.css'
import '../../assets/css/footer.min.css'

class Footer extends Component{
  render(){
    return(
      <div className="footer">
         <ul >
            <li> Telefonos: 03547-429157 / 03547-15510209
                <a className="c-link c-link--wapp c-tooltip" aria-label="WhatsApp">
                    <Wapp className="c-icon"/>
                </a>
            </li><br/>
            <li>Encontranos en Facebook
                 <a className="c-link c-link--facebook c-tooltip" aria-label="Facebook" href="https://www.facebook.com/Departamentosarrayanes/" target="_blank">
                    <FacebookIcon className="c-icon" />
                </a>
            </li><br/>
            <li>Direccion: ViceInt.Doctor Jorge Nahal 235
                <a className="c-link c-link--map c-tooltip" aria-label="Ubicación">
                     <PlaceholderNew className="c-icon"/>
                </a>
            </li>
         </ul>
      </div>
    )
  }
}

export default Footer;
