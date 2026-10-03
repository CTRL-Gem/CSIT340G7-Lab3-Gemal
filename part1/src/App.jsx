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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return <p>Total units: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
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
  const parts = [
    {
      name: 'Industry Elective 1',
      exercises: 3
    },
    {
      name: 'Information Management 2',
      exercises: 3
    },
    {
      name: 'Applications Development and Emerging Technologies',
      exercises: 3
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer fullName="Deanne Romar R. Gemal" courseCode="CSIT340" section="G7" />
    </div>
  )
}

export default App