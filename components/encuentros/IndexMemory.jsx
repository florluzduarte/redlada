//Components
import ChapterDetails from "./ChapterDetails";

const IndexMemory = ({ data }) => {
  return (
    <section>
      <h2>Índice de esta memoria</h2>
      <div>
        {data.indice.map((chapter) => (
          <ChapterDetails chapter={chapter} key={chapter.key} />
        ))}
      </div>
    </section>
  );
};

export default IndexMemory;
