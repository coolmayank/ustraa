import React from 'react'

export default function Title({title}) {
    return (
        <div className="row" style={{backgroundColor:'#f3f3f3'}}>
            <div className="col-10 mx-10 my-2 text-center text-title">
                <h1 className="text-uppercase font-weight-bold">
                {title}
                </h1>
            </div>
        </div>
    )
}

