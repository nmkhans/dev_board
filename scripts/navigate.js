const blogCta = document.getElementById("blog__cta");
const backBtn = document.getElementById("back__btn");

blogCta?.addEventListener("click", function() {
  window.location.href = "/blog.html"
})


backBtn?.addEventListener("click", function() {
  console.log("clicked")
  window.location.href = "/index.html";
})