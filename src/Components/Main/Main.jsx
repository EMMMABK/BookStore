import React, {useState} from 'react'
import book from '../../images/book_store-removebg-preview.png'
import Card from '../Card/Card';
import axios from 'axios';

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData,setData] = useState([]);
    const searchBook = (evt) => {
        if(evt.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=YOUR_API' + '&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        } 
    }
    return(
        <>
            <div className="header">
                <div className="row_one">
                    <h1>Book</h1>
                </div>
                <div className="row_two">
                    <h2>Seach your book.</h2>
                    <div className="search">
                        <input type="text" placeholder='Enter Your Book Name' value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src={book} alt=""/>
                </div>
            </div>
            <div className="container">
            {
                <Card book={bookData}/>
            }
            </div>
        </>
    )
}
export default Main;