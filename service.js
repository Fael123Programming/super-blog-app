import posts from './posts.json';

const useMockData = false;

const getPosts = async onFetchPosts => {
    let returnPosts;
    if (useMockData) {
        returnPosts = posts;
    } else {
        let raw = await fetch('https://jsonplaceholder.typicode.com/posts');
        returnPosts = await raw.json();
    }
    onFetchPosts(returnPosts);
};

const getComments = async (id, onFetchComments) => {
    let raw = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    let json = await raw.json();
    onFetchComments(json);
};

export { getPosts, getComments }; 
