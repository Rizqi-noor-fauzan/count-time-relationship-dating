let inputDate = document.getElementById("date");
inputDate.max = new Date().toISOString().split("T")[0];
let resultData = document.getElementById("result");

const countRelationship = () => {
  let datingDate = new Date(inputDate.value);

  let dayDating = datingDate.getDate();
  let monthDating = datingDate.getMonth() + 1;
  let yearDating = datingDate.getFullYear();

  let today = new Date();

  let thisDay = today.getDate();
  let thisMonth = today.getMonth() + 1;
  let thisYear = today.getFullYear();

  if (!inputDate.value) {
    alert("Please select a valid date.");
    return;
  }

  let dayResult, monthResult, yearResult;

  yearResult = thisYear - yearDating;

  if (thisMonth >= monthDating) {
    monthResult = thisMonth - monthDating;
  } else {
    yearResult--;
    monthResult = 12 + thisMonth - monthDating;
  }

  if (thisDay >= dayDating) {
    dayResult = thisDay - dayDating;
  } else {
    monthResult--;
    dayResult = getDaysInMonth(thisYear, thisMonth - 1) + thisDay - dayDating;
  }

  if (monthResult < 0) {
    monthResult += 12;
    yearResult--;
  }

  resultData.innerHTML = `
      <h3 class="text-white text-xl mt-4 md:text-2xl">
            Your Relationship has lasted for
          </h3>
          <div class="flex items-center gap-x-2 text-white">
            <span class="text-yellow-400 text-xl">${yearResult}</span>
            Years
            <span class="text-yellow-400 text-xl">${monthResult}</span>
            Months
            <span class="text-yellow-400 text-xl">${dayResult}</span>
            Days ❤️
          </div>

  `;
  runConfetti();
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const runConfetti = () => {
  let xPosition = window.innerWidth < 640 ? 0.5 : 0.3; // Jika layar < 640px, confetti lebih ke kiri

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: xPosition, y: 0.6 }, // Atur posisi berdasarkan layar
  });
};
