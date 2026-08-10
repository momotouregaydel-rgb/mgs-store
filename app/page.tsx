"use client";

export default function HomePage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Bienvenue sur MGS STORE</h1>
      <br />
      {/* C'est ce lien qui te permettra de naviguer vers tes produits */}
      <a href="/products" style={{ fontSize: '20px', color: 'blue', textDecoration: 'underline' }}>
        Voir nos produits
      </a>
    </div>
  );
}