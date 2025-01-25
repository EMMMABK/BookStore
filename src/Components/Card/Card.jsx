import react from "react";

const Card = ({book}) => {
    console.log(book);
    
    return(
        <>
            <div className="card">
                <img src="" alt="" />
                <div className="bottom">
                    <h3 className="title">Title</h3>
                    <p className="amount">32 $</p>
                </div>
            </div>
        </>
    )
}

export default Card;