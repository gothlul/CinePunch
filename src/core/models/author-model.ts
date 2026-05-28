export default class Author {
    name: string;
	email: string;
    linkedinUrl: string | undefined;
    linkedinUsername: string | undefined;
    githubUrl: string | undefined;
    githubUsername: string | undefined;
    
    constructor(
        name: string,
        email: string,
        linkedinUrl?: string,
        githubUrl?: string,
        linkedinUsername?: string,
        githubUsername?: string
    ){
        this.name = name;
        this.email = email;
        this.linkedinUrl = linkedinUrl;
        this.githubUrl = githubUrl;
        this.linkedinUsername = linkedinUsername;
        this.githubUsername = githubUsername;
    }
}