import Score from "../score/index"

const Result = () => {
  return (
    <section className="result">
      <h2 className="result__title">Your Result</h2>
      <Score />
      <strong className="result__label">Great</strong>
      <p className="result__description">
        You scored higher than <span className="result__percentage">65%</span> of the people who have taken these tests.
      </p>
    </section>
  )
}

export default Result