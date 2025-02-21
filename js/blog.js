// Blog post data structure
let posts = [];

// Function to load posts from JSON files in the posts directory
async function loadPosts() {
    try {
        const response = await fetch('posts/posts.json');
        posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error loading posts:', error);
        displayError();
    }
}

// Function to display posts
function displayPosts(postsToShow) {
    const postGrid = document.getElementById('postGrid');
    postGrid.innerHTML = '';

    postsToShow.forEach(post => {
        const postElement = createPostElement(post);
        postGrid.appendChild(postElement);
    });
}

// Function to create a post element
function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'post-card fade-in';
    
    article.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-image">
        <div class="post-content">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">
                <span>${post.date}</span>
                <span>${post.category}</span>
            </div>
        </div>
    `;

    article.addEventListener('click', () => {
        window.location.href = `post.html?id=${post.id}`;
    });

    return article;
}

// Function to filter posts by category
function filterPosts(category) {
    const filteredPosts = category === 'all' 
        ? posts 
        : posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
    displayPosts(filteredPosts);
}

// Function to display error message
function displayError() {
    const postGrid = document.getElementById('postGrid');
    postGrid.innerHTML = `
        <div class="error-message text-center">
            <h2>Oops! Something went wrong.</h2>
            <p>Unable to load blog posts. Please try again later.</p>
        </div>
    `;
}

// Function to create a new post
function createPost(postData) {
    const newPost = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        ...postData
    };

    posts.unshift(newPost);
    savePosts();
    return newPost;
}

// Function to save posts to local storage (you can modify this to save to a file instead)
function savePosts() {
    localStorage.setItem('blog-posts', JSON.stringify(posts));
}

// Load posts when the page loads
document.addEventListener('DOMContentLoaded', loadPosts);