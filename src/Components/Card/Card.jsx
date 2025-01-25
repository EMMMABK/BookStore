import react from "react";
import book_img from '../../images/book_store-removebg-preview.png'

const Card = ({book}) => {
    console.log(book);
    return(
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if(thumbnail != undefined){
                        return(
                            <>
                                <div className="card">
                                    <img src={book_img} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">Title</h3>
                                        <p className="amount">32 $</p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })
            }
        </>
    )
}

export default Card;