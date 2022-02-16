import 'reflect-metadata';
import { User } from './user';
export declare class Post {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    isDelete: boolean;
    status: string;
    author: User;
}
