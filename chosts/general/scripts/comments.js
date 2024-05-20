/* written for https://cohost.org/Spax/post/6010925-cohost-meta-experime */
let comments = [];
document.querySelectorAll(".co-comment-box:last-of-type article").forEach((e) => {
  comments.push({
    "author": e.querySelector(".co-project-handle").innerText,
    "text": e.querySelector(".co-prose").innerHTML,
    "date": e.querySelector("time").title
  })
});
console.log(comments);