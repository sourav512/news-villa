import React, { Component } from 'react'
import loader from '../loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-3">
                <img src={loader} alt="" width="260px" height="130px"/>
            </div>
        )
    }
}

export default Spinner
