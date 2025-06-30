export default function Page() {
  const kainos = [
    { medziaga: "Balta", kaina: 10.5 },
    { medziaga: "Pilka", kaina: 12.3 },
    { medziaga: "Ąžuolas", kaina: 25.0 }
  ];

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Baldų skaičiuoklė</h1>
      <ul>
        {kainos.map((e, i) => (
          <li key={i}>
            {e.medziaga} – {e.kaina} €/m²
          </li>
        ))}
      </ul>
    </main>
  );
}
