// write your CatList component here
import React from 'react'

function CatList({catPics}) {
    
    const renderPics = catPics.map( (pic) => <img height="400px" width="400px" alt="" src={pic.url}/> )
    return (
        <div>
            {renderPics}
        </div>
    )
}

export default CatList
