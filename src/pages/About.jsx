import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>Sobre Nós</h1>
      <section className="about-section">
        <h2>Quem Somos</h2>
        <p>
          Bem-vindo à nossa loja de materiais escolares! Somos uma loja dedicada a fornecer produtos
          de alta qualidade para ajudar estudantes de todas as idades a alcançar seus objetivos
          acadêmicos e criativos. Aqui você encontra uma ampla variedade de materiais escolares,
          desde lápis, cadernos e mochilas até artigos de papelaria e acessórios personalizados.
        </p>
      </section>

      <section className="about-section">
        <h2>Missão</h2>
        <p>
          Nossa missão é oferecer produtos de qualidade e acessíveis, que inspirem o aprendizado e a
          criatividade. Buscamos criar um ambiente de compras fácil e agradável, com atendimento ao
          cliente excepcional, para que pais, estudantes e professores possam encontrar tudo o que
          precisam para um ano letivo bem-sucedido.
        </p>
      </section>

      <section className="about-section">
        <h2>Visão</h2>
        <p>
          Ser a principal referência em materiais escolares na região, conhecida pela nossa
          variedade de produtos e pelo compromisso com o desenvolvimento educacional.
        </p>
      </section>

      <section className="about-section">
        <h2>Valores</h2>
        <ul>
          <li>Compromisso com a educação e o aprendizado</li>
          <li>Qualidade e confiabilidade dos produtos</li>
          <li>Atendimento ao cliente excepcional</li>
          <li>Inspiração e incentivo à criatividade</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
