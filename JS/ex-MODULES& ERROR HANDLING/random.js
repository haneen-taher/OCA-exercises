let questionFour = prompt("Would you like to select a random student? Y/N");

const student = ["Ali", "Khaled", "Mais", "Waed", "Mazen"];
const random = Math.floor(Math.random() * student.length);

if (questionFour == "Y") {
  console.log(random, student[random]);
}

export default questionFour;
