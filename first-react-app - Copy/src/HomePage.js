import React from 'react';
import axios from 'axios';

import Loader from './Loader'

import {VideoPlaylistData} from './VideoData';
import Vediocard from './playlistCard';
import classes from './HomePage.module.css';

class Homepage extends React.Component{
   state = {
      videoList:[],
      showLoader:true,
   }

   componentDidMount(){
      axios.get("http://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
      .then(Response => {
         // console.log(Response.data);
         this.setState({videoList:Response.data, showLoader:false});
      })

      .catch(err =>{
         console.log(err.data)
      })
   }
   render(){
      const videoPlaylistData=this.state.videoList;

     const cardGrid=videoPlaylistData.map((item,pos) =>{
      return(
         <div className={classes.vediocard}>
            <Vediocard key={pos} id={item.id} thumbnail={item.thumbnail} title={item.title}/>
         </div>
         )

   });

   return(
      <div className={classes.MainFrame} >
         { this.state.showLoader ?
            <h1>Loading...</h1> :
            cardGrid 
      }
         
      </div>
   )
   }
    
   
}

export default Homepage;