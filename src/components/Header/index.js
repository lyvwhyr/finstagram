import React from 'react'
import './index.css'

const ProfileHeader = ({ username }) => {
    return (
        <div className="header-container">
            <span class="material-icons">
                arrow_back
            </span>
            <div className="username-container">
                {username}
            </div>
            <span class="material-icons">
                more_horiz
            </span>
        </div>
    )

}

export {
    ProfileHeader
}