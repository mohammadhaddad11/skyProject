const data = [
  {
    name: "Ali Kamal",
    date: "5/3/2024",
    duration: "1 Week (10/4/2023 - 17/4/2023)",
    salary: "500 AED",
  },
  {
    name: "Sara Ahmed",
    date: "10/3/2024",
    duration: "3 Weeks (20/4/2023 - 11/5/2023)",
    salary: "1500 AED",
  },
  {
    name: "Fatima Ali",
    date: "15/3/2024",
    duration: "1 Week (25/4/2023 - 2/5/2023)",
    salary: "500 AED",
  },
  {
    name: "Omar Zaki",
    date: "20/3/2024",
    duration: "2 Weeks (30/4/2023 - 14/5/2023)",
    salary: "1000 AED",
  },
  {
    name: "Yasmin Omar",
    date: "25/3/2024",
    duration: "2 Weeks (5/5/2023 - 19/5/2023)",
    salary: "1000 AED",
  },
  {
    name: "Hassan Khaled",
    date: "30/3/2024",
    duration: "1 Week (10/5/2023 - 17/5/2023)",
    salary: "500 AED",
  },
  {
    name: "Lina Mohamed",
    date: "5/4/2024",
    duration: "2 Weeks (15/5/2023 - 29/5/2023)",
    salary: "1000 AED",
  },
  {
    name: "Rami Nader",
    date: "10/4/2024",
    duration: "3 Weeks (20/5/2023 - 10/6/2023)",
    salary: "1500 AED",
  },
  {
    name: "Khaled Youssef",
    date: "15/4/2024",
    duration: "1 Week (25/5/2023 - 1/6/2023)",
    salary: "500 AED",
  },
  {
    name: "Mona Samir",
    date: "20/4/2024",
    duration: "2 Weeks (30/5/2023 - 13/6/2023)",
    salary: "1000 AED",
  },
  {
    name: "Samer Jaber",
    date: "25/4/2024",
    duration: "2 Weeks (5/6/2023 - 19/6/2023)",
    salary: "1000 AED",
  },
  {
    name: "Nadine Fadel",
    date: "30/4/2024",
    duration: "3 Weeks (10/6/2023 - 1/7/2023)",
    salary: "1500 AED",
  },
  {
    name: "Jamal Saeed",
    date: "5/5/2024",
    duration: "1 Week (15/6/2023 - 22/6/2023)",
    salary: "500 AED",
  },
  {
    name: "Tarek Alwan",
    date: "10/5/2024",
    duration: "2 Weeks (20/6/2023 - 4/7/2023)",
    salary: "1000 AED",
  },
  {
    name: "Dina Mustafa",
    date: "15/5/2024",
    duration: "1 Week (25/6/2023 - 2/7/2023)",
    salary: "500 AED",
  },
  {
    name: "Nourhan Kamal",
    date: "20/5/2024",
    duration: "2 Weeks (30/6/2023 - 14/7/2023)",
    salary: "1000 AED",
  },
  {
    name: "Youssef Omar",
    date: "25/5/2024",
    duration: "3 Weeks (5/7/2023 - 26/7/2023)",
    salary: "1500 AED",
  },
  {
    name: "Amr Fawzy",
    date: "30/5/2024",
    duration: "1 Week (10/7/2023 - 17/7/2023)",
    salary: "500 AED",
  },
  {
    name: "Hana Mansour",
    date: "5/6/2024",
    duration: "2 Weeks (15/7/2023 - 29/7/2023)",
    salary: "1000 AED",
  },
  {
    name: "Mohamed Eid",
    date: "10/6/2024",
    duration: "3 Weeks (20/7/2023 - 10/8/2023)",
    salary: "1500 AED",
  },
  {
    name: "Amal Ayman",
    date: "15/6/2024",
    duration: "1 Week (25/7/2023 - 1/8/2023)",
    salary: "500 AED",
  },
  {
    name: "Karim Mounir",
    date: "20/6/2024",
    duration: "2 Weeks (30/7/2023 - 13/8/2023)",
    salary: "1000 AED",
  },
  {
    name: "Sami Nasser",
    date: "25/6/2024",
    duration: "1 Week (5/8/2023 - 12/8/2023)",
    salary: "500 AED",
  },
  {
    name: "Maya Zaki",
    date: "30/6/2024",
    duration: "2 Weeks (10/8/2023 - 24/8/2023)",
    salary: "1000 AED",
  },
  {
    name: "Nada Zain",
    date: "5/7/2024",
    duration: "3 Weeks (15/8/2023 - 5/9/2023)",
    salary: "1500 AED",
  },
  {
    name: "Fadi Adnan",
    date: "10/7/2024",
    duration: "1 Week (20/8/2023 - 27/8/2023)",
    salary: "500 AED",
  },
  {
    name: "Laila Ayman",
    date: "15/7/2024",
    duration: "2 Weeks (25/8/2023 - 8/9/2023)",
    salary: "1000 AED",
  },
  {
    name: "Adel Anwar",
    date: "20/7/2024",
    duration: "1 Week (30/8/2023 - 6/9/2023)",
    salary: "500 AED",
  },
  {
    name: "Farah Hany",
    date: "25/7/2024",
    duration: "2 Weeks (5/9/2023 - 19/9/2023)",
    salary: "1000 AED",
  },
];

