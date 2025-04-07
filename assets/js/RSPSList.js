// RSPS List Data
// Here you can change all the text content
const allItems = [
  {
    category: "Custom",
    title: "Fantasy - #1 Custom ",
    description:
      "Fantasy is a Custom RSPS with over 400 players online active daily. There’s a new update on Fantasy every weekend, and a lot of our...",
    number: 1,
    votes: 5120,
    tags: ["Pre-EOC", "Gambling", "PvM", "Ironman Modes"],
    image: "assets/background-images/banner.jpg",
  },
  {
    category: "PvM",
    title: "Royal Custom RSPS",
    description:
      "Fantasy is a Custom RSPS with over 400 players online active daily. There’s a new update on Fantasy every weekend, and a lot of our...",
    number: 2,
    votes: 4350,
    tags: ["PvM", "Bosses", "Events"],
    image: "assets/background-images/banner.jpg",
  },
  // Add more items as needed...
  {
    category: "Custom",
    title: "Azerite317 ",
    description:
      "Fantasy is a Custom RSPS with over 400 players online active daily. There’s a new update on Fantasy every weekend, and a lot of our...",
    number: 3,
    votes: 3890,
    tags: ["PvM", "Custom", "Quests"],
    image: "assets/background-images/banner.jpg",
  },
  {
    category: "Custom",
    title: "Ikov - TOA",
    description:
      "Fantasy is a Custom RSPS with over 400 players online active daily. There’s a new update on Fantasy every weekend, and a lot of our...",
    number: 4,
    votes: 3890,
    tags: ["PvM", "Custom", "Quests"],
    image: "assets/background-images/banner.jpg",
  },
  {
    category: "Custom",
    title: "RoatPkz ",
    description:
      "Fantasy is a Custom RSPS with over 400 players online active daily. There’s a new update on Fantasy every weekend, and a lot of our...",
    number: 5,
    votes: 3890,
    tags: ["PvM", "Custom", "Quests"],
    image: "assets/background-images/banner.jpg",
  },
  {
    category: "Custom",
    title: "Ataraxia NXT 926",
    description:
      "Fantasy is a Custom RSPS with over 400 players online active daily. There’s a new update on Fantasy every weekend, and a lot of our...",
    number: 6,
    votes: 3890,
    tags: ["PvM", "Custom", "Quests"],
    image: "assets/background-images/banner.jpg",
  },
  {
    category: "Custom",
    title: "RuneWild",
    description:
      "Fantasy is a Custom RSPS with over 400 players online active daily. There’s a new update on Fantasy every weekend, and a lot of our...",
    number: 7,
    votes: 3890,
    tags: ["PvM", "Custom", "Quests"],
    image: "assets/background-images/banner.jpg",
  },
  {
    category: "Custom",
    title: "Alora - Varlamore",
    description:
      "Fantasy is a Custom RSPS with over 400 players online active daily. There’s a new update on Fantasy every weekend, and a lot of our...",
    number: 8,
    votes: 3890,
    tags: ["PvM", "Custom", "Quests"],
    image: "assets/background-images/banner.jpg",
  },
  {
    category: "Custom",
    title: "Oldschool RSPS",
    description:
      "Fantasy is a Custom RSPS with over 400 players online active daily. There’s a new update on Fantasy every weekend, and a lot of our...",
    number: 9,
    votes: 3890,
    tags: ["PvM", "Custom", "Quests"],
    image: "assets/background-images/banner.jpg",
  },
  {
    category: "Custom",
    title: "Oldschool RSPS",
    description:
      "Fantasy is a Custom RSPS with over 400 players online active daily. There’s a new update on Fantasy every weekend, and a lot of our...",
    number: 9,
    votes: 3890,
    tags: ["PvM", "Custom", "Quests"],
    image: "assets/background-images/banner.jpg",
  },
  // Add more items to test pagination...
];

// Configuration
const itemsPerPage = 9;
let currentPage = 1;
let currentFilter = "All";

