import React, { Component } from 'react';
import NavItem from '../navItem/navItem'
import './header.scss'

class Header extends Component{
  
   constructor(props){
       super(props)
   
       this.navigationItems = {
           items:[
               {link:'/Home',name:'Home'},
               {link:'/Instalaciones',name:'Instalaciones'},
               {link:'/Reglamento',name:'Reglamento'},
               {link:'/Contacto',name:'Contacto'}
           ]
       }
   }  
   render(){
       return(
           
              <header className={`${this.props.classHeader}`} >

                  <label className="menu-wrap">
                      <p>MENÚ</p>
                      <input type="checkbox"/>
                          <span className="menu">
                              <span className="hamburger"></span>
                          </span>
                                <ul>
                                    {this.navigationItems.items.map((item,i) => <NavItem key={i} data={item}/> )}
                                    <li className="brand"></li>
                               </ul>
                  </label>

               </header>
          
       )
   }
}

export default Header 