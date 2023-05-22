let questionThree = prompt(
  "Would you like to average the scores for each student? Y/N"
);

const aliScores = [95, 86, 83, 81, 76];
const khaledScores = [79, 71, 79, 87, 72];
const maisScores = [94, 87, 87, 83, 82];
const waedScores = [99, 77, 91, 79, 80];
const mazenScores = [96, 95, 99, 82, 70];

const getStAverage = (array) => {
  const sum = array.reduce((total, cur) => total + cur);
  return sum / array.length;
};
const aliAvg = getStAverage(aliScores);
const khaledAvg = getStAverage(khaledScores);
const maisAvg = getStAverage(maisScores);
const waedAvg = getStAverage(waedScores);
const mazenAvg = getStAverage(mazenScores);
if (questionThree == "Y") {
  console.log(aliAvg);
  console.log(khaledAvg);
  console.log(maisAvg);
  console.log(waedAvg);
  console.log(mazenAvg);
}

export default questionThree;
