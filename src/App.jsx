import "./App.css";
import divider from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";
import { useRandomAdvice } from "./custom-hooks/useRandomAdvice";

// Custom hook to fetch data advice from th API

function App() {
	const { advice, loading, error, fetchAdvise } = useRandomAdvice();

	return (
		<div className="advice-container">
			{loading ? (
				<p>Loading advice...</p>
			) : error ? (
				<p>Error fetching advice</p>
			) : (
				<>
					<h2 className="advice-counter">ADVICE #{advice.id}</h2>
					<p className="advice-text">&quot;{advice.advice}&quot;</p>
					<img className="divider" src={divider} alt="divider" />
					<div className="button-container">
						<button className="next-advice" onClick={fetchAdvise}>
							<img src={dice} alt="dice" />
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
