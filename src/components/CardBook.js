import React from 'react'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react'
import CardGroup from 'react-bootstrap/CardGroup';

import { CurrentlyReadContex } from './CurrentlyReadContext';
import { BooksContex } from './BooksContex';
import { WantToReadContex } from './WantToReadContex';
import { ReadContex } from './ReadContex';
const items = ["CurrentlyRead", "wantToRead", "Read"];


export default function Hello(props) {

    const[cardindex,setcardinfo]=useState();
    const [selectedItem, setSelectedItem] = useState("");
    const {currentlyRead,SetCurrentlyRead}=useContext(CurrentlyReadContex);
    const {WantToRead,SetWantToRead}=useContext( WantToReadContex);
    const {Read,SetRead}=useContext(ReadContex );
    const {Books,SetBooks}=useContext(BooksContex);


    const deleteItemm=(index)=> {
      SetBooks((Books) => Books.filter((_, i) => i !== index));



    }

   
    if(selectedItem=="CurrentlyRead"){
      if(!currentlyRead.includes(props.book) ){

        SetCurrentlyRead(currentlyRead.concat([props.book]))
      }
    }
    if(selectedItem=="wantToRead"){
      if(!WantToRead.includes(props.book) ){

        SetWantToRead(WantToRead.concat([props.book]))
      }
    if(currentlyRead.includes(props.book) ){
        console.log("why")
        //SetCurrentlyRead((currentlyRead) => currentlyRead.filter((_, i) => i !== props.index));

      }
    }

    if(selectedItem=="Read"){
      if(!Read.includes(props.book) ){

        SetRead(Read.concat([props.book]))
      }
    }
    return (
        <Card className="col-3 justify-content-between justify-space-between" onClick={()=>{
          if(!currentlyRead.includes(props.book) ){

          SetCurrentlyRead(currentlyRead.concat([props.book]))
        }
          deleteItemm(props.index)


          }} >
            <Card.Img variant="top" src={props.book.volumeInfo.imageLinks.thumbnail} />
            <Card.Body>
              <Card.Title>{props.book.volumeInfo.title}</Card.Title>
              <Card.Text>
                <p>{props.book.volumeInfo.authors}
                         </p>
                         <p>
                         </p>

              </Card.Text>
              <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Edit
      </Dropdown.Toggle>

      <Dropdown.Menu>
          {items.map((item) => (
            <Dropdown.Item onClick={() => setSelectedItem(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
    </Dropdown>
   <p>
    {selectedItem}
   </p>
            </Card.Body>
          </Card>

    )
}