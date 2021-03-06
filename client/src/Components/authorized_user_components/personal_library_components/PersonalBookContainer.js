import React, { useState, useEffect } from 'react'
import PersonalBookInfo from './PersonalBookInfo'
import { Card, Button } from 'semantic-ui-react'
import BookSearch from '../book_components/BookSearch'
import NavBar from '../../NavBar'


function PersonalBookContainer(){

    const [userBooks, setUserBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')

    
    
    useEffect(() => {
        fetch('/user_books')
        .then((response) => response.json())
        .then((data) => setUserBooks(data))
    }, [])


    const searchBooks = (event) => {
        setSearchInput(event.target.value)
       if (event.target.value !== ''){
        const filteredData = userBooks.filter(book => book.book.genre.toLowerCase().includes(searchInput.toLowerCase()))
        setFilteredBooks(filteredData)
       }
       else {
        setFilteredBooks(userBooks)
       }
    }
    
    
    const bookDisplay = () =>  userBooks.map((book) => <PersonalBookInfo key={book.id} book={book} deleteBook={deleteBook} />)
    const filteredBookDisplay = () => filteredBooks.map((book) => <PersonalBookInfo key={book.id} book={book} deleteBook={deleteBook} />)

    
    const deleteBook = (id) => {
        console.log(id)
        const newBooks = userBooks.filter(b => b.id !== id)
       setUserBooks(newBooks)
    }
  
   
    return(
       <div className='infoPage'>
           <NavBar />
            <br /> <br /> <br /> <br />
            <div className="h1">Your Personal Library</div> 
            <br /><br />
            <BookSearch searchBooks={searchBooks} />
            <br /> <br />
            <Card.Group itemsPerRow={4}>
                {filteredBooks.length > 0 ? filteredBookDisplay(): bookDisplay()}
            </Card.Group>
            <br /><br />
            <div className="buttonPosition">
            <Button href="/books" style={{fontFamily: 'optima'}}>Back</Button>
            </div>
       </div>
   )
    

}

export default PersonalBookContainer;