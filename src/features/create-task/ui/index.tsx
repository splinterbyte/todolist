import { useCreateTask } from '../api/use-create-task'
import style from './AddTask.module.scss'

type Props = {
	borderId: number
}

export const CreateTask = ({ borderId }: Props) => {
	const { mutateAsync } = useCreateTask()

	const handleClick = async () => {
		await mutateAsync({ borderId })
	}
	return (
		<button className={style.btn} onClick={handleClick}>
			+
		</button>
	)
}
