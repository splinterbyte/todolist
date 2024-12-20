import { Task, TTask } from '@/entities/task'
import { CreateTask } from '@/features/create-task'
import { DeleteBorder } from '@/features/delete-border'
import style from './Border.module.scss'

type Props = {
	borderId: number
	tasks: TTask[]
}

export const Border = ({ borderId, tasks }: Props) => {
	return (
		<div className={style.borderMain}>
			<div className={style.border}>
				{tasks?.map(task => (
					<Task key={task.id} task={{ ...task, borderId }} />
				))}
				{tasks.length < 4 && <CreateTask borderId={borderId} />}
			</div>
			<DeleteBorder borderId={borderId} />
		</div>
	)
}
