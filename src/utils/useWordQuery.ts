/* eslint-disable indent */
export type APIQueryWordMeaning = {
	partOfSpeech: string;
	definitions: Array<{ definition: string }>;
}

export type APIQueryResult = {
	word: string;
	phonetic: string;
	meanings: APIQueryWordMeaning[];
};

export type APIQueryResponse = {
	APIQueryResult: [];
	title?: string
	resolution?: string
	message?: string
}

export type DictionaryDefinition = {
	word: string;
	phonetic: string;
	definition: string;
}

// export const mapQueryResponseToDictionaryDefinition =
// 	(query: APIQueryResult): DictionaryDefinition => {
// }