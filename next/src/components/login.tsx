'use client';
export default function Login() {
  // funcão de captar dados form
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    // Mandando a resposta para a API
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) window.location.href = '/';
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usúario</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="password">Senha</label>
      <input type="password" name="password" id="password" />
      <button>Entrar</button>
    </form>
  );
}
