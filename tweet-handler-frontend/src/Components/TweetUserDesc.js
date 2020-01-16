import React, { Component } from 'react';

class TweetUserDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <p>
               <i><samp>{this.props.text}</samp></i>
            </p>
         );
    }
}
 
export default TweetUserDesc;