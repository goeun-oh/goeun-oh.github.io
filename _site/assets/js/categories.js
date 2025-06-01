const categories = { all_collections: [{ url: `//all_collections/tutorial/math/2025/03/18/math-examples.html`, date: `18 Mar 2025`, title: `Math Examples`},{ url: `//all_collections/jekyll/test%20post/first%20post/2021/11/04/jekyll-markdown.html`, date: `04 Nov 2021`, title: `Jekyll Markdown`},{ url: `//all_collections/fiction/jekyll/1948/12/12/the-purpose-of-education.html`, date: `12 Dec 1948`, title: `The Purpose of Education`},],fiction: [{ url: `//all_collections/fiction/jekyll/1948/12/12/the-purpose-of-education.html`, date: `12 Dec 1948`, title: `The Purpose of Education`},],jekyll: [{ url: `//all_collections/jekyll/test%20post/first%20post/2021/11/04/jekyll-markdown.html`, date: `04 Nov 2021`, title: `Jekyll Markdown`},{ url: `//all_collections/fiction/jekyll/1948/12/12/the-purpose-of-education.html`, date: `12 Dec 1948`, title: `The Purpose of Education`},],Test_Post: [{ url: `//all_collections/jekyll/test%20post/first%20post/2021/11/04/jekyll-markdown.html`, date: `04 Nov 2021`, title: `Jekyll Markdown`},],first_post: [{ url: `//all_collections/jekyll/test%20post/first%20post/2021/11/04/jekyll-markdown.html`, date: `04 Nov 2021`, title: `Jekyll Markdown`},],tutorial: [{ url: `//all_collections/tutorial/math/2025/03/18/math-examples.html`, date: `18 Mar 2025`, title: `Math Examples`},],math: [{ url: `//all_collections/tutorial/math/2025/03/18/math-examples.html`, date: `18 Mar 2025`, title: `Math Examples`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};