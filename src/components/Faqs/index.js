// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
    show: false,
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
    show: false,
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
    show: false,
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
    show: false,
  },
]

class Faqs extends Component {
  state = {faq: faqsList}

  onToggleFaq = id => {
    this.setState(prevState => ({
      faq: prevState.faq.map(eachFAQ => {
        if (id === eachFAQ.id) {
          return {...eachFAQ, show: !eachFAQ.show}
        }
        return eachFAQ
      }),
    }))
  }

  render() {
    const {faq} = this.state
    return (
      <div className="main-con">
        <div className="faqs-con">
          <h1 className="faq-head">FAQs</h1>
          <ul>
            {faq.map(each => (
              <FaqItem
                faqsDetails={each}
                key={each.id}
                onToggleFaq={this.onToggleFaq}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
