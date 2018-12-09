import React,{ Component } from 'react';
import Header from '../header/header';
import MainContent from '../mainContent/mainContent';
import '../../assets/css/styles.min.css';

class AppHolder extends Component{
  constructor(props){
    super(props);
    this.state={
      one:'scrollNone'
    }
  }

 componentDidMount(){
   window.onscroll = () => this.handleAnimation()
 }

 handleAnimation = () => {
   if(document.documentElement.scrollTop > 100){
      this.setState({one:'scroll'})
   }
   if(document.documentElement.scrollTop === 0){
     this.setState({one:'scrollNone'})
   }
 }

  render(){
    return(
      <div className="app">
        <Header classHeader={this.state.one}/>
        <MainContent />
      </div>
    )
  }
}

export default AppHolder;
