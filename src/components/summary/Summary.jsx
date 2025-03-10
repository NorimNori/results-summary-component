import { summaryData } from "../../constants/subjects"
import Button from "../button/index"
import Subject from "../subject/Subject"
import './Summary.scss'

const Summary = () => {
  return (
    <section className="summary" aria-labelledby="summary-title">
      <h2 id="summary-title" className="summary__title">Summary</h2>
      <ul className="summary__list">
        {summaryData.map(({ category, score, icon }) => (
          <li key={category}>
            <Subject subject={category} subject_score={score} icon={icon}/>
          </li>
        ))}
      </ul>
      <Button />
    </section>
  )
}

export default Summary