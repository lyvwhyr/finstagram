import React from 'react'
import './index.css'

const ProfileToolbar = () => {
    return (
        <div className="profile-toolbar-container">
            <div className="follow-button">
                Follow
            </div>
            <div className="dm-button">
                <span className="material-icons">
                    send
                </span>
            </div>
        </div>
    )
}

export {
    ProfileToolbar
}