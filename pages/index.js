const date = new Date()
const getDate =  date.toLocaleDateString('pt-BR')

function Home(){
    return <h1> Site Rodando na vercel {getDate}</h1>
}

export default Home;