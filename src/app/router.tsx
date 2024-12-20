import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from '../pages/home/ui'

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	)
}
