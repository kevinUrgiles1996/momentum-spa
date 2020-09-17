export interface Report {
    _id ?: string;
    date: Date;
    successful ?: boolean;
    imageUrl: string;
    content: string;
    goalId ?: string | any;
}
