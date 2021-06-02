import React from "react";

export default class ContactForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phoneNumber: ''
        }
    }

    handleChange=(e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    
    render() {
        return(
        <div className="container movieForm">
        <h4 id="formTitle">Enter Contact Information:</h4>
        <form onSubmit={(e) => this.props.submitMovies(this.state, e)} className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input onChange={this.handleChange} value={this.state.name} type="text" className="form-control" id="name" placeholder="Bob Jones"/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input onChange={this.handleChange} value={this.state.email} type="text" className="form-control" id="email" placeholder="JobBones@Yahoo.com"/>
          </div>
          <div className="col-md-8 mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
            <input onChange={this.handleChange} value={this.state.phoneNumber} type="text" className="form-control" id="phoneNumber" placeholder="1-800-123-4567"/>
          </div>
          <div className="col-12" id="submitArea">
            <button type="submit" className="changeSubmit btn btn-primary" id="submitButton">Submit</button>
          </div>
        </form>
        </div>
        )
    }
}