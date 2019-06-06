import React, { Component } from "react";
import axios from "axios";

class AddPerson extends Component {
    constructor (props) {
        super(props);
        this.state = {
            alert:"",
            name:"",
            balance:"",
            email:"",
            addressFirstLine: "",
            town:"",
            postcode:""

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBalanceChange = this.handleBalanceChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressFirstLineChange = this.handleAddressFirstLineChange.bind(this);
        this.handleTownChange = this.handleTownChange.bind(this);
        this.handlePostcodeChange = this.handlePostcodeChange.bind(this);

    }

    handleNameChange(event){
        this.setState({name: event.target.value})
    }
    handleBalanceChange(event){
        this.setState({balance: event.target.value})
    }
    handleEmailChange(event){
        this.setState({email: event.target.value})
    }
    handleAddressFirstLineChange(event){
        this.setState({addressFirstLine: event.target.value})
    }
    handleTownChange(event){
        this.setState({town: event.target.value})
    }
    handlePostcodeChange(event){
        this.setState({postcode: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        let url = "http://localhost:8080/people/";
        let formData = new FormData();
        formData.set('name', this.state.name);
        formData.set('balance', this.state.balance);
        formData.set('email', this.state.email);
        formData.set('addressFirstLine', this.state.addressFirstLine);
        formData.set('town', this.state.town);
        formData.set('postcode', this.state.postcode);
        axios.post(url, formData)

            .then(
                window.location.reload()
            )
            .catch(error => {
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <br/>
                    <input
                        required={true}
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </label>
                <br/>
                <label>
                    Balance: <br/>
                    <input
                        required={true}
                        type="text"
                        value={this.state.balance}
                        onChange={this.handleBalanceChange}
                    />
                </label>
                <br/>
                <label>
                    Email: <br/>
                    <input
                        required={true}
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                </label>
                <br/>
                <label>
                    First Line of Address: <br/>
                    <input
                        required={true}
                        type="text"
                        value={this.state.addressFirstLine}
                        onChange={this.handleAddressFirstLineChange}
                    />
                </label>
                <br/>
                <label>
                    Town: <br/>
                    <input
                        required={true}
                        type="text"
                        value={this.state.town}
                        onChange={this.handleTownChange}
                    />
                </label>
                <br/>
                <label>
                    Postcode: <br/>
                    <input
                        required={true}
                        type="text"
                        value={this.state.postcode}
                        onChange={this.handlePostcodeChange}
                    />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddPerson;
