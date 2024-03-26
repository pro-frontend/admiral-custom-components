export async function searchPeopleByName(
	name: string,
	page: string = "1",
	limit: string = "10") {
	const response = await fetch(
		"https://swapi.tech/api/people?" +
		new URLSearchParams({
			search: name,
			page,
			limit,
		}),
	);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
}
