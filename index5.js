/* Ansert To the Question No-7 */

function findMaxValue(arr) {
  return Math.max(...arr);
}

const numbers = [10, 5, 90, 35, 23];
console.log(findMaxValue(numbers));
/* Part 2 */

function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}
function sortStudentsByAverage(students) {
  return students.sort((a, b) => {
    const avarageA = calculateAverage(a.grades);
    const avarageB = calculateAverage(b.grades);
    return avarageB - avarageA;
  });
}

const students = [
  { name: "Arfin", grades: [85, 90, 92] },
  { name: "Rony", grades: [78, 80, 84] },
  { name: "Shadman", grades: [90, 95, 98] },
];
const sortedStudents = sortStudentsByAverage(students);
console.log(sortedStudents);
