import type { People } from "@/entities/MockData/People";

interface SearchResponse<T> {
	message: string,
	total_records: number,
	total_pages: number,
	previous: string | null,
	next: string | null,
	results: T,
}

export type SearchPeopleResponse = SearchResponse<People>;

export async function searchPeopleByName(
	name: string,
	page: string = "1",
	limit: string = "10"): Promise<SearchPeopleResponse> {
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
