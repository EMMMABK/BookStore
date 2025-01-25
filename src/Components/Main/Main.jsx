import React, {useState} from 'react'
import Card from '../Card/Card';
import axios from 'axios';

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData,setData] = useState([]);
    const searchBook = (evt) => {
        if(evt.key === "Enter" || evt.type === "click"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=YOUR_API' + '&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        } 
    }
    const handleButtonClick = () => {
        searchBook({ key: "Enter" }); 
    };

    return(
        <>
            <div className="header">
                <div className="row_one">
                    <h1>The Reading Room</h1>
                </div>
                <div className="row_two">
                    <h2>Where every page you turn takes you to places you've never been.</h2>
                    <div className="search">
                        <input type="text" placeholder='Enter Your Book Name' value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook}/>
                        <button onClick={handleButtonClick}><i className="fas fa-search"></i></button>
                    </div>
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