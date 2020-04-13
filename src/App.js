import React from 'react';
import './App.css';
import { ProfileHeader } from './components/Header'
import { ProfileInfo } from './components/ProfileInfo'
import { ProfileStats } from './components/ProfileStats'
import { ProfileToolbar } from './components/ProfileToolbar'
import { StoryToolbar } from './components/StoryToolbar'
import { ImageGallery } from './components/ImageGallery'
import { BottomNavigationBar } from './components/BottomNavigationBar'
import { mockData } from './data'


function App() {
  return (
    <div className="main">
      <ProfileHeader username={mockData.username} />
      <ProfileInfo
        username={mockData.username}
        occupation={mockData.occupation}
        profilePic={mockData.profilePic}
        type={mockData.type}
        url={mockData.url}
      />
      <ProfileStats
        followerCount={mockData.followerCount}
        postCount={mockData.postCount}
        followingCount={mockData.followingCount}
      />
      <ProfileToolbar />
      <StoryToolbar stories={mockData.stories} />
      <ImageGallery posts={mockData.posts} />
      <BottomNavigationBar />
    </div>
  );
}

export default App;
