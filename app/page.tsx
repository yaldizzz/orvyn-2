import Image from 'next/image';
import IntroSplash from '@/components/IntroSplash';
import VideoModal from '@/components/VideoModal';
import OfferWizard from '@/components/OfferWizard';
import { ArrowRight, BarChart, Building, Check, Clipboard, Flame, Headset, Leaf, Mail, MapPin, Phone, Route, Search, Shield, Users } from '@/components/Icons';

const services = [
  { icon: Flame, title: 'Yangın Mühendisliği', text: 'Tesisinize uygun yangın güvenliği tasarımı, sistem seçimi ve teknik değerlendirme.', img:'/images/sprinkler-room.jpg' },
  { icon: Users, title: 'Yangın Danışmanlığı', text: 'Mevzuat uyumu, risk analizi, raporlama ve saha uygulama süreçlerinde danışmanlık.', img:'/images/office-orvyn.jpg' },
  { icon: Clipboard, title: 'Periyodik Kontroller', text: 'Yangın sistemleri ve ekipmanları için düzenli kontrol, uygunsuzluk tespiti ve raporlama.', img:'/images/alarm-panel.jpg' },
  { icon: Route, title: 'Acil Tahliye Planı', text: 'Kaçış güzergâhı, layout, yönlendirme levhası ve toplanma alanı planlaması.', img:'/images/exit-sign.jpg' },
  { icon: Shield, title: 'Risk Analizi', text: 'Yangın risk senaryoları, kritik noktalar ve iyileştirme önceliklerinin belirlenmesi.', img:'/images/hero-fire-room.jpg' },
  { icon: Leaf, title: 'Karbon Yönetimi', text: 'Enerji, yakıt, nakliye, hammadde ve fatura verilerinden karbon ayak izi yaklaşımı.', img:'/images/carbon-dashboard.jpg' },
  { icon: BarChart, title: 'Karbon Yazılım Platformu', text: 'Muhasebe entegrasyonu, otomatik fatura sınıflandırma ve ürün bazlı karbon hesabı altyapısı.', img:'/images/carbon-dashboard.jpg' }
];

const products = [
  ['Yangın Söndürme Cihazları','KKT, CO₂, köpüklü ve farklı kapasitede söndürme cihazları.','/images/product-extinguisher.jpg'],
  ['Yangın Dolapları','Yangın dolabı, hortum, lans, vana ve bağlantı ekipmanları.','/images/product-cabinet.jpg'],
  ['Yangın Algılama Sistemleri','Dedektör, buton, siren, flaşör ve alarm paneli çözümleri.','/images/product-alarm.jpg'],
  ['Sprinkler Sistemleri','Sprinkler başlığı, borulama, pompa, vana ve su bazlı sistemler.','/images/product-sprinkler.jpg'],
  ['Acil Aydınlatma ve Yönlendirme','Kaçış yönlendirme, acil aydınlatma ve levhalandırma ürünleri.','/images/product-exit.jpg'],
  ['Gazlı Söndürme Sistemleri','FM200, Novec 1230, CO₂ ve özel hacim söndürme sistemleri.','/images/product-gas.jpg']
];

const process = ['İhtiyacı dinliyoruz','Ön değerlendirme','Yerinde keşif','Proje ve layout','Teklif planlama','Uygulama / tedarik','Periyodik takip'];

