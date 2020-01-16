import React, { Component } from 'react';

class TweetText extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // console.log(this.props);
        return ( 
            <div>
                <p >{this.props.text}</p>
            </div>
         );
    }
}
 
export default TweetText;