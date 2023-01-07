// Step 2
const billing = document.querySelector(".switch-checkbox");

const arcadePrice = document.querySelector(".arcade .price");
const arcadeBonus = document.querySelector(".arcade .bonus");

const advancedPrice = document.querySelector(".advanced .price");
const advancedBonus = document.querySelector(".advanced .bonus");

const proPrice = document.querySelector(".pro .price");
const proBonus = document.querySelector(".pro .bonus");

const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");

// const arcadeBtn = document.querySelector(".arcade-btn");
// const advancedBtn = document.querySelector(".advanced-btn");
// const proBtn = document.querySelector(".pro-btn");

const plans = document.querySelector(".plans");

//plan selection
plans.addEventListener("click", (event) => {
  let plan = "";
  resetPlans("arcade");
  resetPlans("advanced");
  resetPlans("pro");

  //check which plan is selected
  if (
    event.target.classList.contains("arcade") ||
    event.target.parentElement.classList.contains("arcade") ||
    event.target.parentElement.parentElement.classList.contains("arcade")
  ) {
    plan = "arcade";
  } else if (
    event.target.classList.contains("advanced") ||
    event.target.parentElement.classList.contains("advanced") ||
    event.target.parentElement.parentElement.classList.contains("advanced")
  ) {
    plan = "advanced";
  } else if (
    event.target.classList.contains("pro") ||
    event.target.parentElement.classList.contains("pro") ||
    event.target.parentElement.parentElement.classList.contains("pro")
  ) {
    plan = "pro";
  }

  //mark selected plan
  markSelectedPlan(plan);
});

function resetPlans(plan) {
  const card = document.querySelector(`.${plan}`);
  card.classList.add("border-slate-300");
  card.classList.remove("border-marine-blue");
  card.classList.remove("bg-magnolia");
}

function markSelectedPlan(plan) {
  const card = document.querySelector(`.${plan}`);
  card.classList.remove("border-slate-300");
  card.classList.add("border-marine-blue");
  card.classList.add("bg-magnolia");
}

//billing switch check
billing.addEventListener("change", function () {
  if (this.checked) {
    arcadePrice.innerHTML = "$90/yr";
    advancedPrice.innerHTML = "$120/yr";
    proPrice.innerHTML = "$150/yr";

    arcadeBonus.classList.remove("hidden");
    advancedBonus.classList.remove("hidden");
    proBonus.classList.remove("hidden");

    monthly.classList.remove("text-marine-blue");
    monthly.classList.remove("font-extrabold");

    yearly.classList.add("text-marine-blue");
    yearly.classList.add("font-extrabold");
  } else {
    arcadePrice.innerHTML = "$9/mo";
    arcadeBonus.classList.add("hidden");

    advancedPrice.innerHTML = "$12/mo";
    advancedBonus.classList.add("hidden");

    proPrice.innerHTML = "$15/mo";
    proBonus.classList.add("hidden");

    monthly.classList.add("text-marine-blue");
    monthly.classList.add("font-extrabold");

    yearly.classList.remove("text-marine-blue");
    yearly.classList.remove("font-extrabold");
  }
});
