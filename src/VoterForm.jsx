import { useState } from "react";
import Vote from "./Vote.jsx";
import sampleVoters from './data.jsx';

const votedUsers = new Set(); // Create a Set to track users who have voted

export default function VoterForm() {
  const [formData, setFormData] = useState({
    name: "",
    roll_no: "",
  });

  const [showVotingPanel, setShowVotingPanel] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Added error message state

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user exists in sampleVoters
    const userExists = sampleVoters.some(
      (voter) => voter.name === formData.name && voter.roll_no === formData.roll_no
    );

    // Check if the user has already voted
    const userKey = `${formData.name}-${formData.roll_no}`;
    const hasVoted = votedUsers.has(userKey);

    if (userExists && !hasVoted) {
      setShowVotingPanel(true); // Corrected state variable name
      setErrorMessage(""); // Clear error message if user exists
      votedUsers.add(userKey); // Mark user as voted
    } else if (hasVoted) {
      setErrorMessage("You have already voted.");
    } else {
      setErrorMessage("User not found. Please check your name and roll number.");
    }
  };

  return (
    <>
      {showVotingPanel ? (
        <Vote />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="roll_no">Roll no : </label>
            <input
              type="text"
              id="roll_no"
              name="roll_no"
              value={formData.roll_no}
              onChange={handleChange}
              required
            />
          </div>
          <button type="Submit">Submit</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
      )}
    </>
  );
}
