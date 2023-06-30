//Components
import PaperDetails from "./PaperDetails";

const ChapterDetails = ({ chapter }) => {
  return (
    <div>
      <h3>{chapter.title}</h3>
      <p>{chapter.subtitle}</p>
      {chapter.papers &&
        chapter.papers.map((paper) => (
          <PaperDetails paper={paper} key={paper.key} />
        ))}
    </div>
  );
};

export default ChapterDetails;
