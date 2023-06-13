const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const form = document.querySelector("form");
const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");
const invalid = document.querySelectorAll(".invalid");
const isRequired = document.querySelectorAll(".isRequired");
const outputAge = document.querySelectorAll(".output__numbers");

input.forEach((e) => {
  e.addEventListener("input", (e) => {
    label.forEach((e) => e.classList.remove("errorColor"));
    invalid.forEach((e) => e.classList.remove("display"));
    day.classList.remove("error");
    month.classList.remove("error");
    year.classList.remove("error");

    if (e.target.id == "day" && e.target.value != "") {
      if (e.target.value <= 0 || e.target.value > 31) {
        day.classList.add("error");
        label[0].classList.add("errorColor");
        invalid[0].classList.add("display");
      }
    }
    if (e.target.id == "month" && e.target.value != "") {
      if (e.target.value > 12 || e.target.value < 1) {
        month.classList.add("error");
        label[1].classList.add("errorColor");
        invalid[1].classList.add("display");
      }
    }
    if (e.target.id == "year" && e.target.value != "") {
      let thisYear = new Date().getFullYear();
      if (e.target.value > thisYear) {
        year.classList.add("error");
        label[2].classList.add("errorColor");
        invalid[2].classList.add("display");
      }
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  label.forEach((e) => e.classList.remove("errorColor"));
  day.classList.remove("error");
  month.classList.remove("error");
  year.classList.remove("error");
  let element = e.currentTarget.elements;
  if (element[0].id == "day" && element[0].value != "") {
    if (element[0].value <= 0 || element[0].value > 31) {
      day.classList.add("error");
      label[0].classList.add("errorColor");
    }
  }
  if (element[0].id == "day" && element[0].value == "") {
    isRequired[0].classList.add("display");
  }
  if (element[1].id == "month" && element[1].value != "") {
    if (element[1].value > 12 || element[1].value < 1) {
      month.classList.add("error");
      label[1].classList.add("errorColor");
    }
  }
  if (element[1].id == "month" && element[1].value == "") {
    isRequired[1].classList.add("display");
  }
  if (element[2].id == "year" && element[2].value != "") {
    let thisYear = new Date().getFullYear();
    if (element[2].value > thisYear) {
      year.classList.add("error");
      label[2].classList.add("errorColor");
    }
  }
  if (element[2].id == "year" && element[2].value == "") {
    isRequired[2].classList.add("display");
  }
  calculateAge();
});

let s = new Date().getDate();
console.log(new Date().getDate());
function calculateAge() {
  let Day = new Date().getDate() - day.value;
  let Month = new Date().getMonth() - month.value + 1;
  let Year = new Date().getFullYear() - year.value;
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (new Date().getDate() < day.value) {
    Day = Day + months[Month - 1];
  }
  if (new Date().getMonth() < month.value) {
    Month = Month + 12;
    Year = Year - 1;
  }
  outputAge[2].innerText = Day;
  outputAge[1].innerText = Month;
  outputAge[0].innerText = Year;
}
