import React from 'react'
import './index.css'

const ProfileInfo = ({ username, type, occupation, url, profilePic }) => {

    return (
        <div className='profile-info-container'>
            <div className="profile-pic">
                <img

                    src={profilePic} />
            </div>
            <div className="bio">
                <div className="username">{username}</div>
                <div className="type">{type}</div>
                <div className="occupation">{occupation}</div>
                <div className="url">{url}</div>
            </div>
        </div >
    )

}


export {
    ProfileInfo
}