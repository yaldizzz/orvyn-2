'use client';
import { useEffect, useRef, useState } from 'react';
import { X } from './Icons';

export default function IntroSplash(){
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible,setVisible] = useState(false);

  useEffect(()=>{
    if(!sessionStorage.getItem('orvyn_intro_seen')) setVisible(true);
  },[]);

  useEffect(()=>{
    if(!visible) return;
    const v = videoRef.current;
    if(!v) return;
    v.currentTime = 0;
    v.muted = true;
    const playPromise = v.play();
    if(playPromise) playPromise.catch(()=>{
      // Tarayıcı videoyu başlatmazsa introda bekletmeden siteyi aç.
      close();
    });
    const fallback = window.setTimeout(close, 6200);
    return () => window.clearTimeout(fallback);
  },[visible]);

  const close = () => {
    sessionStorage.setItem('orvyn_intro_seen','1');
    setVisible(false);
  };

  if(!visible) return null;
  return <div className="introSplash" aria-label="ORVYN açılış videosu">
    <video
      ref={videoRef}
      src="/videos/intro.mp4"
      className="introVideo"
      autoPlay
      muted
      playsInline
      preload="auto"
      onEnded={close}
    />
    <div className="introShade" />
    <div className="introControls">
      <button onClick={close} aria-label="Açılışı geç"><X/> Geç</button>
    </div>
  </div>;
}
