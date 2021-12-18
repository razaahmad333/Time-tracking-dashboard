const schedule = {
  daily: {
    work: {
      duration: 5,
      previous: 7,
    },
    play: {
      duration: 1,
      previous: 2,
    },
    study: {
      duration: 4,
      previous: 7,
    },
    exercise: {
      duration: 1,
      previous: 5,
    },
    social: {
      duration: 1,
      previous: 10,
    },
    selfCare: {
      duration: 2,
      previous: 11,
    },
  },
  weekly: {
    work: {
      duration: 32,
      previous: 36,
    },
    play: {
      duration: 10,
      previous: 8,
    },
    study: {
      duration: 13,
      previous: 19,
    },
    exercise: {
      duration: 11,
      previous: 18,
    },
    social: {
      duration: 21,
      previous: 23,
    },
    selfCare: {
      duration: 7,
      previous: 11,
    },
  },
  monthly: {
    work: {
      duration: 103,
      previous: 128,
    },
    play: {
      duration: 23,
      previous: 29,
    },
    study: {
      duration: 13,
      previous: 19,
    },
    exercise: {
      duration: 11,
      previous: 18,
    },
    social: {
      duration: 21,
      previous: 23,
    },
    selfCare: {
      duration: 11,
      previous: 18,
    },
  },
};

const cards = document.querySelectorAll(".card");

const gears = document.querySelectorAll(".gear");

Array.from(gears).forEach((gear) => {
  gear.addEventListener("click", () => {
    Array.from(gears).forEach((gear) => {
      gear.classList.remove("active");
    });
    gear.classList.add("active");

    const gearType = gear.innerHTML.toLocaleLowerCase();
    let lastThing = "";
    if (gearType === "daily") {
      lastThing = "Last Day";
    } else if (gearType === "weekly") {
      lastThing = "Last Week";
    } else if (gearType === "monthly") {
      lastThing = "Last Month";
    } else {
      lastThing = "Last Year";
    }
    changeCardData(lastThing, gearType);
  });
});

changeCardData("Last Week", "weekly");
function changeCardData(lastThing, gearType) {
  Array.from(cards).forEach((card) => {
    const duration = card.querySelector(".duration");
    const previous = card.querySelector(".previous");

    duration.innerHTML = schedule[gearType][card.id]["duration"] + "hrs";
    previous.innerHTML =
      lastThing + " - " + schedule[gearType][card.id]["previous"] + "hrs";
  });
}
