import React, { Component } from 'react'

class Test extends Component {

    state ={
        test:'test'
    }

    //life-cycle methods...
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => response.json())
        .then(data => 
            this.setState({
                userId: data.userId,
                id: data.id,
                title: data.title,
                body: data.body,
                completed: data.completed
            })
        );
    }


    // UNSAFE_componentWillMount(){
    //     console.log('component WILL mount...');
    // }

    // UNSAFE_componentWillUpdate(){
    //     console.log('component WILL UPDATE...');
    // }

    // componentDidUpdate(){
    //     console.log('component DID UPDATE...');
    // }

    // UNSAFE_componentWillRecieveProps(nextProps, nextState){
    //     console.log('component WILL RECIEVE props...');
    // }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     return null;
    // }

    // static getSnapshotBeforeUpdate(nextProps, prevState){
    //     console.log('getSnapshotBeforeUpdate...');
    // }


  render() {
    const {title, body} = this.state;


    return (
      <div>
        <h1 className="display-4">Test Component</h1>

        <h2 className="display-6">{title}</h2>

        <p className="lead">{body}</p>

      </div>
    )
  }
}

//--------------------------

export default Test;