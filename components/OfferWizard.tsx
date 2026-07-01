'use client';
import { useMemo, useState } from 'react';
import { ArrowRight, Check, Mail } from './Icons';
const needs = ['Yangın Tüpü','Yangın Dolabı','Sprinkler Sistemi','FM200 / Gazlı Söndürme','Acil Tahliye Planı','Risk Analizi','Periyodik Kontrol','Karbon Yazılımı'];
const places = ['Fabrika','Depo','OSB Tesisi','Ofis','AVM / Mağaza','Otel','Okul','Diğer'];
export default function OfferWizard(){
  const [need,setNeed]=useState(''); const [place,setPlace]=useState(''); const [size,setSize]=useState('');
  const mail = useMemo(()=>`mailto:inforvyn@gmail.com?subject=${encodeURIComponent('ORVYN Teklif Talebi')}&body=${encodeURIComponent(`İhtiyaç: ${need}\nTesis: ${place}\nYaklaşık alan: ${size}\n\nAd Soyad:\nTelefon:\nNot:`)}`,[need,place,size]);
  return <div id="teklif" className="wizard panel">
    <div className="eyebrow">Teklif Sihirbazı</div><h2>Ne lazım? Hızlıca seç, teklif için ulaşalım.</h2>
    <label>İhtiyacınız</label><div className="pickGrid">{needs.map(n=><button className={need===n?'active':''} onClick={()=>setNeed(n)} key={n}>{need===n&&<Check size={15}/>} {n}</button>)}</div>
    <label>Tesis türü</label><div className="pickGrid small">{places.map(n=><button className={place===n?'active':''} onClick={()=>setPlace(n)} key={n}>{n}</button>)}</div>
    <label>Yaklaşık alan</label><input value={size} onChange={e=>setSize(e.target.value)} placeholder="Örn. 1500 m²" />
    <a className="btn primary full" href={mail}><Mail size={18}/> Mail ile Teklif Talebi Gönder <ArrowRight size={18}/></a>
  </div>
}