const itemsPerPage = 6;
const totalPages = Math.ceil(data.length / itemsPerPage);

function loadPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = data.slice(start, end);

  const pageContent = document.getElementById("page-content");
  pageContent.innerHTML = "";

  pageData.forEach((item) => {
    const card = document.createElement("div");
    card.className = " col-md-4";
    card.innerHTML = `
      <div class="card">
        <div class="d-flex flex-column">
          <div class="id d-flex align-items-center flex-column">
            <img src="img/avatar1.jpg" alt="avatar" class="mb-1" />
            <h4>${item.name}</h4>
          </div>
          <div class="cardinfo">
          <div class="info ms-4">
            <div class="mb-2">
              <p class="header">Submitted on:</p>
              <p>${item.date}</p>
            </div>
            <div>
              <p class="header">Duration:</p>
              <p>${item.duration}</p>
            </div>
            <div class="mt-2">
              <p class="header">Salary:</p>
              <p>${item.salary}</p>
            </div>
          </div>
             <div class="buttons d-flex flex-column-reverse justify-content-between mt-3 mx-4">
          <button class="btn btn-decline">Decline</button>
          <button class="btn btn-approve text-white">Approve</button>
        </div>
        </div>
        </div>
     
      </div>
    `;
    pageContent.appendChild(card);
  });
}

function paginationload(totalPages) {
  const countscontent = document.getElementById("pagination");
  countscontent.innerHTML = ""; // تفريغ المحتوى الحالي

  for (let i = 1; i <= totalPages; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("page-item");

    const link = document.createElement("a");
    link.classList.add("page-link");
    link.href = "#";
    link.dataset.page = i; // تعيين البيانات للصفحة
    link.textContent = i; // عرض رقم الصفحة

    listItem.appendChild(link);
    countscontent.appendChild(listItem);
  }

  // تعليق أحداث النقر بعد توليد الترقيم
  document.querySelectorAll(".page-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const page = this.getAttribute("data-page");
      loadPage(page);
    });
  });
}

// نداء الوظيفة مع العدد المحسوب مسبقًا للصفحات
paginationload(totalPages);

// تحميل الصفحة الأولى عند البداية
loadPage(1);

let filteredData = [...data];

function displayData(dataToDisplay) {
  const pageContent = document.getElementById("page-content");
  pageContent.innerHTML = ""; // تفريغ المحتوى الحالي

  dataToDisplay.forEach((item) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
    <div class="card" >
      <div class="d-flex flex-column">
        <div class="id d-flex align-items-center flex-column">
          <img src="img/avatar1.jpg" alt="avatar" class="mb-1" />
          <h4>${item.name}</h4>
        </div>
        <div class="cardinfo">
        <div class="info ms-4">
          <div class="mb-2">
            <p class="header">Submitted on:</p>
            <p>${item.date}</p>
          </div>
          <div>
            <p class="header">Duration:</p>
            <p>${item.duration}</p>
          </div>
          <div class="mt-2">
            <p class="header">Salary:</p>
            <p>${item.salary}</p>
          </div>
        </div>
           <div class="buttons d-flex flex-column-reverse justify-content-between mt-3 mx-4">
        <button class="btn btn-decline">Decline</button>
        <button class="btn btn-approve text-white">Approve</button>
      </div>
      </div>
      </div>
   
    </div>
  `;
    pageContent.appendChild(card);
  });
}

document.getElementById("search-input").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();

  // تصفية البيانات
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );
  document.getElementById("pagination").style.display = "none";

  // عرض البيانات المفلترة فقط
  displayData(filteredData);
  if (this.value === "") {
    loadPage(1);
    document.getElementById("pagination").style.display = "flex";
  }
});

function toggleSelectAll() {
  const selectAllCheckbox = document.getElementById("select-all");
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (selectAllCheckbox.checked) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const cardElements = document.querySelectorAll(".card");

  cardElements.forEach(function (cardElement) {
    cardElement.addEventListener("click", function () {
      this.classList.toggle("selected");
    });
  });
});
