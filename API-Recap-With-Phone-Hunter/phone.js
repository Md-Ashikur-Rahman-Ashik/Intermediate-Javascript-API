// console.log("Phone Hunting");

const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(data);
  // console.log(data.data);
  // console.log(phones);
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  // console.log(phones);
  const containerPhone = document.getElementById("phoneContainer");
  containerPhone.textContent = "";
  //   console.log(phones.length);

  //   Display show all button, if there are more than 12 phones
  const allContainer = document.getElementById("showAllContainer");
  if (phones.length > 12 && !isShowAll) {
    allContainer.classList.remove("hidden");
  } else {
    allContainer.classList.add("hidden");
  }

//   console.log("Is Show All?", isShowAll);s

  //   Display first 12 phones
  if(!isShowAll){
    phones = phones.slice(0, 12);
    // allContainer.classList.add("hidden");
  }

  phones.forEach((phone) => {
    console.log(phone);

    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;
    phoneCard.innerHTML = `
        <figure>
        <img
          src="${phone.image}"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-center">
          <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
      </div>
        `;

    containerPhone.appendChild(phoneCard);
  });

  //   Hide loading Spinner
  toggleLoadingSpinner(false);
};

// Handle search button
const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  // console.log("Search Handle");
  const fieldSearch = document.getElementById("searchField");
  const searchText = fieldSearch.value;
  //   console.log(searchText);
  loadPhone(searchText, isShowAll);
};

// const handleSearchTwo = () => {
//   toggleLoadingSpinner(true);
//   const fieldSearch = document.getElementById("searchFieldTwo");
//   const searchText = fieldSearch.value;

//   loadPhone(searchText);
// };

// loadPhone();

const toggleLoadingSpinner = (isLoading) => {
  const spinnerLoading = document.getElementById("loadingSpinner");
  if (isLoading) {
    spinnerLoading.classList.remove("hidden");
  }
  else{
    spinnerLoading.classList.add("hidden");
  }
};

// Handle show all
// let count = 0;
const handleShowAll = () => {
    handleSearch(true);
    // const allContainer = document.getElementById("showAllContainer");
    // allContainer.classList.add("hidden");
    // count++;
    // if(count >= 1){
    //     allContainer.classList.add("hidden");
    // }
}

const handleShowDetail = async(id) => {
    // console.log("Clicked", id);
    // Load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data);
}