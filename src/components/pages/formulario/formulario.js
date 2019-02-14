import React ,{ Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios';

const styles = {
  width: '100%'
}

class Form extends Component {

 constructor(props){
   super(props)
   this.state = {
     formData:{
       name:'',
       email:'',
       subject:'',
       message:''
     },
     submitted: false
   }
       this.handleSubmit=this.handleSubmit.bind(this)
       this.handleChange=this.handleChange.bind(this)
 }

  handleChange(e){
     const { formData } = this.state;
     formData[e.target.name]=e.target.value;
      this.setState({formData});
  }

 handleSubmit(e){
   e.preventDefault()
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const subject = document.getElementById('subject').value;


   axios({
    method:"POST",
    url:'./server/index.php', //aca va la url del archivo php
    data: {
            name: name,
            email: email,
            message: message,
            subject:subject
         }

   }).then((response) => {
         response.info ? alert("Lo sentimos el mensaje no pudo ser enviado") : alert("El mensaje fué enviado con exito")
        })
        this.resetForm()
   this.setState({submitted:true})
 }

 resetForm(){
   document.getElementById('contact-form').reset();
 }

  render(){
    const { formData, submitted } = this.state;
    return(
      <div>
      <div>
      <ValidatorForm
              id="contact-form"
              ref="form"
              onSubmit={this.handleSubmit}
          >
                <TextValidator
                    style={styles}
                    id="name"
                    label="Nombre Completo"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['Por favor ingresá tu nombre completo']}
                />
                <br />
                <TextValidator
                      style={styles}
                      id="email"
                      label="Email"
                      onChange={this.handleChange}
                      name="email"
                      value={formData.email}
                      validators={['required', 'isEmail']}
                      errorMessages={['Por favor ingresá tu direccion de E-mail', 'El email no es valido']}
                />
                <br />
                <TextValidator
                    style={styles}
                    id="subject"
                    label="Asunto"
                    onChange={this.handleChange}
                    name="subject"
                    value={formData.subject}
                    validators={['required']}
                    errorMessages={['Por favor ingresá el motivo de tu consulta']}
                />
                <br />
                <TextValidator
                    style={styles}
                    id="message"
                    label="Mensaje"
                    onChange={this.handleChange}
                    name="message"
                    value={formData.message}
                    validators={['required']}
                    errorMessages={['Escribi tu consulta']}
                />
                <br /><br />
                <Button
                   raised="true"
                   type="submit"
                   disabled={submitted}
                >
                {
                    (submitted && 'Tu consulta fue enviada!')
                    || (!submitted && 'Enviar')
                }
                </Button>
            </ValidatorForm>
      </div>


            </div>
    )
  }
}

export default Form;
