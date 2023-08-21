export type Boards = {
	[id: number]: BoardType;
};

export type BoardType = {
	id: number;
	title: string;
	columns: number[];
};
