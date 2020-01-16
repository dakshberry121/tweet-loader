import React, { Component,Suspense,lazy } from 'react';
import './App.css';
import TweetView from "./Components/TweetView";
// const TweetView =lazy(() => import("./Components/TweetView"));
import TwitterIcon from '@material-ui/icons/Twitter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showTweets:false,
      rot:false
     }
     this.firstClick=this.firstClick.bind(this);
    }
    firstClick=()=>{
      this.setState({
        rot:true
      })
      setInterval(()=>{
        this.setState({
          showTweets:true
        })
      },1000)
      
    }

  render() {
    return (
      <div className="App" style={{paddingLeft:"5vw",paddingTop:"2vw",paddingBottom:"5vw",backgroundColor:"#00acee"}}>
        {/* <TweetView /> */}
        {this.state.showTweets?<Suspense fallback={<div>Loading...</div>}>
        <TweetView/>
        </Suspense>
        :<div >
          {/* <h1 style={{color:"white",marginTop:"30vh",marginLeft:"40vw"}}>CLICK ME!</h1> */}
          <TwitterIcon className={(this.state.rot?"App-logo":"sope")} onClick={this.firstClick} style={{color:"white",height:"10vh",width:"10vh",marginLeft:"42vw",marginTop:"38vh"}}/>
        </div>
}
      </div>
    );
  }
}

export default App;
