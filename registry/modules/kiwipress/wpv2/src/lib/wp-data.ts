interface WPPost {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
}

interface PostIdConfig {
    response: {
        id: number;
        slug: string;
        title: string;
        content_rendered: string;
    }
}

interface PostSlugConfig{
    response: {
        slug: string;
        title: string;
        content: string;
    }
}

class WPData { 
    private wpurl = {
        base: '/wp-json/wp/v2',
        forum: '',
        post: '',
        pages: '',
        menus: '',
        users: '',
        comments: '',
        products: '',
        fourms: ''
    }

    constructor() {

    }

    // GET Methods ONLY
    // This class is meant to
    // pull data from the WordPress API of your site
    // the WPCreate library is where you setup your
    // custom SET methods
    
    // Methods that pull entire post data

    // TODO: Need to get comment and author data which is pulled from another source in the WP API
    async getPostById(id: number, url: string): Promise<PostIdConfig["response"]> {
        const response = await fetch(url);
        const postData = await response.json();
        const post = postData
        return {
            id: post.id,
            slug: post.slug,
            title: post.title.rendered,
            content_rendered: post.content.rendered
        }
    }

    async getPostBySlug(slug: string): Promise<PostSlugConfig["response"]> {
        const response = await fetch(slug);
        const postData = await response.json();
        const post: WPPost = postData;
        return {
            slug: post.slug,
            title: post.title.rendered,
            content: post.content.rendered
        }
    }

    // PAGES
    async getPageBySlug(slug: string) {
        const response = await fetch(slug);
        const pageData = await response.json();
        const page = pageData;
        
    }

    async getPageById(id: number, url: string) {
        const response = await fetch(url + id);
        const pageData = await response.json();
        const page = pageData;
    }
}