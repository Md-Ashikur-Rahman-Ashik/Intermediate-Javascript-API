function loadPosts(){
    // console.log("Loading Posts Data");
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => displayPosts(data))
}

function displayPosts(data){
    // console.log(data);
    const containerPost = document.getElementById("postContainer");
    for(const info of data){
        console.log(info);
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
            <h4>User-${info.userId}</h4>
            <h5>Post: ${info.title}</h5>
            <p>${info.body}</p>
        `;
        containerPost.appendChild(div);
    }
}

loadPosts();

function deletePost(){
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
    });
    
}