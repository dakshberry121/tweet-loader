import React, { Component } from 'react';
import TweetText from "./TweetText";
import axios from "axios";
import TweetUser from './TweetUser';
import TweetUserDesc from "./TweetUserDesc";
import TweetUserImage from "./TweetUserImage";
import {Grid} from "@material-ui/core";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CodeIcon from '@material-ui/icons/Code';

class TweetView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            endpoint:"http://localhost:3001/getTweets",
            tweetData:[]
         }
    }

    componentDidMount(){
        axios.get(this.state.endpoint).then((req,res)=>{
          console.log(req.data);
          this.setState({
              tweetData:req.data
          })
        })
      }

    render() { 
        return (
            <Grid container xs={12}>
                {this.state.tweetData.map((ele)=>{
                    console.log(ele.text);
                    return (<Grid item container xs={5} style={{boxShadow:"1px 1px 1px 1px #888888",margin:"1vh",padding:"2vh 3vh",textAlign:"centre",backgroundColor:"white"}}>
                        <Grid container item xs={1} >
                            <Grid item >
                            <TweetUserImage text={ele.userImage}/>
                            </Grid>
                        </Grid>
                        <Grid container item xs={11}>
                            <Grid item xs={12} style={{textAlign:"left"}}>
                            <TweetUser text={ele.userScreenName} />                           
                            </Grid>
                            <Grid item xs={12} style={{textAlign:"left"}}>
                            <TweetUserDesc text={ele.description} />                            
                            </Grid>
                        </Grid>             
                        <Grid item xs={12} style={{textAlign:"centre"}}>
                        <TweetText text={ele.text} />                            
                        </Grid>
                        <Grid item xs={12}>
                        <ChatBubbleOutlineIcon/> <FavoriteBorderIcon /> <CodeIcon/>                           
                        </Grid>
                        </Grid>);
                })}
            </Grid>
          );
    }
}
 
export default TweetView;