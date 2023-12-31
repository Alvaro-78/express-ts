import { NewDiaryEntry } from './types';

const parseComment = (commentFromRequest: any): string => {
	if (!isString(commentFromRequest)) {
		throw new Error('Incorrect or missing comment');
	}
	return commentFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
	if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
		throw new Error('Incorrect or missing date');
	}
	return dateFromRequest;
};

const isString = (string: string): boolean => {
	return typeof string !== 'string';
};

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date));
};

const toNewEntryDiary = (object: any): NewDiaryEntry => {
	const newEntry: NewDiaryEntry = {
		comment: parseComment(object.comment),
		date: parseDate(object.date),
	};
	return mewEntry;
};

export default toNewDiaryEntry;
