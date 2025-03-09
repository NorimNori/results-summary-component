import './Subject.scss'

const Subject = ({ subject, subject_score, icon }) => {
  return (
    <article className={`subject ${subject}`}>
      <div className='subject__title-container'>
        <img className="subject__icon" src={icon} />
        <h3 className="subject__title">{subject}</h3>
      </div>
      <p className="subject__score">
        <span className="subject__score--value">{subject_score}</span> / 100
      </p>
    </article>
  );
};

export default Subject;