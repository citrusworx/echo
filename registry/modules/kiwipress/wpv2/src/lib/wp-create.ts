class WPCreate { 
    
    private username: string;
    private password: string;

    constructor(username: string, password: string) { 
        this.username = username;
        this.password = password;
    }

    // Create methods
    createPost(post: string) { 
        return 'Post created';
    }

}

export { WPCreate }