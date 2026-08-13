async function getPets() {
  try {
    const res = await fetch('https://db.biggames.io/database/pets', { cache: 'no-store' });
    const json = await res.json();
    return json.data?.slice(0, 6) ?? [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const pets = await getPets();

  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif', background: '#050814', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>PS99BET Starter</h1>
      <p style={{ color: '#9fb4ff', marginBottom: 24 }}>Cloudflare-ready demo with Coinflip and Pet API integration.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 16 }}>
        {pets.map((pet: any) => (
          <div key={pet.configName} style={{ background: '#0f1729', border: '1px solid #1f2d4f', borderRadius: 16, padding: 12, textAlign: 'center' }}>
            <img src={pet.icon} alt={pet.configName} style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 12 }} />
            <div style={{ marginTop: 8, fontSize: 12 }}>{pet.configName}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
