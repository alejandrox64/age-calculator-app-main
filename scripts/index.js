const birthDay = document.getElementById("date-day");
const birthMonth = document.getElementById("date-month");
const birthYear = document.getElementById("date-year");

const button = document.querySelector(".button");

const year = document.querySelector(".year");
const month = document.querySelector(".months");
const day = document.querySelector(".days");

button.addEventListener("click", () => {
    const birthDate = new Date(
        birthYear.value,
        birthMonth.value - 1,
        birthDay.value
      );
    
      const currentDate = new Date();
    
      const ageInMilliseconds = currentDate - birthDate;
      const ageDate = new Date(ageInMilliseconds);
    
      year.textContent = Math.abs(ageDate.getUTCFullYear() - 1970);
      month.textContent = ageDate.getUTCMonth();
      day.textContent = ageDate.getUTCDate();
})

