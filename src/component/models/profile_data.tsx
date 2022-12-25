export interface ProfileData {
    about: About;
    experience: Experience;
    education: Education;
    achievement: Achievement;
    contact: Contact;
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

export interface Achievement {
    header:    string;
    subHeader: string;
    tags:      string[];
}

export interface Contact {
    header:    string;
    subHeader: string;
    tags:      string[];
}