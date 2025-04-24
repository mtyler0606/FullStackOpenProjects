const Header = (props) => <h1>{props.course}</h1>
const Part = (props) => <p>{props.name} {props.exercises}</p>
const Content = (props) => {return (<>
<Part name={props.part1Name} exercises={props.part1exercies} />
<Part name={props.part2Name} exercises={props.part2exercies} />
<Part name={props.part3Name} exercises={props.part3exercies} />
</>)}
const Total = (props) => <p>Number of excercises {props.exercises}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

 

  return (
    <div>
      <Header course={course} />
      <Content part1Name={part1} part1exercises={exercises1} part2Name={part2} part2exercises={exercises2} part3Name={part3} part3exercises={exercises3}/>
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App