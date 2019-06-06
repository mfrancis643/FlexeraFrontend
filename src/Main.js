import React, { Component } from "react";
import Results from './components/Results'
import AddPerson from './components/AddPerson'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AddressModal from "./components/AddressModal";
import { connect } from 'react-redux'

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            alert:"",
            currentId:"",
            currentAddress:"",
            showAddress: false,
            markedIds: []
        };

        this.handleAddressId = this.handleAddressId.bind(this);

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

        this.handleModalHide = () => {
            this.setState({ showAddress: false });
        };
    }
        handleAddressId(event, id){
            fetch('http://localhost:8080/people/getAddress?id=' + id)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        currentId: id,
                        isLoaded: true,
                        showAddress: true,
                        currentAddress: json
                    })
                });
    }

    handleCheckboxChange(event, id){
        console.log(event.target.checked);
        if(event.target.checked == true){
            console.log("adding id");
            this.state.markedIds.push(id)
            console.log(this.state.markedIds)
        }
        else{
            console.log("deleting id");
            let index = this.state.markedIds.indexOf(id);
            if (index > -1){
                this.state.markedIds.splice(index,1);
            }
            console.log(this.state.markedIds)
        }

    }

        render() {
        return (
            <div className="spacerMargin">
                <div className="main">
                    <div className="base">
                        <h3>Mark Francis tech test for Flexera</h3>
                        <p>Hello, this is my attempt at the flexera tech test:</p>
                    </div>
                    <Accordion defaultActiveKey="1">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Add Person
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>

                                    <AddPerson/>

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    View People
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>

                                    <Results
                                        handleCheckboxChange = {this.handleCheckboxChange}
                                        handleAddressId = {this.handleAddressId}
                                    />

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>


                    <div className="alert">{this.state.alert}</div>
                    <AddressModal
                        show={this.state.showAddress}
                        hide={this.handleModalHide}
                        id = {this.state.currentId}
                        address = {this.state.currentAddress}
                    />
                </div>
            </div>
        );
    }
}

export default Main;
