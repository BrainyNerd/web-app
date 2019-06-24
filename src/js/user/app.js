import React, {Component} from 'react';
import EnrolledUsers from "./EnrolledUsers";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: null,
            lastname: null
        };

        this.sayHello = this.sayHello.bind(this);
        this.setUserAttributes = this.setUserAttributes.bind(this);
    }

    sayHello() {
        const header = new Headers();

        header.append("Content-Type", "application/json");
        const options = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: header,
            mode: 'cors',
            cache: 'default'
        };

        fetch("http://localhost:8080/user/add", options)
            .then(response => response.json())
            .catch(err => console.log(">>>>> ", err));
    }

    setUserAttributes(event) {
        this.setState({[event.target.placeholder]: event.target.value});
    }

    render() {
        return (
            <div>
                <div>
                    <input className="firstname" placeholder="firstname" type="text" onChange={this.setUserAttributes}/>
                    <input className="lastname" placeholder="lastname" type="text" onChange={this.setUserAttributes}/>
                    <button className="addUser" onClick={this.sayHello}> Add user</button>
                </div>
                <div>
                    <EnrolledUsers />
                </div>
            </div>
        )
    }
}