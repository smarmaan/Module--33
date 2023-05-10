function commentPost() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComments(data));
}

function displayComments(comments) {
  const commentContainer = document.getElementById("comment-container");

  for (const comment of comments) {
    const commentDiv = document.createElement("div");
    commentDiv.innerHTML = `
    
    <h1>Id : ${comment.id}</h1>
    <h2>PostId : ${comment.postId}</h2>
    <h3>Name : ${comment.name}</h3>
    <h3>Email : ${comment.email}</h3>
    <h3>Comment : ${comment.body}</h3>

    `;

    commentContainer.appendChild(commentDiv);
  }
}

commentPost();
