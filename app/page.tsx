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



const engineeringServices = [
  { icon: Shield, title: 'Yangın Risk Analizi', text: 'Tesis, proses, depolama alanı ve kaçış yolları üzerinden yangın risklerinin belirlenmesi; öncelikli aksiyonların raporlanması.', img:'/images/hero-fire-room.jpg' },
  { icon: Route, title: 'Acil Durum Tahliye Planı', text: 'Kaçış güzergâhı, toplanma alanı, acil çıkış yönlendirmeleri, levhalandırma ve yerleşim planı hazırlığı.', img:'/images/exit-sign.jpg' },
  { icon: Flame, title: 'Yangından Korunma Ekipmanları', text: 'Yangın söndürücü, dolap, hortum, lans, hidrant, acil aydınlatma ve yönlendirme ürünlerinin doğru seçimi.', img:'/images/product-extinguisher.jpg' },
  { icon: Clipboard, title: 'Periyodik Kontrol ve Denetim', text: 'Söndürme cihazları, dolaplar, algılama sistemleri, sprinkler ve acil aydınlatma ekipmanlarının kontrol planı.', img:'/images/alarm-panel.jpg' },
  { icon: Building, title: 'Yangın Güvenliği Projelendirme', text: 'Mimari yerleşime, kullanım sınıfına ve tesis risklerine göre yangın güvenliği proje yaklaşımı.', img:'/images/sprinkler-room.jpg' },
  { icon: Users, title: 'Eğitim ve Tatbikat Organizasyonu', text: 'Acil durum ekipleri, temel yangın bilgisi, tahliye pratiği ve saha farkındalığına yönelik eğitim planlaması.', img:'/images/office-orvyn.jpg' }
];

const standards = [
  ['Binaların Yangından Korunması Hakkında Yönetmelik','Türkiye’de yapıların yangın güvenliği, kaçış yolları, algılama, söndürme ve acil durum gereklilikleri için temel mevzuat.'],
  ['İş Sağlığı ve Güvenliği Mevzuatı','İşyerlerinde acil durum planı, yangınla mücadele ekipleri, tahliye organizasyonu ve çalışan bilgilendirmesi için dikkate alınan çerçeve.'],
  ['TS EN 671','Yangın dolapları, hortum sistemleri ve bina içi yangın müdahale ekipmanları için ilgili standart yaklaşımı.'],
  ['TS EN 3','Taşınabilir yangın söndürücülerin sınıflandırılması, performansı ve uygunluk değerlendirmelerinde dikkate alınan standart ailesi.'],
  ['TS EN 54','Yangın algılama ve alarm sistemlerinde dedektör, buton, siren, panel ve sistem bileşenleri için standart yaklaşımı.'],
  ['TS EN 12845','Sprinkler sistemlerinin tasarım, tesisat ve bakım yaklaşımında dikkate alınan Avrupa standardı.'],
  ['NFPA Standartları','Sprinkler, yangın pompaları, alarm sistemleri, özel söndürme ve endüstriyel riskler için uluslararası teknik referanslar.'],
  ['FM Global Data Sheets','Yüksek riskli endüstriyel tesisler, depolama, proses güvenliği ve sigorta odaklı yangın koruma kriterleri için teknik referanslar.'],
  ['ISO 14064 / ISO 14067','Kurumsal karbon ayak izi ve ürün karbon ayak izi hesaplamalarında sürdürülebilirlik tarafında dikkate alınan standartlar.']
];

const sectors = ['Fabrikalar','Organize Sanayi Bölgeleri','Depolar ve Lojistik Merkezleri','Kimya ve Plastik Sanayi','Gıda Üretim Tesisleri','Oteller','AVM ve Ticari Alanlar','Hastaneler','Okullar ve Kampüsler','Veri Merkezleri','Enerji Tesisleri','Ofis ve İdari Binalar'];

const process = ['İhtiyacın belirlenmesi','Yerinde keşif','Risk analizi','Proje / layout / levhalandırma','Standart kontrolü','Teklif sunumu','Uygulama / tedarik','Periyodik takip'];

