import React from 'react'
import './index.css'

const StoryToolbar = ({ stories } = []) => {
    return (
        <div className="story-toolbar-container">
            <div className="scroll-container">
                <div className="preview-image create">
                    <img src="profile.jpeg" />
                </div>
                {stories.map(({ previewImage, seen }) => {
                    const imgClass = seen ? 'preview-image' : 'preview-image unseen'
                    return (
                        <div className={imgClass}>
                            <img src={previewImage} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export {
    StoryToolbar
}