import { AiOutlineBackward } from "react-icons/ai"
import { AiOutlineForward } from "react-icons/ai"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { useState } from 'react'

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  function togglePlayPause() {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='AudioPlayer'>
      <audio src="#" preload='metadata'></audio>
      <div className='button-player-wrapper'>
        <button className='btn btn_type_backward-forward'>< AiOutlineBackward className='icon' /> </button>
        <button className='btn btn_type_play-pause' onClick={togglePlayPause}>{isPlaying ? <FaPause className='icon' /> : <FaPlay className='icon' />}</button>
        <button className='btn btn_type_backward-forward'><AiOutlineForward className='icon' /></button>
      </div>
      <div>0:00</div>
      <div><input type="range" className='progress-bar' /></div>
      <div>2:49</div>
    </div>
  )
}