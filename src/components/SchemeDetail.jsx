import React from 'react';
import { translations } from '../data/translations';

const SchemeDetail = ({ scheme, onBack, lang }) => {
  const t = translations[lang];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      <button 
        onClick={onBack}
        style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 600 }}
      >
        {t.backToDiscovery}
      </button>

      <div className="glass-panel" style={{ padding: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge category-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>{scheme.category[lang]}</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{scheme.title[lang]}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{scheme.ministry[lang]}</p>
          </div>
          <a href={scheme.applicationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
            {t.applyNow}
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>{t.benefits}</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{scheme.description[lang]}</p>
            
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>{t.benefits}</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {scheme.benefits[lang].map((benefit, idx) => (
                <li key={idx} style={{ padding: '0.75rem 0', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--secondary)' }}>✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>{t.eligibilityCriteria}</h3>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              {scheme.eligibility[lang].map((crit, idx) => (
                <li key={idx} style={{ padding: '0.5rem 0', display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--primary)' }}>•</span>
                  <span>{crit}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ marginBottom: '1rem' }}>{t.requiredDocuments}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {scheme.documents[lang].map((doc, idx) => (
                <span key={idx} style={{ background: 'var(--glass)', padding: '0.4rem 0.8rem', borderRadius: '0.5rem', fontSize: '0.85rem', border: '1px solid var(--glass-border)' }}>
                  {doc}
                </span>
              ))}
            </div>
            
            <div style={{ marginTop: '2.5rem', background: 'rgba(79, 70, 229, 0.1)', padding: '1.5rem', borderRadius: '1rem', border: '1px dashed var(--primary)' }}>
              <p style={{ fontSize: '0.9rem', color: '#818CF8', fontWeight: 600, marginBottom: '0.5rem' }}>{t.needHelp}</p>
              <p style={{ fontSize: '0.85rem' }}>{t.helpText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetail;
