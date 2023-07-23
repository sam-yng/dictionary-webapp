export type APIQueryWordMeaning = {
	partOfSpeech: string;
	definitions: Array<{ definition: string }>;
}

export type APIQueryResult = {
	word: string;
	phonetic: string;
	meanings: APIQueryWordMeaning[];
};

export type APIQueryResponse = APIQueryResult[];

export type DictionaryDefinition = {
	word: string;
	phonetic: string;
	meaning: string; // first meaning in list of meanings
	definition: string; // first definition in list of definitions for first meaning
}

export const mapQueryResponseToDictionaryDefinition =
	(query: APIQueryResult): DictionaryDefinition => {
	 
	}

// export const useWordQuery = (word: string) => {}