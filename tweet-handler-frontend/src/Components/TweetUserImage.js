import React, { Component } from 'react';

class TweetUserImage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <img style={{marginTop:"3vh"}} src={this.props.text} />
            </div>
         );
    }
}
 
export default TweetUserImage;