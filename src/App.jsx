import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaPhoneAlt, FaShoppingBag, FaStar, FaChevronRight } from 'react-icons/fa';

const products = [
  { id: 1, name: "Premium Bodom", image: "/image/bodom_almonds.png", desc: "Eng sara, yirik va qarsildoq shirin bodomlar." },
  { id: 2, name: "Makadamiya Yong'og'i", image: "/image/product_macadamia_both.png", desc: "Sariyog' ta'mli, mayin va juda foydali, qarsildoq makadamiya yong'oqlari (archilgan va qobig'ida)." },
  { id: 3, name: "Oq Xandon Pista", image: "/image/oq_pista_v2.png", desc: "Yupqa po'stli, oqartirilgan va to'liq ochilgan premium xandon pista." },
  { id: 4, name: "Tuzli Qora Pista", image: "/image/qora_pista_v2.png", desc: "Maxsus usulda tuzlab qovurilgan, ishtahaochar va mazali qora pista." },
  { id: 5, name: "Tuzsiz Qora Pista", image: "/image/tuzsiz_qora_pista.png", desc: "Tabiiy, tuzsiz va sof holida qovurilgan, sog'lom tanlov — qora pista." },
  { id: 6, name: "Chaq-Chuq Semichkalari", image: "/image/oq_semichka.png", desc: "Katta o'lchamli, to'yimli va ajoyib ta'mga ega oq qarsildoq semichkalar." },
  { id: 7, name: "Chaq-Chuq Qurti", image: "/image/uzbek_qurt.png", desc: "Haqiqiy o'zbekona ta'm. Chaq-chuq mahsulotlari bilan yeyish uchun maxsus qurtlar." }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const nutImages = [
  "/image/bg_macadamia.png",
  "/image/bg_macadamia_shell.png",
  "/image/bg_cashew.png",
  "/image/bg_almond.png",
  "/image/bg_sunflower.png"
];

function FloatingParticles() {
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    image: nutImages[i % nutImages.length],
    size: Math.random() * 60 + 30, 
    left: Math.random() * 100, 
    duration: Math.random() * 15 + 10, 
    delay: Math.random() * -20, 
    rotateDuration: Math.random() * 10 + 5,
    drift: (Math.random() - 0.5) * 15,
  }));

  return (
    <div className="floating-nuts-container">
      {particles.map((p) => (
        <motion.img
          key={p.id}
          src={p.image}
          className="floating-nut"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
          }}
          animate={{
            y: ['-20vh', '120vh'],
            x: [0, `${p.drift}vw`],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
            x: { duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay, repeatType: "reverse" },
            rotate: { duration: p.rotateDuration, repeat: Infinity, ease: "linear" }
          }}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/image/logo.png" alt="Chaq-Chuq Logo" style={{ height: '60px' }} />
        </div>
        <div className="nav-links">
          <a href="#home">Asosiy</a>
          <a href="#products">Mahsulotlar</a>
          <a href="#delivery">Yetkazib Berish</a>
          <a href="#contact">Bog'lanish</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero container">
        
        <FloatingParticles />

        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--accent-color)', fontWeight: '600' }}>
            <FaStar size={20} /> Oliy Sifat Kafolati
          </motion.div>
          <motion.h1 variants={fadeInUp}>
            Har Bir Qadamda <br/>Tabiat Quvvati
          </motion.h1>
          <motion.p variants={fadeInUp} style={{ marginBottom: '2.5rem' }}>
            Eng sara quruq mevalar va yong'oqlarni kashf eting. Sog'lom turmush tarzingiz uchun beqiyos ta'm, yuqori sifat va toza mahsulotlar.
          </motion.p>
          <motion.div variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#products" className="btn-primary">
              <FaShoppingBag size={20} />
              Mahsulotlarni Ko'rish
            </a>
            <a href="https://instagram.com/chaq_chuq_xorazm" target="_blank" rel="noreferrer" className="instagram-badge">
              <FaInstagram size={22} />
              <span>@chaq_chuq_xorazm</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="section container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2>Bizning Mahsulotlar</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Faqat siz uchun saralangan, eng yuqori sifat va tengsiz ta'mga ega chaq-chuq mahsulotlarimiz bilan tanishing.
          </p>
        </motion.div>

        <motion.div 
          className="product-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {products.map((product) => (
            <motion.div key={product.id} className="glass-panel" variants={fadeInUp}>
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
              <h3 className="product-title">{product.name}</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>{product.desc}</p>
              <a href="#contact" style={{ color: 'var(--accent-color)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                Buyurtma Berish <FaChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="section container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          <motion.div 
            style={{ flex: '1 1 400px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 style={{ textAlign: 'left', marginBottom: '1rem' }}>Xorazm Bo'ylab Yetkazib Berish</h2>
            <p style={{ marginBottom: '2rem' }}>
              Xorazm viloyatining barcha tumanlariga tez va sifatli yetkazib berish xizmatimiz mavjud. Maxsus jihozlangan transportlarda mahsulotlaringiz eng yangi holatida uyingizgacha yetib boradi.
            </p>
            <ul style={{ listStyle: 'none', lineHeight: '2.5', color: 'var(--text-color)', fontWeight: '600', fontSize: '1.1rem' }}>
              <li><FaChevronRight size={14} color="var(--accent-color)"/> Urganch shahri va tumani</li>
              <li><FaChevronRight size={14} color="var(--accent-color)"/> Xiva shahri va tumani</li>
              <li><FaChevronRight size={14} color="var(--accent-color)"/> Gurlan, Xonqa, Shovot</li>
              <li><FaChevronRight size={14} color="var(--accent-color)"/> Yangiariq, Yangibozor, Qo'shko'pir</li>
              <li><FaChevronRight size={14} color="var(--accent-color)"/> Hazorasp va Tuproqqal'a</li>
            </ul>
          </motion.div>
          <motion.div 
            style={{ flex: '1 1 400px', textAlign: 'center' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src="/image/delivery_map.png" alt="Xorazm Xaritasi" style={{ width: '100%', maxWidth: '500px', borderRadius: '24px' }} />
          </motion.div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="section footer">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 style={{ marginBottom: '4rem' }}>Biz Bilan Bog'laning</h2>
            
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhoneAlt size={28} />
                </div>
                <div className="contact-text">
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Qo'ng'iroq Qiling</div>
                  <div><a href="tel:+998988000313">+998-98-800-03-13</a></div>
                  <div style={{ marginTop: '0.5rem' }}><a href="tel:+998888000313">+998-88-800-03-13</a></div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaInstagram size={28} />
                </div>
                <div className="contact-text">
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Instagram Sahifamiz</div>
                  <div><a href="https://instagram.com/chaq_chuq_xorazm" target="_blank" rel="noreferrer">@chaq_chuq_xorazm</a></div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 'normal' }}>Eng so'nggi yangiliklar</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="bottom-bar">
          <p style={{ fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Chaq-Chuq. Barcha huquqlar himoyalangan. Premium quruq mevalar va yong'oqlar.</p>
        </div>
      </section>
    </>
  );
}

export default App;