// DOM Elements
let container, pagination, dropdownItems;

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  container = document.querySelector(".list-container");
  pagination = document.getElementById("pagination");
  dropdownItems = document.querySelectorAll(".dropdown-item");

  // Set up dropdown click handlers
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      currentFilter = this.textContent;
      currentPage = 1; // Reset to first page when filter changes

      // Update dropdown button text
      const dropdownToggle = document.getElementById("optionsDropdown");
      if (dropdownToggle) {
        // Keep only the text node and remove other children
        while (dropdownToggle.firstChild) {
          dropdownToggle.removeChild(dropdownToggle.firstChild);
        }

        // Add new text node
        dropdownToggle.appendChild(
          document.createTextNode(currentFilter + " ")
        );

        // Add back the SVG icon
        dropdownToggle.innerHTML += `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0065ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          `;
      }

      renderItems();
    });
  });

  // Initial render
  renderItems();
});

// Render items based on current filter and page
function renderItems() {
  if (!container) return;

  // Filter items
  const filtered =
    currentFilter === "All"
      ? allItems
      : allItems.filter((item) => item.category === currentFilter);

  // Calculate pagination
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filtered.slice(start, end);

  // Clear container
  container.innerHTML = "";

  // Show message if no items
  if (currentItems.length === 0) {
    container.innerHTML = `<div class="alert alert-info">No servers found matching your criteria.</div>`;
    return;
  }

  // Render items
  currentItems.forEach((item) => {
    container.innerHTML += createBoxHTML(item);
  });

  // Update pagination
  renderPagination(filtered.length);
}

// Create HTML for a single item
function createBoxHTML({
  category,
  title,
  number,
  votes,
  tags,
  image,
  description,
}) {
  return `
  <div class="row">
  <div class="col-12">
    <div
      class="d-flex flex-xl-row flex-column gap-xl-5 gap-4 align-items-stretch pt-2 mb-1"
    >
      <!-- Number Box -->
      <div
        class="d-flex flex-xl-row flex-column gap-xl-5 gap-2 align-items-center flex-grow-1"
      >
        <div class="d-flex flex-xl-column gap-xl-0 gap-2 align-items-center w-77">
          <span class="text-3xl fw-bold color-darkBlue">${number}</span>
          <span class="fw-bold fs-19 color-darkBlue">${category}</span>
        </div>

        <!-- Title, description and tags -->
        <div class="d-flex flex-column text-center text-xl-start gap-2 w-441">
          <h2 class="fs-25 fw-bold color-darkBlue">${title}</h2>
          <p class="fs-12">
          ${description}
          </p>
          <div
            class="my-2 fs-11 d-flex flex-wrap gap-2 justify-content-xl-start justify-content-center"
          >
          ${tags.map((tag) => `<span class="blue-tag">${tag}</span>`).join("")}
          </div>
        </div>
      </div>

      <!-- Banner Image -->
      <div class="w-full mx-auto align-self-center">
        <img src="${image}" alt="${title} banner" width="486" height="60" class="img-fluid" />
      </div>

      <!-- Play Button -->
      <div class="d-flex flex-column text-center gap-2 align-self-center mt-2">
        <button class="blue-button fs-5">Play Now</button>
        <span class="fs-12 color-darkBlue fw-medium">${votes.toLocaleString()} Votes</span>
      </div>
    </div>
  </div>
</div>
    `;
}

// Render pagination controls
function renderPagination(totalItems) {
  if (!pagination) return;

  const pageCount = Math.ceil(totalItems / itemsPerPage);
  pagination.innerHTML = "";

  // Add previous button
  // if (pageCount > 1) {
  //   const prevLi = document.createElement("li");
  //   prevLi.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
  //   prevLi.innerHTML = `<button class="page-link">&laquo;</button>`;
  //   if (currentPage > 1) {
  //     prevLi.addEventListener("click", () => {
  //       currentPage--;
  //       renderItems();
  //     });
  //   }
  //   pagination.appendChild(prevLi);
  // }

  // Add page numbers
  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement("li");
    li.className = `page-number ${i === currentPage ? "active" : ""}`;
    li.innerHTML = `<button class="page-number">${i}</button>`;
    li.addEventListener("click", () => {
      currentPage = i;
      renderItems();
    });
    pagination.appendChild(li);
  }

  // Add next button
  if (pageCount > 1) {
    const nextLi = document.createElement("li");
    nextLi.className = `page-next ${
      currentPage === pageCount ? "disabled" : ""
    }`;
    nextLi.innerHTML = `<button class="page-next">Next</button>`;
    if (currentPage < pageCount) {
      nextLi.addEventListener("click", () => {
        currentPage++;
        renderItems();
      });
    }
    pagination.appendChild(nextLi);
  }
}
