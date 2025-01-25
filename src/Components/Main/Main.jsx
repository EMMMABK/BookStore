import React from 'react'
const Main = () => {
    return(
        <>
            <div className="header">
                <div className="row_one">
                    <h1>Book</h1>
                </div>
                <div className="row_two">
                    <h2>Seach your book.</h2>
                    <div className="search">
                        <input type="text" placeholder='Enter Your Book Name'/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;