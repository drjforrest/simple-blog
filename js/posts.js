document.addEventListener('DOMContentLoaded', async () => {
    const postsGrid = document.querySelector('.posts-grid');
    const errorMessage = document.getElementById('error-message');

    try {
        // If you have a posts directory or API endpoint, fetch posts here
        const posts = await loadPosts();
        
        if (posts && posts.length > 0) {
            postsGrid.innerHTML = posts.map(post => createPostCard(post)).join('');
        } else {
            throw new Error('No posts found');
        }
    } catch (error) {
        console.error('Error loading posts:', error);
        errorMessage.style.display = 'block';
        postsGrid.style.display = 'none';
    }
});

function createPostCard(post) {
    return `
        <article class="post-card">
            <h2 class="post-title">${post.title}</h2>
            <div class="post-meta">
                <time datetime="${post.date}">${formatDate(post.date)}</time>
            </div>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="${post.url}" class="post-link">Read more →</a>
        </article>
    `;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

async function loadPosts() {
    // This is a placeholder. Implement your post loading logic here.
    // You might want to fetch from a static JSON file or an API endpoint
    return [];
}