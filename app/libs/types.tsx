export type QuestionOptions = {
	display: string;
	isRejection: string;
	value: string | boolean;
};

export type Question = {
	question: string;
	type: string;
	options: QuestionOptions[];
};

export type Questions = {
  questions: Question[];
}