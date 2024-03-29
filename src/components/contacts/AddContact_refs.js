
import React, { Component } from 'react';

//----------------------

//uncontrolled component....
class AddContact extends Component {

    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    //---

    onSubmit = (e)=>{
        e.preventDefault();

        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value, 
        };

        console.log(contact);
    }

    //---

       
   static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@yahoo.com',
    phone: '777-777-7777'
   }

  render() {

    const {name, email, phone} = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">

            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    name="name"
                    className="form-control form-control-lg"
                    placeholder ="Name..."
                    defaultValue = {name} 
                    ref = {this.nameInput}
                    
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input 
                    type="email" 
                    name="email"
                    className="form-control form-control-lg"
                    placeholder ="Email Address: (eg: any@anyURL.com)" 
                    defaultValue = {email} 
                    ref = {this.emailInput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Phone</label>
                    <input 
                    type="text" 
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder ="Phone: (eg: xxx-xxx-xxxx)"
                    defaultValue = {phone}  
                    ref = {this.phoneInput}
                    />
                </div>

                <input 
                type="submit" 
                value="Add Contact"
                className="btn btn-block"
                />

            </form>

        </div>
      </div>
    )
  }//end render
}//end class

//----------------------

export default AddContact;