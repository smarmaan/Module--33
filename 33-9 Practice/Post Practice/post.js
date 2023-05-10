function createPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");

  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `

<h1>User ID : ${post.userId}</h1>
<h2>ID : ${post.id}</h2>
<h3>Title : ${post.title}</h3>
<h3>Post : ${post.body}</h3>

`;
    postContainer.appendChild(postDiv);
  }
}
createPost();

