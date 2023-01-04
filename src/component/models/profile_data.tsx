export interface ProfileData {
    about: PageData;
    experience: PageData;
    education: PageData;
    achievement: PageData;
    contact: PageData;
}

export interface PageData {
    header:    string;
    subHeader: string[];
    tags:      string[];
}