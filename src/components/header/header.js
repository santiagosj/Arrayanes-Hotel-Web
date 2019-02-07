import React, { Component } from 'react';
import NavItem from '../navItem/navItem';
import '../../assets/css/menu.min.css';

class Header extends Component {
  constructor(props){
    super(props)

     this.dropDownMenu = this.dropDownMenu.bind(this)

    this.navigationItems = {
      items:[
        { link:'/',name:'Home' },
        { link:'/arrayanes/instalaciones',name:'Instalaciones' },
        { link:'/arrayanes/servicios',name:'Servicios' },
        { link:'/arrayanes/contacto',name:'Contacto' },
        { link:'/arrayanes/reglamento',name:'Reglamento' }
      ]
    }
  }

  render(){
    return(
      <header className={`${this.props.classHeader}`}>
         <nav>
           <div className="navUl">
             <ul>
               {this.navigationItems.items.map((item, i)=> <NavItem key={i} data={item} /> )}
             </ul>
           </div>
            <div className="navMobile">
              <i className="fa fa-bars icon" onClick={this.dropDownMenu}></i>
              <ul className="dropDownLinks">{this.navigationItems.items.map((item,i)=><NavItem key={i} data={item} />)}</ul>
            </div>
         </nav>
      </header>
    )
  }

  dropDownMenu(){
       let links = document.querySelector('.dropDownLinks')
       links.style.display === 'block' ? links.style.display ='none' : links.style.display ='block';
    }

}

export default Header;
