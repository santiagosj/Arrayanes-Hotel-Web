import React from 'react';
import NavItem from '../navItem/navItem'
import './header.scss'

const Header = ({classHeader}) => {
  
     const  navigationItems = {
           items:[
               {link:'/Home',name:'Home'},
               {link:'/Instalaciones',name:'Instalaciones'},
               {link:'/Reglamento',name:'Reglamento'},
               {link:'/Contacto',name:'Contacto'}
           ]
     }
    
       return(
           
              <header className={`${classHeader}`} >

                  <label className="menu-wrap">
                      <p>MENÚ</p>
                      <input type="checkbox"/>
                          <span className="menu">
                              <span className="hamburger"></span>
                          </span>
                                <ul>
                                    {navigationItems.items.map((item,i) => <NavItem key={i} data={item}/> )}
                                    <li className="brand"></li>
                               </ul>
                  </label>

               </header>
          
      )
   
}

export default Header 