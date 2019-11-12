import React from 'react';
import { Link } from 'react-router-dom';

import classes from './playlistCard.module.css';

// onClick={()=>props.oncard(props.cardPos)}
const Playcard=(props)=>{
   const classesArr=[classes.playlistContain];
   if(props.currentVideo === props.cardPos){
      classesArr.push(classes.Active);
}
   
   return(
      <Link to={`/watch/${props.id}`}>
      <div className={classesArr.join(' ')}>
      <img src={props.thumbnail} alt="thumbnail"/>
      <h3>{props.title}</h3>
      </div>
      </Link>
   )
}

export default Playcard;