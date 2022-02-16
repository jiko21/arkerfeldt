import 'reflect-metadata';
import { Post } from './post';
export declare class User {
    displayName: string;
    photoUrl: string;
    posts?: [Post] | null;
}
