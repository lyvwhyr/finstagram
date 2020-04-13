import React from 'react'
import './index.css'

const ProfileStats = ({ postCount, followerCount, followingCount }) => {
    return (
        <div className="profile-stats-container">
            <div className="stat-count">
                {postCount}
                <div className="title">Posts</div>
            </div>
            <div className="stat-count">
                {followerCount}
                <div className="title">Followers</div>

            </div>
            <div className="stat-count">
                {followingCount}
                <div className="title">Following</div>

            </div>
        </div>
    )
}


export {
    ProfileStats
}