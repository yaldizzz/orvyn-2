'use client';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Play, X } from './Icons';

export default function VideoModal(){
  const [open,setOpen] = useState(false);
  const [mounted,setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(()=>setMounted(true),[]);
  useEffect(()=>{
    if(!open) return;
    document.body.classList.add('modalOpen');
    const onKey = (e:KeyboardEvent)=>{ if(e.key==='Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return ()=>{ document.body.classList.remove('modalOpen'); window.removeEventListener('keydown', onKey); };
  },[open]);
  const close=()=>{ videoRef.current?.pause(); setOpen(false); };
  const modal = open ? <div className="videoOverlay" onMouseDown={close}>
    <div className="videoBox" onMouseDown={(e)=>e.stopPropagation()}>
      <button className="videoClose" onClick={close}><X/> Kapat</button>
      <video ref={videoRef} src="/videos/intro.mp4" controls autoPlay playsInline className="videoPlayer" />
    </div>
  </div> : null;
  return <>
    <button className="watchBtn" onClick={()=>setOpen(true)}><span><Play size={42} fill="currentColor"/></span><b>Videoyu İzle</b><small>Tam ekran • Sesli</small></button>
    {mounted && modal ? createPortal(modal, document.body) : null}
  </>;
}
