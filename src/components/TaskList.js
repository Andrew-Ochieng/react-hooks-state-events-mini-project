import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTasks }) {
	console.log("Test tasks", tasks);

  return (
    <div className="tasks">
			{tasks.map((task) => (
				<Task
					key={task.text}
					text={task.text}
					category={task.category}
          deleteTasks={deleteTasks}
				/>
			))}
		</div>
  );
}

export default TaskList;
