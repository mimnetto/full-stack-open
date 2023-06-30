const Header = (props) =>{
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) =>{
  console.log(props)
  return(
    <div>
      <p> {props.part}  |  <b>Exercises:</b> {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p><b>Total Number of exercises:</b> {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part = [
    { name: 'Fundamentals of React'} ,   
    { name: 'Using props to pass data'} ,  
    { name: 'State of a component'}
  ]
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
 
  return (
    <div>
        <Header course={course} />
        <Content part={part[0].name} exercises={exercises1} />
        <Content part={part[1].name} exercises={exercises2} />
        <Content part={part[2].name} exercises={exercises3} />
        <Total  total={exercises1 + exercises2 + exercises3}/>
      
    </div>
  )
}

export default App