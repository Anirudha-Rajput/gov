import React from 'react';
import { translations } from '../data/translations';

const SchemeCard = ({ scheme, onClick, lang }) => {
  const t = translations[lang];

  return (
    <div className="glass-panel card animate-fade-in" style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => onClick(scheme)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span className="tag" style={{ background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)' }}>{scheme.category[lang]}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Launched 2015</span>
      </div>
      
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>{scheme.title[lang]}</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineClamp: 3, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {scheme.description[lang]}
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', marginTop: 'auto' }}>
        <div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Ministry</p>
          <p style={{ fontSize: '0.8rem', fontWeight: 600 }}>{scheme.ministry[lang]}</p>
        </div>
        <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
          {translations[lang].details} →
        </div>
      </div>
    </div>
  );
};

export default SchemeCard;
