const blogPosts = [
  {
    tag: "BLOG",
    title: "RSPSList Blog Post 1",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
    image: "/assets/cards/home-1.jpg",
    author: "RS-Servers Team",
    date: "24 September | Blog",
    icon: "/assets/icons/R.png",
  },
  {
    tag: "BLOG",
    title: "RSPSList Blog Post 2",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
    image: "/assets/cards/home-3.jpg",
    author: "RS-Servers Team",
    date: "24 September | Blog",
    icon: "/assets/icons/R.png",
  },
  {
    tag: "BLOG",
    title: "RSPSList Blog Post 3",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
    image: "/assets/cards/home-2.jpg",
    author: "RS-Servers Team",
    date: "24 September | Blog",
    icon: "/assets/icons/R.png",
  },
];

function createBlogPostHTML(post) {
  return `
    <div class="d-flex gap-10 flex-lg-row flex-column justify-content-center align-items-center text-lg-start text-center">
            <div class="text-center">
              <img src="${post.image}" alt="${post.title}" width="610" height="301" class="img-fluid mb-3" />
            </div>

            <div class="d-flex flex-column gap-3 align-items-lg-start align-items-center">
            <span class="fs-18">${post.tag}</span>
            <h2 class="fs-32 fw-bold">${post.title}</h2>
            <p class="fs-13 w-md-50 w-lg-75 w-100 color-deepsea">
            ${post.description}
            </p>

            <div class="d-flex gap-2 align-items-center flex-column flex-sm-row text-center text-sm-start">
            <img src="${post.icon}" height="73" width="73" alt="${post.author}" />
            <div class="d-flex flex-column gap-1">
                <h6 class="fw-bold">${post.author}</h6>
                <p>${post.date}</p>
            </div>
            </div>
        </div>
    </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blogPostsContainer");
  blogPosts.forEach((post) => {
    blogContainer.innerHTML += createBlogPostHTML(post);
  });
});
