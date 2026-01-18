import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const services = [
  {
    title: "Mergers & Acquisitions",
    description: "Strategic counsel on complex transactions, from deal origination through execution and integration."
  },
  {
    title: "Special Purpose Vehicles",
    description: "Structuring and advisory for SPVs across diverse asset classes and jurisdictions."
  },
  {
    title: "Special Situations Financing",
    description: "Creative capital solutions for unique opportunities requiring bespoke structuring."
  },
  {
    title: "Technology R&D Advisory",
    description: "Strategic guidance at the intersection of emerging technology, blockchain, and artificial intelligence."
  },
  {
    title: "Blockchain & Web3 Development",
    description: "Development expertise across web3 infrastructure including tokenization, protocol design, tokenomics, privacy solutions, and decentralized finance."
  },
  {
    title: "Startup Advisory",
    description: "End-to-end guidance for high-growth ventures, from formation and fundraising to scaling and strategic exits."
  },
  {
    title: "Primary, Secondary, OTC Transactions",
    description: "Access to unique limited partnerships, deep liquidity networks and strategic advisory on potential transactions across alternative asset classes."
  },
  {
    title: "Strategic Advisory",
    description: "Comprehensive counsel across finance, digital assets, and transformative technologies."
  }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_694459a3524715954e35fba9/eba551323_IMG_3656.png" 
              alt="von Reichardt" 
              className="h-6 lg:h-8 w-auto"
            />
            <div className="hidden md:flex items-center gap-12">
              <button onClick={() => scrollToSection('services')} className="text-sm tracking-wide text-gray-600 hover:text-[#1a1054] transition-colors">Services</button>
              <button onClick={() => scrollToSection('philosophy')} className="text-sm tracking-wide text-gray-600 hover:text-[#1a1054] transition-colors">Philosophy</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm tracking-wide text-gray-600 hover:text-[#1a1054] transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" 
        />
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.03 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute top-0 right-0 w-1/2 h-full"
        >
          <div className="absolute inset-0 bg-[#1a1054]" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        </motion.div>
        
        {/* Floating accent elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#c9a962] blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[#1a1054] blur-3xl"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInScale} className="mb-8">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block text-xs tracking-[0.3em] text-[#c9a962] uppercase font-medium"
              >
                Strategic Advisory
              </motion.span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1a1054] leading-[1.1] tracking-tight mb-8"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="block"
              >
                Navigating complexity
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="font-normal block"
              >
                with precision
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mb-12"
            >
              We provide discerning counsel to select clients across mergers & acquisitions, 
              structured finance, and emerging technology ventures.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <button 
                onClick={() => scrollToSection('services')}
                className="group inline-flex items-center gap-3 text-sm tracking-wide text-[#1a1054] hover:text-[#c9a962] transition-colors"
              >
                <span>Explore our expertise</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-[#1a1054] transition-colors">
            <ChevronDown className="w-6 h-6" />
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-20 lg:mb-28"
          >
            <motion.span variants={fadeInUp} className="inline-block text-xs tracking-[0.3em] text-[#c9a962] uppercase font-medium mb-6">
              Our Expertise
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1054] tracking-tight">
              Areas of Practice
            </motion.h2>
          </motion.div>

          <div className="grid gap-0 divide-y divide-gray-100">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="group py-12 lg:py-16"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-xs text-gray-300 font-light">0{index + 1}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-xl lg:text-2xl font-normal text-[#1a1054] group-hover:text-[#c9a962] transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-gray-600 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24"
          >
            <div>
              <motion.span variants={fadeInUp} className="inline-block text-xs tracking-[0.3em] text-[#c9a962] uppercase font-medium mb-6">
                Our Philosophy
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1054] tracking-tight leading-tight">
                Principled counsel<br />for consequential decisions
              </motion.h2>
            </div>
            
            <div className="lg:pt-16">
              <motion.p variants={fadeInUp} className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                At von Reichardt, we believe that exceptional advisory requires both 
                intellectual rigor and creative vision. We serve a select clientele, 
                ensuring the depth of attention each engagement demands.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                Our practice spans traditional finance and frontier technologies—blockchain 
                infrastructure, artificial intelligence, and the emergent systems reshaping 
                global commerce.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 font-light leading-relaxed">
                We approach each matter with discretion, independence, and an unwavering 
                commitment to our clients' long-term interests.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.span variants={fadeInUp} className="inline-block text-xs tracking-[0.3em] text-[#c9a962] uppercase font-medium mb-6">
              Contact
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1054] tracking-tight mb-8">
              Begin a conversation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 font-light leading-relaxed mb-12">
              For inquiries regarding our advisory services, please reach out directly. 
              We selectively engage with principals and their representatives on matters 
              aligned with our areas of practice.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="space-y-6 mb-12">
              <a 
                href="mailto:contact@vonreichardt.com" 
                className="group inline-flex items-center gap-3 text-[#1a1054] hover:text-[#c9a962] transition-colors"
              >
                <span className="text-lg tracking-wide">contact@vonreichardt.com</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="pt-2">
                <a 
                  href="https://t.me/vonreichardt" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-[#1a1054] hover:text-[#c9a962] transition-colors"
                >
                  <span className="text-lg tracking-wide">@vonreichardt</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-6 border-t border-gray-100">
              <p className="text-xs tracking-[0.3em] text-[#c9a962] uppercase font-medium mb-4">Locations</p>
              <div className="flex flex-wrap gap-8 text-gray-600">
                <span className="text-sm tracking-wide">San Juan</span>
                <span className="text-sm tracking-wide">New York City</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_694459a3524715954e35fba9/eba551323_IMG_3656.png" 
              alt="von Reichardt" 
              className="h-5 w-auto opacity-60"
            />
            <p className="text-xs text-gray-400 tracking-wide">
              © {new Date().getFullYear()} von Reichardt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}