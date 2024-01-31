
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

//-------------------

class Contact extends Component {

  state = {

    showContactInfo: false

  };

  //---

  //asynchronous call...
  onDeleteClick = async (id, dispatch) => {

    //do not do try/catch in real life to a DB...
    try{

      await axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  
      dispatch({type: 'DELETE_CONTACT', payload: id});

    }catch(e){

      dispatch({type: 'DELETE_CONTACT', payload: id});

    }

  }

//---

  //onDeleteClick = (id, dispatch) => {

  //   axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //   .then(res=> dispatch({type: 'DELETE_CONTACT', payload: id}));

  // dispatch({type: 'DELETE_CONTACT', payload: id})

   //}

  //-------------

  render() {

    //desturcturing...
    //const{contact} = this.props; //or...
    const{id, name, email, phone} = this.props.contact;

    const{ showContactInfo } = this.state;

    return (

      <Consumer>

        {value => {

          const { dispatch } = value;

          return(

            <div className="card card-body mb-3">

            <h4>{name}{''} <i 
              className="fas fa-sort-down" 
              onClick = {
                () => this.setState({showContactInfo: !this.state.showContactInfo})
                } 
                style={{cursor: 'pointer'}}
                />

                <i className="fas fa-trash" style={{
                  cursor: 'pointer', 
                  float:'right', 
                  color:'red',
                  fontSize:'1rem'
                }} 
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />

                <Link to = {`contact/edit/${id}`}>
                  <i 
                  className="fas fa-pencil-alt"
                  style={{
                    cursor:'pointer',
                    float: 'right',
                    color: 'black',
                    fontSize:'1rem',
                    marginRight: '1rem'
                  }}
                  ></i>
                </Link>

            </h4>

                {showContactInfo ? (
                    <ul className="list-group">

                    <li className="list-group-item">
                        Email: {email}
                    </li>

                    <li className="list-group-item">
                        Phone : {phone}
                    </li>

                  </ul>

                ) : null}

          </div>

          );//end return

        }}

      </Consumer>

    );//end return

  }//end render

}//end class

//-------------------

Contact.propTypes = {

  contact:PropTypes.object.isRequired,
  // email:PropTypes.string.isRequired,
  // phone:PropTypes.string.isRequired,

}//end proptype

//-------------------

export default Contact;
