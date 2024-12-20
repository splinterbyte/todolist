import { CreateBorder } from '@/features/create-border'
import { getBorders } from '@/shared/api/get-borders'
import { Border } from '@/widtgets/border'
import { useQuery } from '@tanstack/react-query'
import { TBorder } from '../types'
import './App.scss'

export const Home = () => {
	const { data: fetchedBorders } = useQuery<TBorder[]>({
		queryKey: ['borders'],
		queryFn: getBorders,
	})

	return (
		<>
			<div className='wrapper'>
				{fetchedBorders?.map((border: TBorder) => (
					<Border key={border.id} borderId={border.id} tasks={border.tasks} />
				))}
				<CreateBorder />
			</div>
		</>
	)
}
