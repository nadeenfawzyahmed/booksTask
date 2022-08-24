import './App.css';
import Button from 'react-bootstrap/Button'  
import {FaCommentMedical} from 'react-icons/fa';
import Search from './components/Search'
import  Main from './components/Main'
import { useState } from 'react';
import { CurrentlyReadContex } from './components/CurrentlyReadContext';
import { BooksContex } from './components/BooksContex';
import{ReadContex}from './components/ReadContex';
import {WantToReadContex} from './components/WantToReadContex'




function App() {
  const[isToggled,setIsToggled]=useState(false);

 const [currentlyRead,SetCurrentlyRead]=useState([]);
 const [WantToRead,SetWantToRead]=useState([]);
 const [Read,SetRead]=useState([]);


 const [Books,SetBooks]=useState([]);

  return (

    <div className="App">
    
      <Button  variant="success" onClick={()=>setIsToggled(!isToggled)} className="buttonStyle">
        
        <FaCommentMedical/>

      </Button>
      <WantToReadContex.Provider value={{WantToRead,SetWantToRead}}>

      <ReadContex.Provider value={{Read,SetRead}}>

      <BooksContex.Provider value={{Books,SetBooks}}>

      <CurrentlyReadContex.Provider value={{currentlyRead,SetCurrentlyRead}}>

      {!isToggled&&  
      <Main/>  
      
            }
      {isToggled&& 

       <Search/>

            }
      </CurrentlyReadContex.Provider>
      </BooksContex.Provider>
      </ReadContex.Provider>
      </WantToReadContex.Provider>




    </div>
  );
}

export default App;
