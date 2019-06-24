import React, {Component} from 'react';

export default class EnrolledUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enrolledUsers: []
        };
        this.getUsers = this.getUsers.bind(this);
    }

    componentDidMount() {
        const header = new Headers();
        const options = {
            method: 'GET',
            headers: header,
            mode: 'cors',
            cache: 'default'
        };

        fetch("http://localhost:8080/user/all", options)
            .then(response => console.log("inside promise ", response.json()
                .then(result => this.setState({enrolledUsers: result}))))
            .catch(err => console.log(">>>>> ", err));
    }

    render() {
        return (
            <div>
                <table>
                    {this.getUsers()}
                </table>
            </div>
        )
    }


    getUsers() {
        return this.state.enrolledUsers.map((ele) => {
            return <tr>
                <th>{ele.id}</th>
                <th>{ele.firstname}</th>
                <th>{ele.lastname}</th>
            </tr>
        })

    }
}