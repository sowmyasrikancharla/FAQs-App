// Write your code here.
// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  render() {
    const {faqsDetails, onToggleFaq} = this.props
    const {id, questionText, answerText, show} = faqsDetails

    const onClickFaq = () => {
      onToggleFaq(id)
    }

    return (
      <li className="flex-con">
        <div className="single-faq-con">
          <h3 className="question">{questionText}</h3>

          <button className="but" onClick={onClickFaq}>
            {show ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
            .
          </button>
        </div>
        {show && (
          <div>
            <hr className="line" />
            <p className="ans">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
