import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Hostel from './hostel'

class HostelsTable extends Component {

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <li className="nav-item active">
                    <NavLink className="nav-link" to={"/hostel"}>{this.props.obj.name}</NavLink>
                </li>
            </tr>
        );
    }
}

export default class Hostels extends Component {

    constructor(props) {
        super(props);
        this.state = { hostelsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/hostels')
            .then(res => {
                this.setState({ hostelsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    hostelsTable() {
        return this.state.hostelsCollection.map((data, i) => {
            return <HostelsTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className='nc500_image'>
                    <img src='https://www.practicalmotorhome.com/wp-content/uploads/2020/07/MCB3332.nc500.route_map.jpg' alt="map of nc500 here"/>
                </div>
                <div className="container">
                    <table className="table table-hover table">
                        <tbody>
                            {this.hostelsTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}