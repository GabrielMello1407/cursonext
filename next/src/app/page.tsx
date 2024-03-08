import Acesso from '@/components/acessso';
import ClientFetch from '@/components/client-fetch';
import ServerFetch from '@/components/server-fetch';
import Width from '@/components/width';

export default async function Home() {
  return (
    <main>
      <h1>Origamid Home</h1>
      <ServerFetch />
      <ClientFetch />
    </main>
  );
}
