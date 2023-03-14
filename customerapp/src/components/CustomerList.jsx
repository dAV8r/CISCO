import { Component } from "react";
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";

export default class CustomerList extends Component {
    state = {
        "customers": [{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green "
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller"
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay"
        }
        ]
    }

    componentDidMount() {
        // take a copy of customers
        this.setState({
            original: this.state.customers
        })
    }

    render() {
        return <div>
            <Filter filterEvent={(txt)=> this.filterCustomers(txt)} />
            {
                this.state.customers.map(c => <CustomerRow 
                    delEvent={(id) => this.deleteCustomer(id)}
                    key={c.id} 
                    customer={c} /> )
            }
        </div>
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // state is immutable
        // setState after updating the state ==> reconcillation
        // setState is asynchronous
        this.setState({
            customers: custs
        }, () => console.log(this.state.customers));
    }
    
    // txt ==> Geller
    filterCustomers(txt) {
        let custs = this.state.original.filter(c => c.lastName.toLowerCase().indexOf(txt.toLowerCase()) >= 0);
        this.setState({
            customers: custs
        });
    }
}