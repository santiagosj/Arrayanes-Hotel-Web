import React, { Component } from 'react';
import axios from 'axios';
import './form.scss'
import '../../styles/button.scss'

const validateForm = (errors) => {
   let valid = true;
   Object.values(errors).forEach(
     (val) => val.length > 0 && (valid = false)
   );
   return valid;
 }

 const API_PAHT = 'server/index.php'

class Form extends Component {

   constructor(props){
       super(props)
       
       this.state={
         name:'',
         email:'',
         subject:'',
         message:'',
         errors:{
            name:'',
            email:'',
            subject:'',
            message:'',
         },
           submitted:false,
           error:null
       };

       this.handleSubmit=this.handleSubmit.bind(this)
       this.handleChange=this.handleChange.bind(this)
   }
  
//evento de cambio

   handleChange(e){
      const expRegEmail = RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i)

      const { name, value } = e.target;
      
      let errors = this.state.errors;

      switch(name){
         case "name": 
           errors.name = value.length < 3 ? "El nombre es obligatorio" : '';
           break;
         case "email":
           errors.email = expRegEmail.test(value) ? '' : 'Formato de e-mail no válido';
           break;
         case "subject":
            errors.subject = value.length < 5 ? "El asunto es obligatorio" : '';
            break;
         case "message":
            errors.message = value.length < 10 ? "La consulta está vacía" : '';
            break;
            default:
        break;
      }

      this.setState({errors, [name]: value})
      
   }

  //evento submit

   handleSubmit(e){
    
      e.preventDefault()
      
      if(validateForm(this.state.errors)) {
         console.info('Valid Form')
       }else{
         console.error('Invalid Form')
       }
   
    const name = document.getElementById('name').value = this.state.name
    const email = document.getElementById('email').value = this.state.email
    const message = document.getElementById('message').value = this.state.message

   axios({
    method:"POST",
    url:`${API_PAHT}`, 
    data: {
       name:name,
       email:email,
       message:message
    }
   }).then((response) => {
           
      response.data ? alert(`Gracias por ponerte en contacto ${name}, intentaremos responder a la brevedad, recordá que también tenés la opción de enviarnos un mensaje por facebook o llamarnos al 03547-429157, saludos!`): alert(`Mil disculpas ${name} estamos teniendo problemas con el servicio de mail, podés comunicarte con nosotros vía facebook o al 03547-429157, gracias, saludos!`) 

   }).catch(error => this.setState({error:error}, ()=>{console.log(error)}))

   this.setState({submitted:true})
        
   const resetForm = () => {
      this.setState({
         name:'',
         email:'',
         subject:'',
         message:'',
      })
      console.log(this.state)
   } 
     resetForm();
 }

   render(){

    const { errors, submitted } = this.state;

       return(
           <form id="contact-form"  ref="form" onSubmit={this.handleSubmit} noValidate>

                <p>Nombre Completo:</p>
                
                 <br/>

                <div className="input-container">
                       <input id="name"
                           placeholder={`Tu nombre...`}
                           onChange={this.handleChange}
                           name="name"
                           value={this.state.name}
                           noValidate
                           required/>
                          {errors.name.length > 0 && <span className="error error-name">{errors.name}</span>}
               </div>
              
               <br/>
                 <p>Email:</p>
               <br/>

               <div className="input-container">
                   <input id="email"
                        placeholder="Tu e-mail..."                  
                        onChange={this.handleChange}
                        value={this.state.email}
                        name="email"
                        type = "email"
                        required
                        noValidate/>
                        {errors.email.length > 0 && <span className="error error-email">{errors.email}</span>}
                </div>
               
                      <br/>
                         <p>Asunto:</p>
                      <br/>
                      
                  <div className="input-container">
                       <input id="subject"
                           placeholder="¿Cuál es el asunto de tu consulta?"
                           onChange={this.handleChange}
                           value={this.state.subject}
                           name="subject"
                           required
                           noValidate/>
                           {errors.subject.length > 0 && <span className="error error-subject"> {errors.subject} </span>}
                      </div>
              
                      <br/>
                          <p>Consulta:</p>
                      <br/>

                  <div className="input-container">
                      <textarea id="message"
                           onChange={this.handleChange}
                           placeholder="No olvides aclarar en tu consulta las fechas específicas y la cantidad de personas"
                           value={this.state.message}
                           name="message"
                           required
                           noValidate/>
                           {errors.message.length > 0 && <span className="error error-message"> {errors.message} </span> }
                  </div>
               
                      <br /><br />

                  <button
                        style={{right: "20%"}}
                        className="button"
                        raised="true"
                        type="submit"
                        disabled={submitted || !this.state.name || !this.state.email || !this.state.subject || !this.state.message}
                  >
                     {(submitted && 'Enviado')|| (!submitted && 'Enviar')}
                  </button>
           </form>
       )
   }

}

export default Form;










