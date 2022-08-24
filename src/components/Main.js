import React from 'react'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import CardBook from './CardBook';  


import Row from 'react-bootstrap/Row';
import { CurrentlyReadContex } from './CurrentlyReadContext';
import { WantToReadContex } from './WantToReadContex';
import { ReadContex } from './ReadContex';



export default function Hello() {
    const {currentlyRead,SetCurrentlyRead}=useContext(CurrentlyReadContex);
    const {Read,SetRead}=useContext(ReadContex);
    const {WantToRead,SetWantToRead}=useContext(WantToReadContex);


    return (
<div className="container">

<div className="row">
           <h1>
        Currently Reading 
        </h1>

        {  
          currentlyRead.map((book) => (
         
            <CardBook book={book}/>
            
           )   
           )
           }
      <h1>
        Want to Read
      </h1>
      {  
          WantToRead.map((book) => (
         
            <CardBook book={book}/>
            
           )   
           )
           }
     
      <h1>
        Read
      </h1>  
      {  
          Read.map((book) => (
         
            <CardBook book={book}/>
            
           )   
           )
           } 
     
      </div>
             </div>
    )
}