export default function Page(){
  return <>
    <IntroSplash />
    <header className="topbar">
      <a className="logo" href="#top"><Image src="/images/orvyn-logo.png" alt="ORVYN Technology" width={245} height={82} priority /></a>
      <nav><a href="#top">Ana Sayfa</a><a href="#kurumsal">Kurumsal</a><a href="#hizmetler">Hizmetler</a><a href="#urunler">Ürünler</a><a href="#karbon">Karbon Yönetimi</a><a href="#teklif">Teklif</a><a href="#iletisim">İletişim</a></nav>
      <div className="navRight"><a className="btn primary small" href="#teklif">Teklif Al <ArrowRight size={16}/></a><a className="phone" href="tel:+905078959294"><Phone size={18}/> 0507 895 92 94</a></div>
    </header>

    <main id="top">
      <section className="hero">
        <div className="heroBg"><img src="/images/hero-fire-room.jpg" alt="Endüstriyel yangın sistemleri" /></div>
        <div className="heroOverlay" />
        <div className="container heroInner">
          <div className="heroText">
            <div className="eyebrow">Güvenlik • Mühendislik • Teknoloji • Sürdürülebilirlik</div>
            <h1>Yangın Güvenliği, Mühendislik ve <span>Karbon Yönetimi</span> Tek Platformda.</h1>
            <p>ORVYN Teknoloji; yangın güvenliği, ürün tedariği, mühendislik danışmanlığı ve karbon yönetimi alanlarında modern, teknik ve sürdürülebilir çözümler sunar.</p>
            <div className="actions"><a className="btn primary" href="#hizmetler">Hizmetleri Keşfet <ArrowRight size={18}/></a><a className="btn secondary" href="#teklif">Teklif Al <ArrowRight size={18}/></a></div>
          </div>
          <VideoModal />
        </div>
        <div className="container quickCards">
          {services.map(s=>{const Icon=s.icon; return <a href="#teklif" className="quickCard" key={s.title}><Icon/><b>{s.title}</b><ArrowRight size={17}/></a>})}
        </div>
      </section>

      <section id="hizmetler" className="section">
        <div className="container">
          <div className="sectionHead"><div><div className="eyebrow">Hizmetlerimiz</div><h2>Her hizmet için özel görsel, özel kapsam</h2></div><p>Teklif sürecine yönlendiren, gerçekçi ve kurumsal hizmet yapısı.</p></div>
          <div className="serviceGrid">{services.map(s=>{const Icon=s.icon; return <article className="service" key={s.title}><img src={s.img} alt={s.title}/><div><Icon/><h3>{s.title}</h3><p>{s.text}</p><a href="#teklif">Bu konuda görüşelim <ArrowRight size={15}/></a></div></article>})}</div>
        </div>
      </section>

      <section id="kurumsal" className="section dark">
        <div className="container split">
          <div className="panel about"><div className="eyebrow">Hakkımızda</div><h2>Güvenliği, teknolojiyi ve mühendisliği birleştiriyoruz.</h2><p>Amacımız yalnızca ürün satmak değil; işletmelerin güvenliğini doğru mühendislik, doğru ürün seçimi ve güçlü teknoloji yaklaşımıyla desteklemektir.</p><a className="btn secondary" href="#iletisim">Bize Ulaşın <ArrowRight size={18}/></a></div>
          <div className="panel process"><div className="eyebrow">Çalışma Sürecimiz</div><h2>7 adımda net süreç</h2><div className="steps">{process.map((p,i)=><div key={p}><b>{i+1}</b><span>{p}</span></div>)}</div></div>
          <OfferWizard />
        </div>
      </section>

      <section id="urunler" className="section products">
        <div className="container">
          <div className="sectionHead"><div><div className="eyebrow">Ürünlerimiz</div><h2>Yangın güvenliği ürünleri</h2></div><p>Ürünleri katalog gibi bırakmıyoruz; ziyaretçiyi ihtiyacına göre teklif sürecine yönlendiriyoruz.</p></div>
          <div className="productGrid">{products.map(([title,text,img])=><a href="#teklif" className="product" key={title}><img src={img} alt={title}/><div><h3>{title}</h3><p>{text}</p><span>Teklif iste <ArrowRight size={15}/></span></div></a>)}</div>
        </div>
      </section>

      <section id="karbon" className="section carbon">
        <div className="container carbonGrid">
          <div><div className="eyebrow">Karbon Yönetim Platformu</div><h2>Yangın güvenliği yanında dijital sürdürülebilirlik</h2><p>Faturaları, yakıtları, enerji tüketimini, nakliye ve hammadde verilerini sınıflandırarak karbon ayak izi hesaplamaya yönelik yazılım altyapısı.</p><ul><li><Check/> CBAM, ISO 14064, TSRS ve ESG hazırlığı</li><li><Check/> Fatura ve faaliyet verilerinden hesaplama yaklaşımı</li><li><Check/> Ürün bazlı karbon hesabı hedefi</li><li><Check/> Muhasebe entegrasyonlarına uygun mimari</li></ul><a className="btn primary" href="#teklif">Karbon çözümü için görüşelim</a></div>
          <img src="/images/carbon-dashboard.jpg" alt="Karbon yönetimi yazılım ekranı" />
        </div>
      </section>

      <section className="section why">
        <div className="container"><div className="sectionHead"><div><div className="eyebrow">Neden ORVYN?</div><h2>Abartılı rakamlar değil, güven veren yaklaşım</h2></div><p>Yeni marka kimliğimize uygun şekilde gerçekçi, teknik ve sürdürülebilir bir duruş.</p></div><div className="valueGrid"><div><Building/><b>Endüstriyel Odak</b><p>Fabrika, depo, OSB ve kurumsal tesisler için teknik yaklaşım.</p></div><div><Shield/><b>Mevzuata Uyum</b><p>Yangın güvenliği ve acil durum süreçlerinde doğru planlama.</p></div><div><Headset/><b>Hızlı İletişim</b><p>Telefon, WhatsApp ve e-posta ile hızlı dönüş.</p></div><div><Search/><b>Teknik Değerlendirme</b><p>İhtiyaca göre ürün, proje ve danışmanlık kurgusu.</p></div></div></div>
      </section>

      <section id="iletisim" className="section contact">
        <div className="container contactGrid"><div><div className="eyebrow">İletişim</div><h2>Projeniz için doğru çözümü birlikte planlayalım.</h2><p>Yangın güvenliği, ürün tedariği, acil tahliye planı veya karbon yönetimi için bize ulaşın.</p><div className="actions"><a className="btn primary" href="mailto:inforvyn@gmail.com">E-posta Gönder</a><a className="btn secondary" href="tel:+905078959294">Hemen Ara</a></div></div><div className="contactCards"><div><Phone/><b>Telefon</b><p>0507 895 92 94<br/>0541 783 77 18</p></div><div><Mail/><b>E-posta</b><p>inforvyn@gmail.com</p></div><div><MapPin/><b>İstanbul Şube</b><p>Dudullu OSB, 6. Cd. No:35, 34776 Ümraniye / İstanbul</p></div><div><MapPin/><b>Çankırı Merkez Ofis</b><p>ÇANKIRI YAKINKENT OSB, 2. Cadde No:4, 18702 Çankırı</p></div></div></div>
      </section>
    </main>

    <div className="float"><a href="https://wa.me/905078959294" target="_blank">WhatsApp</a><a href="tel:+905417837718">Hemen Ara</a><a href="mailto:inforvyn@gmail.com">E-Posta</a></div>
    <footer><div className="container footerGrid"><div><Image src="/images/orvyn-logo.png" alt="ORVYN" width={220} height={75}/><p>Mühendislik. Teknoloji. Güvenlik.</p></div><div><b>Hizmetler</b><a href="#hizmetler">Yangın mühendisliği</a><a href="#hizmetler">Acil tahliye planı</a><a href="#karbon">Karbon yönetimi</a></div><div><b>Ürünler</b><a href="#urunler">Yangın tüpleri</a><a href="#urunler">Yangın dolapları</a><a href="#urunler">Sprinkler</a></div><div><b>İletişim</b><p>0507 895 92 94<br/>0541 783 77 18<br/>inforvyn@gmail.com</p></div></div></footer>
  </>;
}
