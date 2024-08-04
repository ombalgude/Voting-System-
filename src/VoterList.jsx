import React from 'react';
import sampleVoters from '../../init/data'; // Adjust the path as needed

const VoterList = () => {
  return (
    <div>
      <h2>Voter List</h2>
      <ul>
        {sampleVoters.map((voter, index) => (
          <li key={index}>
            {voter.name} - {voter.roll_no}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoterList;
