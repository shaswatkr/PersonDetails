import React, {Component} from 'react';
import {connect} from "react-redux";

class ActiveUser extends Component {
    render() {
        if(!this.props.user)
            return (<h2> Select a User.... </h2>);
        return (
                <div>
                    <img src={this.props.user.thumbnail} />
                    <h1> {this.props.user.first} {this.props.user.last} </h1>
                    <h3> Age: {this.props.user.age} </h3>
                    <h3> Description: {this.props.user.description} </h3>
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(ActiveUser);