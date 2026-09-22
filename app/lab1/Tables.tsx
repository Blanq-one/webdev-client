const quizScores = [
  { quiz: "Q1", score: 88 },
  { quiz: "Q2", score: 92 },
  { quiz: "Q3", score: 75 },
  { quiz: "Q4", score: 64 },
  { quiz: "Q5", score: 97 },
  { quiz: "Q6", score: 81 },
  { quiz: "Q7", score: 70 },
  { quiz: "Q8", score: 85 },
  { quiz: "Q9", score: 90 },
  { quiz: "Q10", score: 78 },
];

export default function Tables() {
  const total = quizScores.reduce((sum, { score }) => sum + score, 0);
  const average = total / quizScores.length;

  return (
    <div id="wd-tables">
      <table>
        <thead>
          <tr>
            <th>Quiz</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {quizScores.map(({ quiz, score }) => (
            <tr key={quiz}>
              <td>{quiz}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Average</th>
            <td>{average.toFixed(1)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
