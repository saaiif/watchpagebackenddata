import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Vediowatchpage from './videowatchpage';
import Homepage from './HomePage';


import classes from './App.module.css';

function App() { 
   return(
      <BrowserRouter>
      <div className={classes.App}>
         <Switch>
         <Route path={"/watch/:id"} component={Vediowatchpage}/>
         <Route path={"/"} component={Homepage}/>
         </Switch>
      </div>
      </BrowserRouter>
   )
   }

export default App;