import React, { Component } from 'react';
import Register from './components/register';
import styles from './App.css'
class App extends Component{
 
    render(){
        return(
            <div className={styles.App}>
           <Register/>
           </div>
           
        )
    }
}
export default App;