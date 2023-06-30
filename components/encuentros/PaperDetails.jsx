const PaperDetails = ({ paper }) => {
  return (
    <div>
      <p>{paper.title}</p>
      <p>{paper.author}</p>
    </div>
  );
};

export default PaperDetails;
