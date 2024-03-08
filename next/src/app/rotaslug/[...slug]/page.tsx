type PageParams = {
  params: {
    slug: string[];
  };
};
// Criação de rota dinâmica
export default async function CursosPage({ params }: PageParams) {
  return (
    <main>
      <h1>Cursos</h1>
      <h2>Rota dinâmica utilizando Slug</h2>
      {params.slug.join('/')}
    </main>
  );
}
