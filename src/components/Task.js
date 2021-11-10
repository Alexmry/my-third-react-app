import { FaTimes } from 'react-icons/fa'

const Task = ({task}) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes /></h3>
            <h3>{task.day}</h3>
        </div>
    )
}

export default Task