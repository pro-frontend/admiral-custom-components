export const fetchData = async <T>(
	baseUrl: string,
	params: string,
	setLoading: (loading: boolean) => void,
	setError?: (error: unknown) => void,
) => {
	setLoading(true);
	try {
		const response = await fetch(`${baseUrl}?${params}`);
		setError && setError(null);
		return await response.json() as T;
	} catch (err: unknown) {
		setError && setError(err);
		console.error(err);
	} finally {
		setLoading(false);
	}
};