export default function Page(){
  return <>
    <IntroSplash />
    <header className="topbar">
      <a className="logo" href="#top"><Image src="/images/orvyn-logo.png" alt="ORVYN Technology" width={245} height={82} priority /></a>
      <nav><a href="#top">Ana Sayfa</a><a href="#hizmetler">Mühendislik</a><a href="#standartlar">Standartlar</a><a href="#sistemler">Sistemler</a><a href="#urunler">Ürünler</a><a href="#karbon">Karbon</a><a href="#iletisim">İletişim</a></nav>
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
          <div className="sectionHead"><div><div className="eyebrow">Mühendislik Hizmetleri</div><h2>Yangın güvenliğini ürün değil, sistem olarak ele alıyoruz.</h2></div><p>Risk analizi, tahliye planı, ekipman seçimi, projelendirme ve periyodik kontrol süreçlerini standartlara uygun yaklaşımla kurguluyoruz.</p></div>
          <div className="serviceGrid">{engineeringServices.map(s=>{const Icon=s.icon; return <article className="service" key={s.title}><img src={s.img} alt={s.title}/><div><Icon/><h3>{s.title}</h3><p>{s.text}</p><a href="#teklif">Bu konuda görüşelim <ArrowRight size={15}/></a></div></article>})}</div>
        </div>
      </section>

      <section id="standartlar" className="section standards">
        <div className="container">
          <div className="sectionHead"><div><div className="eyebrow">Standartlar ve Mevzuat</div><h2>Ulusal mevzuat ve uluslararası teknik referanslara göre yaklaşım</h2></div><p>Belge veya sertifika iddiası yerine; proje ve danışmanlık süreçlerinde dikkate alınan yönetmelik, TS EN, NFPA, FM Global ve ISO referanslarını açıkça gösteriyoruz.</p></div>
          <div className="standardGrid">{standards.map(([title,text])=><article className="standard" key={title}><b>{title}</b><p>{text}</p><a href="#teklif">Uygunluk için görüşelim <ArrowRight size={14}/></a></article>)}</div>
          <div className="noteBox"><Shield/><span>Not: ORVYN, projelerinde tesisin kullanım amacı, risk sınıfı, proses yapısı ve yerel mevzuat şartlarını birlikte değerlendirerek çözüm önerisi sunar.</span></div>
        </div>
      </section>

      <section id="sistemler" className="section systems">
        <div className="container">
          <div className="sectionHead"><div><div className="eyebrow">Sistemler</div><h2>Ürün tedariğinin yanında sistem çözümü</h2></div><p>Yangın algılama, sprinkler, gazlı söndürme, acil aydınlatma ve yönlendirme sistemlerini bütünleşik şekilde ele alıyoruz.</p></div>
          <div className="valueGrid"><div><Flame/><b>Sprinkler ve Su Bazlı Sistemler</b><p>Sprinkler, yangın dolabı, hidrant ve yangın pompa sistemleri için teknik yaklaşım.</p></div><div><Clipboard/><b>Algılama ve Alarm</b><p>Adresli / konvansiyonel algılama, buton, siren, flaşör ve panel çözümleri.</p></div><div><Shield/><b>Gazlı Söndürme</b><p>FM200, Novec 1230, CO₂ ve özel hacim uygulamaları için değerlendirme.</p></div><div><Route/><b>Acil Yönlendirme</b><p>Tahliye rotaları, acil aydınlatma, yönlendirme levhaları ve layout çalışmaları.</p></div></div>
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
        <div className="container"><div className="sectionHead"><div><div className="eyebrow">Neden ORVYN?</div><h2>Abartılı rakamlar değil, güven veren yaklaşım</h2></div><p>Yeni marka kimliğimize uygun şekilde gerçekçi, teknik ve sürdürülebilir bir duruş.</p></div><div className="valueGrid"><div><Building/><b>Endüstriyel Odak</b><p>Fabrika, depo, OSB ve kurumsal tesisler için teknik yaklaşım.</p></div><div><Shield/><b>Mevzuata Uyum</b><p>Yangın güvenliği ve acil durum süreçlerinde doğru planlama.</p></div><div><Headset/><b>Hızlı İletişim</b><p>Telefon, WhatsApp ve e-posta ile hızlı dönüş.</p></div><div><Search/><b>Teknik Değerlendirme</b><p>İhtiyaca göre ürün, proje ve danışmanlık kurgusu.</p></div></div>
          <div className="sectorBox"><div className="sectionHead compact"><div><div className="eyebrow">Sektörler</div><h2>Hizmet verebildiğimiz tesis tipleri</h2></div></div><div className="sectors">{sectors.map(x=><span key={x}>{x}</span>)}</div></div>
        </div>
      </section>

      <section id="iletisim" className="section contact">
        <div className="container contactGrid"><div><div className="eyebrow">İletişim</div><h2>Projeniz için doğru çözümü birlikte planlayalım.</h2><p>Yangın güvenliği, ürün tedariği, acil tahliye planı veya karbon yönetimi için bize ulaşın.</p><div className="actions"><a className="btn primary" href="mailto:inforvyn@gmail.com">E-posta Gönder</a><a className="btn secondary" href="tel:+905078959294">Hemen Ara</a></div></div><div className="contactCards"><div><Phone/><b>Telefon</b><p>0507 895 92 94<br/>0541 783 77 18</p></div><div><Mail/><b>E-posta</b><p>inforvyn@gmail.com</p></div><div><MapPin/><b>İstanbul Şube</b><p>Dudullu OSB, 6. Cd. No:35, 34776 Ümraniye / İstanbul</p></div><div><MapPin/><b>Çankırı Merkez Ofis</b><p>ÇANKIRI YAKINKENT OSB, 2. Cadde No:4, 18702 Çankırı</p></div></div></div>
      </section>
    </main>

    <div className="float"><a href="https://wa.me/905078959294" target="_blank">WhatsApp</a><a href="tel:+905417837718">Hemen Ara</a><a href="mailto:inforvyn@gmail.com">E-Posta</a></div>
    <footer><div className="container footerGrid"><div><Image src="/images/orvyn-logo.png" alt="ORVYN" width={220} height={75}/><p>Mühendislik. Teknoloji. Güvenlik.</p></div><div><b>Hizmetler</b><a href="#hizmetler">Yangın risk analizi</a><a href="#hizmetler">Acil tahliye planı</a><a href="#hizmetler">Yangından korunma ekipmanları</a><a href="#karbon">Karbon yönetimi</a></div><div><b>Standartlar</b><a href="#standartlar">TS EN</a><a href="#standartlar">NFPA</a><a href="#standartlar">FM Global</a><a href="#standartlar">Yangın Yönetmeliği</a></div><div><b>Ürünler</b><a href="#urunler">Yangın tüpleri</a><a href="#urunler">Yangın dolapları</a><a href="#urunler">Sprinkler</a></div><div><b>İletişim</b><p>0507 895 92 94<br/>0541 783 77 18<br/>inforvyn@gmail.com</p></div></div></footer>
  </>;
}
