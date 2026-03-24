import React from 'react';
import { translations, categoriesTrans } from '../data/translations';

const FilterBar = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, lang }) => {
  const categories = categoriesTrans[lang];
  const t = translations[lang];

  return (
    <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="glass-panel" style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <div style={{ paddingLeft: '1rem', color: 'var(--text-muted)' }}>
          🔍
        </div>
        <input 
          type="text" 
          placeholder={t.searchPlaceholder} 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ 
            background: 'transparent', 
            border: 'none', 
            color: 'var(--text-main)', 
            padding: '0.75rem 0', 
            width: '100%', 
            outline: 'none', 
            fontSize: '1rem' 
          }}
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
        {categories.map((cat, idx) => {
          // Use the English category name for logic, but display the translated version
          const catKey = categoriesTrans['en'][idx];
          return (
            <button
              key={catKey}
              onClick={() => setSelectedCategory(catKey)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '2rem',
                border: '1px solid var(--glass-border)',
                background: selectedCategory === catKey ? 'var(--primary)' : 'var(--glass)',
                color: selectedCategory === catKey ? 'white' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'var(--transition)',
                fontSize: '0.85rem',
                fontWeight: 500
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
