import { gql, useQuery} from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
 interface Lesson{
  id: string;
  title: string;
 }
function App() {
  const { data } = useQuery<{lessons: Lesson[] }>(GET_LESSONS_QUERY)

  console.log(data)

   return (
    <ul>
      {data?.lessons.map(lesson => {
        return<li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
   //  {/* <h1 className="text-5xl font-bold text-violet-500">Hello word!</h1> */} 
  )
}

export default App

/* useEffect(() => {
  client.query({
    query: GET_LESSONS_QUERY,    
  }).then(response => {
    console.log(response.data)
  })
 }, []) */