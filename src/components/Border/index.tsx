import { useTaskStore } from '../../store/store'
import { AddTask } from '../AddTask'
import { Task } from '../Task'
import style from './Border.module.scss'

interface Props {
	borderId: number
}

export const Border = ({ borderId }: Props) => {
	const { tasks } = useTaskStore()
	const filteredTasks = tasks.filter(task => task.borderId === borderId)

	return (
		<div className={style.border}>
			{filteredTasks.map(task => (
				<Task key={task.id} id={task.id} />
			))}
			{filteredTasks.length < 4 && <AddTask borderId={borderId} />}
		</div>
	)
}
