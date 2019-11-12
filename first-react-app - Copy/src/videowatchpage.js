import React,{Component} from 'react';

import axios from 'axios';

import Homepage from './HomePage';

import Playcard from './playlistCard';
import {VideoMetaData,VideoPlaylistData,VideoMetaDataList} from './VideoData';
import classes from './videowatchpage.module.css';
class Vediowatchpage extends Component{

   state={
      currentCardPos:0,
      videoMetaData:VideoMetaDataList[0],
      vedioPlaylist:VideoPlaylistData,
   }
    onVedioCardClick=(pos)=>{
      this.setState({videoMetaData:VideoMetaDataList[pos], currentCardPos:pos});
     console.log(this.videoMetaData);
   }

   backendData=()=>{
      const videoId = this.props.match.params.id;
      if(videoId !== undefined && videoId !== null && videoId !== '' && parseInt(videoId)> 0){
      axios.get(`http://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoId}`)
         .then(response =>{
            console.log(response.data);
            this.setState({videoMetaData:response.data});

         })
         .catch(err =>{
            console.log(err)
         })
      }

   }
  
   componentDidMount(){
      this.backendData();
   }

   componentDidUpdate(){
      this.backendData();
   }
   render(){
      let vediolist=this.state.vedioPlaylist.map((item,pos)=>{
          return(
             <Playcard key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} oncard={this.onVedioCardClick} cardPos={pos} currentVideo={this.state.currentCardPos}/>
             
          )
          
       });
   return(
      <div className={classes.App}>
      <div className={classes.leftSection}>
         <div className={classes.playersection}>
         <div>
         <iframe className={classes.VideoPlayer} src={`https://player.vimeo.com/video/${this.state.videoMetaData.vimeoId}`} width="100%" height="360" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" title="Vedio Player"></iframe>
         </div>
          <div className={classes.viewStats}>
          <p>{this.state.videoMetaData.views}</p>
          <div>
                  <i className="far fa-heart"></i>
                  <i className="far fa-comment-alt"></i>
                  <i className="far fa-bookmark"></i>
          </div>
          </div>
            <h3>{this.state.videoMetaData.title}</h3>
            <p className={classes.vedioDescription}>{this.state.videoMetaData.description}</p>
            
            </div>
      <div className={classes.rightSection}>
      {vediolist}
         
      </div>
      
      </div>
      </div>
      
      
   );  
   
}
}

export default Vediowatchpage;