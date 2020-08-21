import React from 'react'
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css"

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
    <h2>Recommended</h2>
    <div className="recommendedVideos__videos">
    <VideoCard
    title="test title"
    views="1.3m views"
    timestamp=""
    channelImage=""
    channel=""
    image=""
    />
    <VideoCard
    title=""
    views=""
    timestamp=""
    channelImage=""
    channel=""
    image=""/>
    <VideoCard
    title=""
    views=""
    timestamp=""
    channelImage=""
    channel=""
    image=""/>
    <VideoCard
    title=""
    views=""
    timestamp=""
    channelImage=""
    channel=""
    image=""/>
    <VideoCard
    title=""
    views=""
    timestamp=""
    channelImage=""
    channel=""
    image=""/>
    <VideoCard
    title=""
    views=""
    timestamp=""
    channelImage=""
    channel=""
    image=""/>
    <VideoCard
    title=""
    views=""
    timestamp=""
    channelImage=""
    channel=""
    image=""/>
    <VideoCard
    title=""
    views=""
    timestamp=""
    channelImage=""
    channel=""
    image=""/>
    </div>
    </div>

  )
}

export default RecommendedVideos
