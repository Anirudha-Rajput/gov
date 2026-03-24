import React, { useState, useMemo } from 'react';
import FilterBar from './components/FilterBar';
import SchemeCard from './components/SchemeCard';
import SchemeDetail from './components/SchemeDetail';
import EligibilityCheck from './components/EligibilityCheck';
import Chatbot from './components/Chatbot';
import SignIn from './components/SignIn';
import { schemes } from './data/schemes';
import { translations } from './data/translations';

function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'hi'
  const [view, setView] = useState('discovery'); // 'discovery' or 'eligibility'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSignIn, setShowSignIn] = useState(false);

  // Scroll listener for Navbar
  React.useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY && window.scrollY > 100) { // Scrolling down
          setShowNavbar(false); 
        } else { // Scrolling up
          setShowNavbar(true);  
        }
        setLastScrollY(window.scrollY); 
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const t = translations[lang];

  const filteredSchemes = useMemo(() => {
    return schemes.filter(scheme => {
      const title = scheme.title[lang].toLowerCase();
      const desc = scheme.description[lang].toLowerCase();
      const ministry = scheme.ministry[lang].toLowerCase();
      const query = searchQuery.toLowerCase();

      const matchesSearch = title.includes(query) || desc.includes(query) || ministry.includes(query);
      const matchesCategory = selectedCategory === 'All' || scheme.category.en === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, lang]);

  const handleSelectScheme = (scheme) => {
    setSelectedScheme(scheme);
    setView('discovery');
  };

  return (
    <div className="app" dir={lang === 'hi' ? 'ltr' : 'ltr'}>
      {/* Custom Header with view switching, language toggle and scroll animation */}
      <header 
        className={`glass-panel navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`} 
        style={{ margin: '1rem', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '1rem', zIndex: 100 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>🇮🇳</span>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={() => { setView('discovery'); setSelectedScheme(null); }}>
            <h1 style={{ fontSize: '1.25rem', lineHeight: 1 }}>GovtScheme</h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.helpText.includes('CSC') ? 'Empowering Citizens' : 'नागरिकों को सशक्त बनाना'}</p>
          </div>
        </div>
        
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <button 
            onClick={() => { setView('discovery'); setSelectedScheme(null); }}
            style={{ background: 'none', border: 'none', color: view === 'discovery' ? 'var(--text-main)' : 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}
          >
            {t.discovery}
          </button>
          <button 
            onClick={() => setView('eligibility')}
            style={{ background: 'none', border: 'none', color: view === 'eligibility' ? 'var(--text-main)' : 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}
          >
            {t.eligibility}
          </button>
          
          {/* Language Toggle */}
          <div style={{ display: 'flex', background: 'var(--glass)', borderRadius: '2rem', padding: '0.2rem', border: '1px solid var(--glass-border)', marginLeft: '1rem' }}>
            <button 
              onClick={() => setLang('en')}
              style={{ 
                padding: '0.3rem 0.75rem', 
                borderRadius: '2rem', 
                border: 'none', 
                background: lang === 'en' ? 'var(--primary)' : 'transparent',
                color: lang === 'en' ? 'white' : 'var(--text-muted)',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('hi')}
              style={{ 
                padding: '0.3rem 0.75rem', 
                borderRadius: '2rem', 
                border: 'none', 
                background: lang === 'hi' ? 'var(--primary)' : 'transparent',
                color: lang === 'hi' ? 'white' : 'var(--text-muted)',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              हिं
            </button>
          </div>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn-primary desktop-only" onClick={() => setShowSignIn(true)} style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
            {t.signIn}
          </button>
        </div>
        {/* Mobile menu could go here */}
      </header>
      
      <main className="container" style={{ paddingTop: '3rem' }}>
        {view === 'discovery' ? (
          !selectedScheme ? (
            <>
              <div className="animate-fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(90deg, #F8FAFC, #94A3B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {t.heroTitle}
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                  {t.heroSubtitle}
                </p>
              </div>

              <FilterBar 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                lang={lang}
              />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                {filteredSchemes.length > 0 ? (
                  filteredSchemes.map(scheme => (
                    <SchemeCard key={scheme.id} scheme={scheme} onClick={setSelectedScheme} lang={lang} />
                  ))
                ) : (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '5rem', background: 'var(--glass)', borderRadius: '2rem', border: '1px dashed var(--glass-border)' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{t.noSchemes}</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <SchemeDetail scheme={selectedScheme} onBack={() => setSelectedScheme(null)} lang={lang} />
          )
        ) : (
          <EligibilityCheck onSelectScheme={handleSelectScheme} lang={lang} />
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p>{t.footerTitle}</p>
        <p style={{ marginTop: '0.5rem' }}>{t.footerSubtitle}</p>
      </footer>

      <Chatbot lang={lang} />

      {/* Sign In Modal */}
      {showSignIn && <SignIn lang={lang} onClose={() => setShowSignIn(false)} />}
    </div>
  );
}

export default App;
