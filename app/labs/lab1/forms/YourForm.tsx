export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Text Fields</h5>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input type="text" defaultValue="Krish" id="wd-your-first-name" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input type="text" defaultValue="Nagaral" id="wd-your-last-name" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input type="password" defaultValue="002514788" id="wd-your-student-id" />
      <br />

      <h5>Text boxes</h5>
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={30}
        rows={5}
        defaultValue="I want to learn the basics and fundamentals behind how every website works. Recently I've started exploring LLMs as well, and I'm excited to understand all of this more deeply."
      />
      <br />

      <h5>Radio buttons</h5>
      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      <label>Enrollment status:</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <h5>Checkboxes</h5>
      <label>Interests:</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-ai-ml"
        defaultChecked
      />
      <label htmlFor="wd-your-ai-ml">AI/ML</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-python"
        defaultChecked
      />
      <label htmlFor="wd-your-python">Python</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-langchain"
        defaultChecked
      />
      <label htmlFor="wd-your-langchain">LangChain</label>
      <br />

      <h5>Dropdowns</h5>
      <label htmlFor="wd-your-major">Major / college: </label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="CE">Computer Engineering</option>
        <option value="BUS">Business</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term: </label>
      <br />
      <select multiple id="wd-your-topics" defaultValue={["AI", "WEBDEV"]}>
        <option value="AI">AI</option>
        <option value="WEBDEV">Web Development</option>
        <option value="DATABASES">Databases</option>
        <option value="VERIFIABLE_ML">Verifiable ML</option>
      </select>
      <br />

      <h5>Other field types</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        defaultValue="nagaral.k@northeastern.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        defaultValue="2027"
        min={2025}
        max={2030}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-birthday">Birthday: </label>
      <input type="date" defaultValue="2002-05-31" id="wd-your-birthday" />
      <br />
      <label htmlFor="wd-your-excitement">Excitement about the course: </label>
      <input
        type="range"
        defaultValue="9"
        min="0"
        max="10"
        id="wd-your-excitement"
      />
      <br />

      <button id="wd-your-button-save" type="submit">
        Save
      </button>
      <button id="wd-your-button-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
