import React, { useState } from 'react';
import { translations, occupationsTrans, incomeTrans } from '../data/translations';
import { schemes } from '../data/schemes';

const EligibilityCheck = ({ onSelectScheme, lang }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    occupation: '',
    income: '',
    category: '',
    gender: ''
  });
  const [results, setResults] = useState([]);
  const t = translations[lang];

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Simple matching logic using English keys
      const matched = schemes.filter(s => {
        const descMatch = s.description.en.toLowerCase().includes(formData.occupation.toLowerCase()) || 
                          s.eligibility.en.some(e => e.toLowerCase().includes(formData.occupation.toLowerCase()));
        return descMatch;
      });
      setResults(matched);
      setStep(3);
    }
  };

  const reset = () => {
    setStep(0);
    setFormData({ occupation: '', income: '', category: '', gender: '' });
    setResults([]);
  };

  return (
    <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '2rem auto' }}>
      {step === 0 && (
        <div className="animate-fade-in text-center">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t.findYourMatch}</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{t.checkerSubtitle}</p>
          <button className="btn-primary" onClick={() => setStep(1)}>{t.startChecker}</button>
        </div>
      )}

      {step === 1 && (
        <div className="animate-fade-in">
          <h3 style={{ marginBottom: '1.5rem' }}>{t.step1}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {occupationsTrans[lang].map((occ, idx) => {
              const occKey = occupationsTrans['en'][idx];
              return (
                <button 
                  key={occKey}
                  className="glass-card hover-scale" 
                  style={{ 
                    padding: '1.25rem', 
                    textAlign: 'center', 
                    background: formData.occupation === occKey ? 'var(--primary)' : 'var(--glass)',
                    color: formData.occupation === occKey ? 'white' : 'var(--text-main)',
                    border: formData.occupation === occKey ? 'none' : '1px solid var(--glass-border)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: "'Outfit', sans-serif",
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setFormData({...formData, occupation: occKey})}
                >
                  {occ}
                </button>
              );
            })}
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'right' }}>
            <button className="btn-primary" disabled={!formData.occupation} onClick={handleNext}>{t.next}</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in">
          <h3 style={{ marginBottom: '1.5rem' }}>{t.step2}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {incomeTrans[lang].map((inc, idx) => {
              const incKey = incomeTrans['en'][idx];
              return (
                <label key={incKey} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '0.75rem', cursor: 'pointer', background: formData.income === incKey ? 'rgba(79, 70, 229, 0.1)' : 'transparent' }}>
                  <input type="radio" name="income" value={incKey} checked={formData.income === incKey} onChange={(e) => setFormData({...formData, income: e.target.value})} />
                  {inc}
                </label>
              );
            })}
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
            <button style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setStep(1)}>{t.back}</button>
            <button className="btn-primary" disabled={!formData.income} onClick={handleNext}>{t.finish}</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in">
          <h3 style={{ marginBottom: '1.5rem' }}>{t.recommendedSchemes}</h3>
          {results.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {results.map(s => (
                <div key={s.id} className="glass-card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontWeight: 600 }}>{s.title[lang]}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{s.category[lang]}</p>
                  </div>
                  <button style={{ color: 'var(--primary)', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }} onClick={() => onSelectScheme(s)}>{t.details} →</button>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>{t.noMatch}</p>
          )}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }} onClick={reset}>{t.restart}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityCheck;
