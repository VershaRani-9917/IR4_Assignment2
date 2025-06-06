import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [interests, setInterests] = useState([]);
  const [updates, setUpdates] = useState("");
  const [comments, setComments] = useState("");
  const [formData, setFormData] = useState(false);

  const handleInterestsChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((item) => item !== value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      setFormData(true);
    } else {
      event.target.reportValidity();
      setFormData(false);
    }
  };

  return (
    <main>
      <h1>Subscription Form</h1>
      <form onSubmit={formHandler}>
        <label>Full Name:</label>
       
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br />
        <br />

        <label>Email:</label>
       
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <br />

        <label>Subscription Plan:</label>
        
        <select
          value={plan}
          onChange={(event) => setPlan(event.target.value)}
          required
        >
          <option value="">Select Plan</option>
          <option value="Basic">Basic</option>
          <option value="Standard">Premium</option>
          <option value="Premium">Ultimate</option>
        </select>
        <br />
        <br />

        <label>Interests:</label>
        <br />
        <input
          type="checkbox"
          value="Technology"
          onChange={handleInterestsChange}
        />
        Technology
        <br />
        <input
          type="checkbox"
          value="Fitness"
          onChange={handleInterestsChange}
        />
        Fitness
        <br />
        <input
          type="checkbox"
          value="Cooking"
          onChange={handleInterestsChange}
        />
        Cooking
        <br />
        <br />

        <label>Want to Receive Updates:</label>
        <br />
        <input
          type="radio"
          name="updates"
          value="yes"
          onChange={(event) => setUpdates(event.target.value)}
          required
        />
        Yes
        <br />
        <input
          type="radio"
          name="updates"
          value="no"
          onChange={(event) => setUpdates(event.target.value)}
          required
        />
        No
        <br />
        <br />

        <label>Comments:</label>
        <br />
        <textarea
          rows="4"
          cols="40"
          value={comments}
          onChange={(event) => setComments(event.target.value)}
        ></textarea>
        <br />
        <br />

        <button type="submit">Subscribe</button>
        <br />
        <br />
      </form>

      {formData && (
        <div>
          <p>Full Name: {name}</p>
          <p>Email: {email}</p>
          <p>Subscription Plan: {plan.toLowerCase()}</p>
          <p>
            Interests:{" "}
            {interests.length > 0 ? interests.join(", ") : "none"}
          </p>
          <p>Want to receive updates: {updates}</p>
          <p>Comments: {comments ? comments : "none"}</p>
        </div>
      )}
    </main>
  );
}
