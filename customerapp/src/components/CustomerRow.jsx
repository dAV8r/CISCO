import { Component } from "react";

export default class CustomerRow extends Component {
    render() {
        let {id, firstName, lastName} = this.props.customer;
        return <div>
           {firstName} &nbsp;
           {lastName}  &nbsp;
           <button type="button" onClick={() => this.deleteRow(id)}>Delete</button>
        </div>
    }

    deleteRow(id) {
        console.log("Delete Row ", id);
        this.props.delEvent(id);
    }
}