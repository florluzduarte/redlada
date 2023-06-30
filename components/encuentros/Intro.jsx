const Intro = ({ data }) => {
  return (
    <section>
      {data.intro.map((text) => (
        <article key={text.key}>
          <h2>{text.title}</h2>
          <div>
            {text.paragraphs.map(({ text, key }) => (
              <p key={key}>{text}</p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Intro;
