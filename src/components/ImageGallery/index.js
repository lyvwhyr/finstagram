import React from 'react'
import './index.css'

const ImageGallery = ({ posts }) => {
    return (
        <div className="image-gallery-container">
            {posts.map(singlePost => (<img className="post" src={singlePost.url} />))}
            {posts.map(singlePost => (<img className="post" src={singlePost.url} />))}
            {posts.map(singlePost => (<img className="post" src={singlePost.url} />))}
        </div>)

}

export { ImageGallery }