
const Subject = ({ subject, subject_score }) => {
  return (
    <article className="subject">
      <div className="subject__icon"></div>
      <h3 className="subject__title">{subject}</h3>
      <p className="subject__score">
        <span className="subject__score--value">{subject_score}</span> / 100
      </p>
    </article>
  );
};

export default Subject;