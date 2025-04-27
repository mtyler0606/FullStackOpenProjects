import Course from "./Components/Course"

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
  <div>
    <h2>{course.name}</h2>
    {course.parts.map(course => <Course course={course} key={course.id} />)}
    <p><strong>total of {course.parts.reduce( (accumulator, current) => accumulator + current.exercises, 0)} exercises</strong></p>
  </div>
  )
  
}

export default App