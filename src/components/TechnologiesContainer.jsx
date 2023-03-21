import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "HTML é uma abreviação de Hypertext Markup Language, ou seja, Linguagem de Marcação de Hipertexto. Resumindo, o HTML é uma linguagem usada para a publicação de conteúdo (texto, imagens, vídeos, áudio etc.) na web."},
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "CSS (Folhas de Estilo em Cascata) permite a você criar páginas web agradáveis. É uma linguagem para especificar como documentos são apresentados aos usuários, como eles são estilizados, dispostos etc." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "O JavaScript, como o próprio nome sugere, é uma linguagem de scripting. Uma linguagem de scripting é comumente definida como uma linguagem de programação que permite ao programador controlar uma ou mais aplicações de terceiros. No caso do JavaScript, podemos controlar alguns comportamentos dos navegadores através de trechos de código que são enviados na página HTML." },
  { id: "react", name: "React", icon: <DiReact />, description: "React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface). Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros." },
  { id: "react-native", name: "React Native", icon: <DiReact />, description: "React Native (também conhecido como RN) é uma estrutura de aplicativo móvel popular, baseada na linguagem JavaScript, que permite criar aplicativos móveis renderizados nativamente para iOS e Android. A estrutura permite criar um aplicativo para várias plataformas usando a mesma base de código." },
  { id: "sass", name: "SASS", icon: <DiSass />, description: "O SASS é uma linguagem de extensão do CSS. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas que iremos comentar. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente." },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
