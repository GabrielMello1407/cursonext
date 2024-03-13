import { getCursos } from '@/app/api/cursos/route';
import Link from 'next/link';

export default async function CursosPage() {
  const cursos = await getCursos();
  return (
    <main>
      <h1>Tarefa referente a rotas dinâmicas</h1>
      <h3>Tasks feitas:</h3>
      {/* <p>- Utilize a API: https://api.origamid.online/cursos</p>
      <p>- Crie uma rota chamada cursos</p>
      <p>- Crie rotas dinâmicas para os cursos, exemplo: /cursos/html</p>
      <p>
        - Crie rotas dinâmicas para as aulas, exemplo:
        /cursos/html/introducao-ao-html
      </p>
      <p>- Na página "Cursos", exiba uma lista com todos os cursos</p>
      <p>
        - Ao clicar em um curso, mostre uma página com as informações deste
        curso
      </p>
      <p>- Na página do curso, exiba uma lista com as aulas do curso</p>
      <p>
        - Ao clicar em uma aula, mostre uma página com as informações da aula
      </p>
      <p>
        - Esta API funciona via slug, exemplo:
        -https://api.origamid.online/cursos/html
        -https://api.origamid.online/cursos/css
        -https://api.origamid.online/cursos/html/introducao-ao-html
        -https://api.origamid.online/cursos/html/incorporando-midia
      </p>
      <p>
        - Organize todos os fetchs possíveis em funções dentro de api/cursos.ts.
      </p> */}
      <h2>Cursos</h2>
      <ul>
        <li>
          {cursos.map((curso) => (
            <li key={curso.id}>
              <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
            </li>
          ))}
        </li>
      </ul>
    </main>
  );
}
