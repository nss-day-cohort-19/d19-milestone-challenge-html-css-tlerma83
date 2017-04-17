console.log("hello!");
// Create an array to hold your posts (at least 2 posts). Each item in the array must be an object that contains at a minimum the following information: Title, Copy, Date. Use JavaScript to add each post to the DOM.

var blogDiv = document.getElementById("bog-js");

var blog = [
    {
        title: "Learning at NSS",
        post: "awesome bogmos here",
        date: "April 1, 2017"
    },
    {
        title: "Team Projects",
        post: "awesome bogmos here",
        date: "April 15, 2017"
    }
]

for (var i = 0; i < blog.length; i++) {
    var articles = blog[i];
    console.log(articles);
    blogDiv.innerHTML +=
        `<article class="blog-article">
        <h2 class="blog-title">${articles.title}</h2>
        <section class="blog-section">${articles.post}</section>
        <p class="blog-date">${articles.date}</p>
        </article>`
}
