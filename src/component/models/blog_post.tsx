export interface BlogPost {
    data: Data;
}

export interface Data {
    user: User;
}

export interface User {
    publication: Publication;
}

export interface Publication {
    posts: Post[];
}

export interface Post {
    title:      string;
    brief:      string;
    slug:       string;
    dateAdded:  Date;
    coverImage: string;
}