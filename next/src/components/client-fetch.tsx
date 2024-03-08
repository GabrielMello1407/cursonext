'use client';
type Produto = {
  id: number;
  nome: string;
};

import React from 'react';

export default function ClientFetch() {
  const [data, setData] = React.useState<Produto[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.origamid.online/produtos');
      const json = (await response.json()) as Produto[];
      setData(json);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h3>Client Fetch</h3>
      <p>Usado apenas para casos mais específicos</p>
      <ul>
        {data.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
}
