const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      <p>{props.part1} {props.exercises1}</p>
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part1 = {props.part1} exercises1 = {props.exercises1}></Part>
      <Part part1 = {props.part2} exercises1 = {props.exercises2}></Part>
      <Part part1 = {props.part3} exercises1 = {props.exercises3}></Part>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.exercises1+props.exercises2+props.exercises3}</p>
    </div>
  )
}


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
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      
    </div>
  )
}

export default App