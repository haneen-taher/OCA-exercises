let questionTwo = prompt(
  "Would you like to average the scores for each test? Y/N"
);

const mathScores = [95, 79, 94, 99, 96];
const scienceScores = [86, 71, 87, 77, 95];
const codingScores = [83, 79, 87, 91, 99];
const fitnessScores = [81, 87, 83, 79, 82];
const communicationScores = [76, 72, 82, 80, 70];

const getAverage = (array) => {
  const sum = array.reduce((total, cur) => total + cur);
  return sum / array.length;
};
const mathAvg = getAverage(mathScores);
const scienceAvg = getAverage(scienceScores);
const codingAvg = getAverage(codingScores);
const fitnessAvg = getAverage(fitnessScores);
const communicationAvg = getAverage(communicationScores);
if (questionTwo == "Y") {
  console.log(mathAvg);
  console.log(scienceAvg);
  console.log(codingAvg);
  console.log(fitnessAvg);
  console.log(communicationAvg);
}

export default questionTwo;
