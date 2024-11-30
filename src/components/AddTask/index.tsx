import { useTaskStore } from '../../store/store'
import style from './AddTask.module.scss'

interface Props {
	borderId: number
}

export const AddTask = ({ borderId }: Props) => {
	const { addTask } = useTaskStore()
	return (
		<button className={style.btn} onClick={() => addTask(borderId)}>
			<span>+</span>
		</button>
	)
}
