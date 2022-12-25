export interface ProfileData {
    about: About;
    experience: Experience;
    education: Education;
}

export interface About {
    header:    string;
    subHeader: string;
    tags:      string[];
}

export interface Experience {
    header:    string;
    subHeader: string;
    tags:      string[];
}

export interface Education {
    header:    string;
    subHeader: string;
    tags:      string[];
}