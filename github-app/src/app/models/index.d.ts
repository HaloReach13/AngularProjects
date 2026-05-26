export interface GithubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name?: string;
    location?: string;
    bio?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
}

export interface GithubUserSearch {
    total_count: number;
    incomplete_results: boolean;
    items: GithubUser[];
}

export interface GithubRepo {
    id: number;
    name: string;
    html_url: string;
    description?: string;
    stargazers_count: number;
    language: string;
    owner: GithubUser;
}

export interface GithubRepoSearch {
    total_count: number;
    incomplete_results: boolean;
    items: GithubRepo[];
}