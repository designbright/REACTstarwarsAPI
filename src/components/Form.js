import React, { Component } from 'react';

export default class Form extends Component{
  constructor(props){
    super(props);
  }

  render() {
   return (
     <div className="jumbotron">
       <div className="form_wrapper">
         <h3>What is your name, pilot?</h3>

         <hr></hr>

    <form className="form-group" onSubmit={this.props.handleFormSubmit}>
      <input className="form_input" name="pilot" type="text" placeholder="Enter Your Name" onChange={this.props.handleNameChange}/>

           <br></br>

      <input className="btn-primary" type="submit" value="Submit"/>
    </form>

    <div className="show_name">
      <span className='display_name'> {this.props.pilot}</span>
    </div>

       </div>
     </div>
   )
 }
}
