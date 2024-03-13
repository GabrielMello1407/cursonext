import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  // puxando valor do form request
  const body = (await request.json()) as { username: string; password: string };

  // declaração de fetch api
  const response = await fetch(
    'https://api.origamid.online/conta/login',
    //declarando os métodos da aplicação da api
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: body.username,
        password: body.password,
      }),
    },
  );
  // validando se a resposta está correta
  if (!response.ok) {
    return Response.json(
      { autorizado: false, erro: 'Dados incorretos' },
      { status: 401 },
    );
  }
  // chamando os dados
  const data = await response.json();

  // declarando os cookies do token
  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
  });

  // retornando os dados
  return Response.json({ autorizado: true });
}
