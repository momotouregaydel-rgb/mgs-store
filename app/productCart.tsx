"use client";

export default function ProductCard({ name, price, description }: { name: string, price: string, description: string }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '16px', 
      width: '250px', 
      margin: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{name}</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>{description}</p>
      <p style={{ fontSize: '16px', color: 'green', marginTop: '10px' }}>{price}</p>
      <button style={{ 
        marginTop: '15px', 
        padding: '8px 12px', 
        backgroundColor: '#0070f3', 
        color: '#fff', 
        border: 'none', 
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Voir détails
      </button>
    </div>
  );
}