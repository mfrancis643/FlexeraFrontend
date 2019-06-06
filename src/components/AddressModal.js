import React, { Component } from "react";
import Modal from "react-bootstrap/Modal"
import axios from "axios";

class AddressModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };

    }

    render() {

        if (!this.props.show) {
            return <div></div>;
        } else {
            return (
                <Modal
                    show={this.props.show}
                    onHide={this.props.hide}
                    dialogClassName="modal-100w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">

                            Address

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {this.props.address.map(item => (
                                <div key={item.id}>
                                    <h5>First Line of Address:</h5>
                                    <p>{item.streetNameAndNumber}</p>
                                    <h5>Town:</h5>
                                    <p>{item.town}</p>
                                    <h5>First Line of Address:</h5>
                                    <p>{item.postcode}</p>
                                </div>
                            )
                        )}
                    </Modal.Body>
                </Modal>
            );
        }
    }
}

export default AddressModal;
