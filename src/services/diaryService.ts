import {
	DiaryEntry,
	NewDiaryEntry,
	NonSensitiveInfoDiaryEntry,
} from '../types';
import diaryData from './diaries.json';

// Asercion de tipos, cuando nos vienen datos de una db o una api, evitarlo fuera de estos casos
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): Array<DiaryEntry> => diaries;

export const findById = (id: number): DiaryEntry | undefined => {
	const entry = diaries.find((d) => d.id === id);
	if (entry != null) {
		const { comment, ...restOfDiary } = entry;
		return restOfDiary;
	}
	return undefined;
};

export const getEntriesWithoutSensitiveInfo =
	(): NonSensitiveInfoDiaryEntry[] => {
		return diaries.map(({ id, date, weather, visibility }) => {
			return {
				id,
				date,
				weather,
				visibility,
			};
		});
	};

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
	const newDiary = {
		id: Math.max(...diaries.map((d) => d.id)) + 1,
		...newDiaryEntry,
	};
	diaries.push(newDiary);
	return newDiary;
};
