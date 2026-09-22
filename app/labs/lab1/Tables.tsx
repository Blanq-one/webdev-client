export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Next.js</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Node.js</td>
            <td align="center">3/10/21</td>
            <td align="right">80</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Databases</td>
            <td align="center">3/17/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">APIs</td>
            <td align="center">3/24/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Deployment</td>
            <td align="center">3/31/21</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Final Review</td>
            <td align="center">4/7/21</td>
            <td align="right">89</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">88.8</td>
          </tr>
        </tfoot>
      </table>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Game</th>
            <th align="center">Genre</th>
            <th align="center">Rating (out of 10)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Outlast</td>
            <td align="center">Horror</td>
            <td align="right">9.5</td>
            <td>Good graphics</td>
          </tr>
          <tr>
            <td>The Witcher 3</td>
            <td align="center">Action RPG</td>
            <td align="right">10</td>
            <td>Good graphics</td>
          </tr>
          <tr>
            <td>Assassin&apos;s Creed series</td>
            <td align="center">Action-Adventure</td>
            <td align="right">9</td>
            <td>Great graphics</td>
          </tr>
          <tr>
            <td>Ghost of Tsushima</td>
            <td align="center">Samurai / Action-Adventure</td>
            <td align="right">10</td>
            <td>Top tier graphics</td>
          </tr>
          <tr>
            <td>Black Myth: Wukong</td>
            <td align="center">Action RPG</td>
            <td align="right">8</td>
            <td>Top tier graphics</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
