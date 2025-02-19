import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import Login from "./pages/auth/login/Login";

function App() {
	return (
		<div className='flex max-w-6xl mx-auto'>
			<Login />
			{/* <SignUpPage /> */}
			{/* <Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes> */}
		</div>
	);
}

export default App;