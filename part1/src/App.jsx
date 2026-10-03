const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises} units</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Total units: {props.total}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <hr />
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340G7 - Lab3 - Industry Elective 1'
  const part1 = {
    name: 'Industry Elective 1',
    exercises: 3
  }
  const part2 = {
    name: 'Information Management 2',
    exercises: 3
  }
  const part3 = {
    name: 'Applications Development and Emerging Technologies',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer fullName="Deanne Romar R. Gemal" courseCode="CSIT340" section="G7" />
    </div>
  )
}

export default App