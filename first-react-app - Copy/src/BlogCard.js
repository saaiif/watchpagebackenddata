import React from 'react';
import { dumpLogs } from './utiliz';
import classes from './BlogCard.module.css';
const BlogCard=(props)=> {
   
   
   // inBtnClick=()=>{
   //   setState((prevState, prevProp)=>{
   //    return  {
   //       likecount:prevState.likecount + 1
   //    }
   // });
   
   dumpLogs(props)
  
   return(
      <div className={classes.New} >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Like Count:<span className={classes.likecount}>{props.likecount}</span></p>
      <button onClick={()=>props.onButtonClick(props.position)} className={classes.btn}>Like</button>
      </div>
   )
}

export default BlogCard;