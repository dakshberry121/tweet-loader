import React, { Component } from 'react';

class TweetUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
                <h4 style={{ color:"#00acee"}}>@{this.props.text}</h4>
         );
    }
}
 
export default TweetUser;