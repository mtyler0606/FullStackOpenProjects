const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Course = ({course}) => { 
return(
    <>
    <h2>{course.name}</h2>
    {course.parts.map(course => <Part name={course.name} exercises={course.exercises} key={course.id} />)}
<p><strong>total of {course.parts.reduce( (accumulator, current) => accumulator + current.exercises, 0)} exercises</strong></p>
    </>
)
}

export default Course