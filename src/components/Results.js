import React, { Component } from "react";
import axios from "axios";

class Results extends Component {

    constructor (props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount(){
        fetch('http://localhost:8080/people/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }


    handleDelete(event, id){
        event.preventDefault();
        let url = "http://localhost:8080/people/delete?id=" + id;
        axios.delete(url)
            .then(
                window.location.reload()
            )
            .catch(error => {

            })
    }


    render() {
        let items = this.state.items;
        let isLoaded = this.state.isLoaded;

        if (!isLoaded){
            return <div>Loading....</div>;
        }
        else {

            return (
                <div className="results">
                    <table>
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Balance</th>
                            <th>Actions</th>
                            <th>Marker</th>
                        </tr>

                        {items.map(item =>(
                            <tr key ={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.balance}</td>
                                <td>
                                    <button
                                     onClick={(event) => this.props.handleAddressId(event, item.id)}
                                >View Address</button>
                                    <button
                                        onClick={(event) => this.handleDelete(event, item.id)}
                                    >Delete Person</button>
                                </td>
                                <td>
                                    <input
                                        type={"checkbox"}
                                        onChange={(event) => this.props.handleCheckboxChange(event,item.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </div>
            );
        }
    }
}

export default Results;
