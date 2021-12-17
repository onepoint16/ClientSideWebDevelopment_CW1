import React, { Component } from 'react';
import axios from 'axios';
import HostelsTable from './hostelsTable';
import {Table} from 'react-bootstrap';

export default class StageSelector extends Component {

    constructor(props) {
        super(props);
        this.state = { hostelsCollection: []};
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

    hostelsSort() {
        return this.state.hostelsCollection.map((data, i) => {
            return <HostelsTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container-fluid">
                    <div className="justify-content-center card-group gap-3">
                    <Table className="hover" style={{whiteSpace:"nowrap", textAlign:"center", width:"75%"}}>
                    <thead>
                        <tr>
                            <th>Stage</th>
                            <th>Hostel</th>
                            <th>Nights</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.hostelsSort()}
                    </tbody>
                    </Table>
                    
                    </div>
                </div>
            </div>
        )
    }
}

