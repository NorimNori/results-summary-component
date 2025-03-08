import Score from "../score/index"
import './Result.scss'

const Result = () => {
  return (
    <section className="result" aria-labelledby="result-title">
      <h2 id="result-title" className="result__title">Your Result</h2>
      <Score />
      <strong className="result__label">Great</strong>
      <p className="result__description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  )
}

export default Result