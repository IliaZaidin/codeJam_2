import { AiOutlineBackward } from "react-icons/ai"
import { AiOutlineForward } from "react-icons/ai"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { useState, useRef, useEffect } from 'react'
import songSrc from '../../songs/song.mp3'
export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioPlayer = useRef();

  const progressBar = useRef();

  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration)
    setDuration(seconds)
    progressBar.current.max = seconds;

  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  function caculateTime(sec) {
    const min = Math.floor(sec / 60)
    const returrnedMinutes = min < 10 ? `0${min}` : `${min}`
    const seconds = Math.floor(sec % 60);
    const returnenSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

    return `${returrnedMinutes}:${returnenSeconds}`
  }

  function togglePlayPause() {
    const preValue = !isPlaying

    setIsPlaying(!isPlaying)
    if (preValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
    else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current)
    }
  }

  function whilePlaying() {

    progressBar.current.value = audioPlayer.current.currentTime;
    setCurrentTime(progressBar.current.value)
    animationRef.current = requestAnimationFrame(whilePlaying)

  }



  function changeRange() {

    audioPlayer.current.currentTime = progressBar.current.value

    setCurrentTime(progressBar.current.value)
  }

  function backThirty() {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  function forwardThirty() {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  }


  return (
    <div className='AudioPlayer'>
      <audio ref={audioPlayer} src={`${songSrc}`} preload='metadata'></audio>
      <div className='button-player-wrapper'>
        <button className='btn btn_type_backward-forward' onClick={backThirty}  >< AiOutlineBackward className='icon' /> </button>
        <button className='btn btn_type_play-pause' onClick={togglePlayPause}>{isPlaying ? <FaPause className='icon' /> : <FaPlay className='icon' />}</button>
        <button className='btn btn_type_backward-forward' onClick={forwardThirty}><AiOutlineForward className='icon' /></button>
      </div>
      <div>{caculateTime(currentTime)}</div>


      <div><input ref={progressBar} type="range" className='progress-bar' defaultValue='0' onChange={changeRange} /></div>



      <div className="duration">{(duration && !isNaN(duration)) ? caculateTime(duration) : ' '}</div>
    </div>
  )
}