import React, { Component } from 'react';
import { getUser, removeUserSession } from '../../utils/common';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Dashboard extends Component {


    componentWillMount() {
        this.user = getUser();
    }

    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "BookingId", field: "bookingId", sortable: true
            }, {
                headerName: "Cliente", field: "Cliente", sortable: false
            }, {
                headerName: "Fecha de Creación", field: "bookingTime", sortable: false
            }, {
                headerName: "Dirección", field: "streetAddress", sortable: false
            }, {
                headerName: "Precio", field: "bookingPrice", sortable: true
            }

            ],
            rowData: [{
                bookingId: "1", Cliente: "Cliente", bookingTime: 35000, streetAddress: 'test', bookingPrice: '500'
            }, {

                bookingId: "5", Cliente: "Cliente", bookingTime: 35000, streetAddress: 'test', bookingPrice: '100'
            }, {

                bookingId: "25", Cliente: "Cliente", bookingTime: 35000, streetAddress: 'test', bookingPrice: '650'
            }, {

                bookingId: "3", Cliente: "Cliente", bookingTime: 35000, streetAddress: 'test', bookingPrice: '10'
            }, {

                bookingId: "6", Cliente: "Cliente", bookingTime: 35000, streetAddress: 'test', bookingPrice: '15'
            }
            ],
            user: ""
        }
        this.handleLogout = this.handleLogout.bind(this);

    }
    // handle click event of logout button
    handleLogout = () => {
        removeUserSession();
        //props.history.push('/login');
    }


    render() {
        return (
            <div>
                Welcome User!<br /><br />
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '500px',
                        width: '1200px'
                    }}
                >
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
                <button onClick={e => { e.preventDefault(); this.handleLogout() }}>
                    Logout
            </button>
            </div>
        );
    }
}



export default Dashboard;