import React, { Component } from 'react';
import Header from '../Header/header'
import MainContent from '../mainContent/mainContent'
import Footer from '../footer/footer'
import './appHolder.scss'

class AppHolder extends Component{

    constructor(props){
        super(props)

        this.state={
            one:'menuOnTop'
        }
    }
   componentDidMount(){
       window.onscroll = () => this.handleAnimation()
   }

   handleAnimation = () => {
      if(document.documentElement.scrollTop > 100){
          this.setState({
              one:'scroll' //header.scss
          })
      }
      if(document.documentElement.scrollTop === 0){
          this.setState({
              one:'menuOnTop' //appHolder.scss
          })
      }
   }


   render(){
       return(
           <div>
                <Header classHeader={this.state.one}/>
                  <MainContent/>
                <Footer/>
           </div>
       )
   }
}

export default AppHolder