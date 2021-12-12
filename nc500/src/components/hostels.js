import React, { Component, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Hostel from './hostel'
import Button from '@restart/ui/esm/Button';

class HostelsTable extends Component {

    hostelSelector(){
        
        export const hostelContext = createContext();

        return(
            <hostelContext.Provider value={{ hostel, sethostel }}>
                <div>
                    <Hostel />
                </div>
            </hostelContext.Provider>
        )
    }

    render() {
        return (
            <tr>
                <Button onClick={this.hostelSelector}>
                {this.props.obj.id} {this.props.obj.name}
                </Button>
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
                <div>
                    {this.hostelSelector()}
                </div>
            </div>
        )
    }
}