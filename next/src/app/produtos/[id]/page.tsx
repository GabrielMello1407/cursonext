type PageParams = {
  params: {
    id: string;
  };
};
type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  importado: number;
};

export default async function ProdutoPage({ params }: PageParams) {
  const response = await await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
  );
  const data = (await response.json()) as Produto;
  return (
    <main>
      <h1>Produtos</h1>
      <p>Rotas dinâmicas de produtos</p>
      <ul key={data.id}>
        <li>Nome:{data.nome}</li>
        <li>Descrição:{data.descricao}</li>
        <li>R${data.preco}</li>
        <li>Estoque:{data.estoque}</li>
        <li>Importado:{data.importado}</li>
      </ul>
    </main>
  );
}
