import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import './App.scss'
import { Border } from './components/Border'

interface Task {
	id: number
	text: string
}

interface IBorder {
	id: number
	tasks: Task[]
}
const fetchBorders = async (): Promise<IBorder[]> => {
	const response = await axios.get(`http://localhost:8000/borders`)
	return response.data
}

const createBorder = async (
	newBorder: Omit<IBorder, 'id' | 'tasks'>
): Promise<IBorder> => {
	const response = await axios.post(`http://localhost:8000/borders`, newBorder)
	return response.data
}

function App() {
	const queryClient = useQueryClient()

	const { data: gettedBorders } = useQuery<IBorder[]>({
		queryKey: ['borders'],
		queryFn: fetchBorders,
	})

	const mutation = useMutation({
		mutationFn: createBorder,

		onSuccess: () => {
			console.log('Border created successfully')
			queryClient.invalidateQueries({ queryKey: ['borders'] })
		},

		onError: error => {
			console.error('Error creating todo:', error)
		},
	})

	const handleCreate = () => {
		const newBorder: Omit<IBorder, 'id' | 'tasks'> = {}
		mutation.mutate(newBorder)
	}

	return (
		<>
			<div className='wrapper'>
				{gettedBorders?.map((border: IBorder) => (
					<Border key={border.id} borderId={border.id} tasks={border.tasks} />
				))}
				<button
					className={
						gettedBorders && gettedBorders.length < 4
							? 'addList'
							: 'addList disabled'
					}
					onClick={handleCreate}
				>
					+
				</button>
			</div>
		</>
	)
}

export default App
