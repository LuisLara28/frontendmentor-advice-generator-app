import { useState, useEffect } from "react";

export function useRandomAdvice() {
	const [advice, setAdvice] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchAdvise = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				`https://api.adviceslip.com/advice`
			);
			if (!response.ok) {
				throw new Error(`Failed to fetch advice`);
			}
			const { slip } = await response.json();
			setAdvice(slip);
		} catch (error) {
			console.error("Error fetching advice: ", error);
			setError(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchAdvise();
	}, []);

	return { advice, loading, error, fetchAdvise };
}
