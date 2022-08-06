function findLowestScoringStudent(students) {
  const lowest = students.sort((a, b) => a.score - b.score);
  if (students.length == 0) return null;
  return lowest[0];
}

module.exports = findLowestScoringStudent;
