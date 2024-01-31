
import React, { Component } from 'react';
import axios from 'axios';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

import {nanoid} from 'nanoid';

//----------------------

class EditContact extends Component {

    //---

    state = {

        name: '',
        email: '',
        phone: '',
        errors: {}

    }

    //---

    onChange = e => this.setState({[e.target.name]: e.target.value});

    //---

    //get data from users...
    async componentDidMount(){

        const {id} = this.props.match.params;

        const res = await axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;

        this.setState({

            name: contact.name,
            email: contact.email,
            phone: contact.phone

        });

    }

    //---

    //asynchronous call...
    onSubmit = async (dispatch, e) => {
    //onSubmit = (dispatch, e) => {

      e.preventDefault();

      const {name, email, phone} = this.state;

      //check for error in form...
      if(name === ''){

        this.setState({ errors: {name: 'Name is Required.'}});
        return;

      }

      if(email === ''){

        this.setState({ errors: {email: 'Email is Required.'}});
        return;

      }

      if(phone === ''){

        this.setState({ errors: {phone: 'Phone is Required.'}});
        return;

      }

      //------------------------

      const updateContact = {
        name,
        email,
        phone

      }

      //get id...
      const {id} = this.props.match.params;
 
      //update...
      const res = await axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

      dispatch({type: 'UPDATE_CONTACT', payload: res.data})

      //------------------------
      
      //clear state/form fields
      this.setState({
        name:'',
        email:'',
        phone:'',
        errors: {}
      });

      this.props.history.push('/');

    };//end submit

    //---

  render() {

    const {name, email, phone, errors} = this.state;

    return(
      //test
<Consumer>

{value => {

const {dispatch} = value;
return(

  <div className="card mb-3">
  <div className="card-header">Edit Contact</div>
    <div className="card-body">

        <form onSubmit={this.onSubmit.bind(this, dispatch)}>

          <TextInputGroup 

            label = "Name"
            name = 'name'
            placeholder = 'Enter Name'
            value = {name}
            onChange = {this.onChange}
            error = {errors.name}

          />

            <TextInputGroup 

              label = "Email"
              name = 'email'
              type = 'email'
              placeholder = "Email Address: (eg: any@anyURL.com)" 
              value = {email}
              onChange = {this.onChange}
              error = {errors.email}

            />

            <TextInputGroup 

              label = "Phone"
              name = 'phone'
              placeholder = "Phone: (eg: xxx-xxx-xxxx)"
              value = {phone}
              onChange = {this.onChange}
              error = {errors.phone}

            />

            <input 
            type="submit" 
            value="Update Contact"
            className="btn btn-block"
            />

        </form>

    </div>
</div>

)

}}

</Consumer>

    )

  }//end render
}//end class

//----------------------

export default EditContact;
