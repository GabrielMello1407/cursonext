import { cookies } from 'next/headers';
import Link from 'next/link';

type Conta = {
  autorizado: boolean;
  usuario: string;
};

export default async function Menu() {
  let conta = {
    autorizado: false,
    usuario: '',
  };
  // recebendo o token para redirecionar para a rota perfil
  const token = cookies().get('token')?.value;
  const response = await fetch('https://api.origamid.online/conta/perfil', {
    headers: {
      Authorization: 'Beares' + token,
    },
  });
  if (response.ok) {
    conta = (await response.json()) as Conta;
  }

  return (
    <ul className="menu">
      <li>
        <Link href="/" prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about#enterprise" scroll={false} prefetch={true}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/contact" prefetch={true}>
          Contato
        </Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
      <li>
        {conta.autorizado ? conta.usuario : <Link href="/login">Login</Link>}
      </li>
    </ul>
  );
}
