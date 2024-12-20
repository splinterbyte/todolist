import trash from '@/shared/assets/trash.svg'
import { useDeleteBorder } from '../api/use-delete-border'

type Props = {
	borderId: number
}

export const DeleteBorder = ({ borderId }: Props) => {
	const { mutateAsync } = useDeleteBorder()

	const handleDelete = async () => {
		await mutateAsync(borderId)
	}
	return (
		<>
			<button onClick={handleDelete}>
				<img src={trash} alt='Delete Border' />
			</button>
		</>
	)
}
