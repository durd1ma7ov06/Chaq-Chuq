import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaPhoneAlt, FaShoppingBag, FaStar, FaChevronRight, FaBars, FaTimes } from 'react-icons/fa';

const products = [
  { id: 1, name: "Tuzli Qora Pista", image: "/image/qora_tuzli.JPG", desc: "Maxsus usulda tuzlab qovurilgan, ishtahaochar va mazali qora pista." },
  { id: 2, name: "Tuzsiz Qora Pista", image: "/image/qora_tuzsiz.JPG", desc: "Tabiiy, tuzsiz va sof holida qovurilgan, sog'lom tanlov — qora pista." },
  { id: 3, name: "Chaq-Chuq Semichkalari", image: "/image/semichka.JPG", desc: "Katta o'lchamli, to'yimli va ajoyib ta'mga ega oq qarsildoq semichkalar." },
  { id: 4, name: "Keshyu", image: "/image/keshyu.JPG", desc: "Mayin, shirali va foydali moddalar bilan to'la premium keshyu yong'oqlari." },
  { id: 5, name: "O'rik Mag'izi", image: "/image/orik.JPG", desc: "Tabiiy va foydali, yumshoq ta'mli o'rik mag'izlari." },
  { id: 6, name: "Pistashki", image: "/image/pistashki.JPG", desc: "Eng sifatli, yirik va mazali tanlangan pistashkalar." },
  { id: 7, name: "Chaq-Chuq Qurti (6-lik)", image: "/image/qurt6.JPG", desc: "Oilaviy to'plam. 6 donali an'anaviy o'zbek qurti." },
  { id: 8, name: "Chaq-Chuq Qurti (1-lik)", image: "/image/qurt1.JPG", desc: "Yakka to'plam. Haqiqiy o'zbekona ta'mdagi sifatli qurt." },
  { id: 9, name: "Premium Bodom", image: "/image/bodom_almonds.png", desc: "Eng sara, yirik va qarsildoq shirin bodomlar." },
  { id: 10, name: "Makadamiya Yong'og'i", image: "/image/product_macadamia_both.png", desc: "Sariyog' ta'mli, mayin va juda foydali, qarsildoq makadamiya yong'oqlari." },
];

const shelves = [
  { id: 1, name: "Premium Dispenser Polka", image: "/image/polka1.jpg", desc: "Bizning do'konlar uchun maxsus tayyorlangan, qulay dispenserli va brendlangan premium polka." }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
          <a href="#polka">Polka</a>
          <a href="#delivery">Yetkazib Berish</a>
          <a href="#contact">Bog'lanish</a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-drawer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <a href="#home" onClick={closeMenu}>Asosiy</a>
              <a href="#products" onClick={closeMenu}>Mahsulotlar</a>
              <a href="#polka" onClick={closeMenu}>Polka</a>
              <a href="#delivery" onClick={closeMenu}>Yetkazib Berish</a>
              <a href="#contact" onClick={closeMenu}>Bog'lanish</a>
            </motion.div>
          )}
        </AnimatePresence>
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

        <motion.div 
          className="hero-brand-overlay"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img src="/image/logo.png" alt="Chaq-Chuq Logo" className="hero-brand-logo" />
          <h2 className="hero-brand-text">Chaq-Chuq Xorazm</h2>
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
              <a href="#contact" style={{ color: 'var(--accent-color)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', marginTop: 'auto' }}>
                Buyurtma Berish <FaChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Polka (Shelf) Section */}
      <section id="polka" className="section container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2>Bizning Polkalarmiz</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Hamkorlarimiz va do'konlar uchun brendlangan maxsus savdo javonlari hamda dispenser polkalari.
          </p>
        </motion.div>

        <motion.div 
          className="product-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {shelves.map((shelf) => (
            <motion.div key={shelf.id} className="glass-panel" variants={fadeInUp}>
              <div className="product-img-wrapper" style={{ background: '#fff', height: '340px', padding: '1rem' }}>
                <img src={shelf.image} alt={shelf.name} className="product-img" style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="product-title">{shelf.name}</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>{shelf.desc}</p>
              <a href="#contact" style={{ color: 'var(--accent-color)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', marginTop: 'auto' }}>
                Polka Buyurtma Qilish <FaChevronRight size={16} />
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
