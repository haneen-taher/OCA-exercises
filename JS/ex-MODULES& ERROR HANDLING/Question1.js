let questionOne = prompt("Would you like to display all scores? Y/N");
if (questionOne == "Y") {
  console.log(people);
}

var people = [
  {
    name: "Ali",
    Math: 95,
    Science: 86,
    Coding: 83,
    Fitness: 81,
    Communication: 76,
  },
  {
    name: "Khaled",
    Math: 79,
    Science: 71,
    Coding: 79,
    Fitness: 87,
    Communication: 72,
  },
  {
    name: "Mais",
    Math: 94,
    Science: 87,
    Coding: 87,
    Fitness: 83,
    Communication: 82,
  },
  {
    name: "Waed",
    Math: 99,
    Science: 77,
    Coding: 91,
    Fitness: 79,
    Communication: 80,
  },
  {
    name: "Mazen",
    Math: 96,
    Science: 95,
    Coding: 99,
    Fitness: 82,
    Communication: 70,
  },
];

if (questionOne == "Y") {
  console.log(people);
}

export default questionOne;
//Error handling:
/*try {
  if (questionOne == "Y") {
    throw "questionOne is N";
  }
} catch (err) {
  alert("questionOne is Y");
} finally {
  alert("End");
}*/
