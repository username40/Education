import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-b9da6-default-rtdb.firebaseio.com'
})