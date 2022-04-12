// const title = 'Blog Post'
// const body = 'This is my blog post'
// const comments = [
//     {id: 1, text: 'Coment One' },
//     {id: 2, text: 'Coment Two' },
//     {id: 3, text: 'Coment Three'},
//     {id: 4, text: 'Coment Four'},
//     {id: 5, text: 'Coment Five'},
//     {id: 6, text: 'Coment Six'},
// ]

// const loading = false
// const showComments = false

// return (
//     <div>
//         <h1>{title.toUpperCase()}</h1>
//         <p>{body}</p>
//         {/* && qyer dizer que nao tem outras condicoes so se true */}
//         {showComments && 
//             <div className='coments'>
//                 <h3>Comments({comments.length})</h3>
//                 {comments.map((comment, index) => (
//                     <li key={index}>{comment.text}</li>
//                 ))}
//             </div>
//         }


//     </div>
// )
import { useState } from 'react'
import Header from './components/Header'

import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
	  if (window.confirm('Are you sure you want to delete?')) {
		setFeedback(feedback.filter((item) => item.id !== id))
	}
  }


  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
          handleDelete={deleteFeedback} />
      </div>
    </>
  )
}
export default App

