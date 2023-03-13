import { PrismaClient } from '@prisma/client';
import Layout from "components/Layout/Layout"

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const songs = await prisma.user.findMany();

  return {
    props: {
      songs
    }
  }
}

export default ({ songs }) => (
  <Layout>
    <ul>
      {songs.map((song) => (
        <li key={song.id}>{song.email} {song.name}</li>
      ))}
    </ul>
  </Layout>
)