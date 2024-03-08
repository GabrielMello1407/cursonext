type Produto = {
  id: number;
  nome: string;
};

export default async function ServerFetch() {
  const response = await fetch('https://api.origamid.online/produtos');
  const data = (await response.json()) as Produto[];
  return (
    <div>
      <h3>Server Fetch</h3>
      <p>Método mais usado Next14</p>
      <ul>
        {data.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
}
