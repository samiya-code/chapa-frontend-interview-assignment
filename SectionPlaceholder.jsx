import React from 'react';

export default function SectionPlaceholder({ icon: Icon, label }) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '12px',
        padding: '48px 24px',
        textAlign: 'center',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        border: '1px solid #e5e7eb',
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #168037, #22a755)',
          color: 'white',
          margin: '0 auto 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {Icon ? <Icon size={32} /> : null}
      </div>
      <h2 style={{ margin: '0 0 8px', color: '#111827' }}>{label}</h2>
      <p style={{ color: '#6b7280', margin: 0 }}>
        The <strong>{label}</strong> section is ready for your content.
      </p>
    </div>
  );
}
