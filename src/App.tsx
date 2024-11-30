import './App.scss'
import { Border } from './components/Border'
import { useBorderStore } from './store/store-border'

function App() {
	const { borders, addBorder } = useBorderStore()

	return (
		<>
			<div className='wrapper'>
				{borders.map(border => (
					<Border key={border.id_border} borderId={border.id_border} />
				))}
				<button
					className={borders.length < 4 ? 'addList' : 'addList disabled'}
					onClick={addBorder}
				>
					<span>+</span>
				</button>
			</div>
		</>
	)
}

export default App
