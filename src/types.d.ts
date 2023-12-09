import { Visibility } from './types.d';
export type Weather = 'sunny | rainy | cloudy | windy | stormy';
export type Visibility = 'great | good | ok | poor';

// pensado para extender
export interface DiaryEntry {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visibility;
	comment?: string;
}

// Creamos un typw a partir de una interfaz
// export type NonSensitiveInfoDiaryEntry = Pick<
// 	DiaryEntry,
// 	'id' | 'date' | 'weather' | 'visibility'
// >;

// omite el tipo que se desee
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
