import React from 'react'
import CardBook from './CardBook'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

import axios from 'axios';


export default function Hello(props) {
  const { title } = useParams();
  const [isLoaded, setLoad] = useState(false);
  const [bookDetails, setbookDetails] = useState([]);

  console.log("Title", title);


  useEffect(() => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`
    axios.get(url)
      .then(response => {
        setbookDetails(response.data.items[0]);
        setLoad(true);
        console.log("axios", bookDetails);
      }
      )
  }, [title]);

  return (
    <div>
      {console.log("render", bookDetails)}
      <Card className="col-6 justify-content-between justify-space-between"  >
        <Card.Img variant="top" src={isLoaded && bookDetails.volumeInfo.imageLinks.smallThumbnail} />
        <Card.Body>
          {isLoaded && <Card.Title>{bookDetails.volumeInfo.title}</Card.Title>}
          <Card.Text>
            <p>country {isLoaded && bookDetails.saleInfo.country}</p>
            <p>
              saleability{isLoaded && bookDetails.saleInfo.saleability}
            </p>
            <p>
              publish date:{isLoaded && bookDetails.volumeInfo.publishedDate}
            </p>

          </Card.Text>




        </Card.Body>
      </Card>

    </div>
  )
}