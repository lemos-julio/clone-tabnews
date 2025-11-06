const date = new Date();
const getDate = date.toLocaleDateString("pt-BR");

function Home() {
  return <h1> Site Rodando na vercel online, na data: {getDate}</h1>;
}

export default Home;
