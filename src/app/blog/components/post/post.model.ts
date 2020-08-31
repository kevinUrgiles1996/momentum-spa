export interface Post{
    _id ?: string;
    title: string;
    content: string;
    likes: number;
    imageURL: string;
    date: Date;
    user: any;
}
