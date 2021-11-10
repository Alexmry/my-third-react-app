import Task from "./Task";

const Tasks = ({tasks, onDelete}) => {

  return (
    //   setTask([...tasks, {}])
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
