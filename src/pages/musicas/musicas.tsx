import "./Musicas.css";

const Musicas = () => {
  const musicas = [
    {
      titulo: "Volta e Meia",
      artista: "O Terno",
      link: "https://youtu.be/xi4eydIUDgM?si=FWDNd6HPgbEeD2yY", // Link corrigido
      descricao:
        "Essa música tem uma melodia suave e nostálgica, perfeita para momentos de introspecção. As letras profundas me fazem refletir sobre o tempo e as mudanças da vida.",
    },
    {
      titulo: "Tag, You're It",
      artista: "Melanie Martinez",
      link: "https://youtu.be/BEYHJFIONvU?si=S_knpDJWGFEdUinC", // Link corrigido
      descricao:
        "Com uma produção única e sombria, essa música me transporta para um universo cinematográfico. Melanie sempre consegue contar histórias de forma cativante.",
    },
    {
      titulo: "Recomeçar",
      artista: "Tim Bernardes",
      link: "https://youtu.be/mfRj60-MpRU?si=j2Bs0sywx2oSLt1s", // Link corrigido
      descricao:
        "Essa canção é um abraço para a alma. Fala sobre ciclos, recomeços e a beleza de seguir em frente mesmo diante das dificuldades.",
    },
    {
      titulo: "Ainda Bem",
      artista: "Marisa Monte",
      link: "https://youtu.be/t7M89YJAPhM?si=eWtpNu3vTtbj95Rn", // Link corrigido
      descricao:
        "Uma das músicas mais delicadas e apaixonantes que já ouvi. Marisa Monte transmite uma doçura única com sua voz e melodia envolvente.",
    },
    {
      titulo: "Telepatía",
      artista: "Kali Uchis",
      link: "https://youtu.be/t7M89YJAPhM?si=eWtpNu3vTtbj95Rn://youtu.be/c4wsxp24xGo?si=nBXfcvY0Be3IejyP", // Link corrigido
      descricao:
        "Com uma vibe envolvente e misteriosa, essa música me faz viajar. A mistura de inglês e espanhol na letra é simplesmente hipnotizante.",
    },
  ];

  return (
    <div className="musicas-container">
      <h1>🎶 Minhas Músicas Favoritas</h1>
      <p className="intro">
        A música sempre fez parte da minha vida. Cada canção carrega uma lembrança, uma emoção ou um sonho. Aqui estão
        algumas das músicas que mais me inspiram e me acompanham no dia a dia. 💖
      </p>

      <div className="musicas-lista">
        {musicas.map((musica, index) => (
          <div key={index} className="musica-card">
            <h2>{musica.titulo}</h2>
            <p className="artista">Por {musica.artista}</p>
            <p className="descricao">{musica.descricao}</p>
            <a href={musica.link} target="_blank" rel="noopener noreferrer" className="link-musica">
              ▶️ Ouça agora
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Musicas;
