import React from 'react';

function ResearchList() {
  const research = ['Research1', 'Research2'];

  return (
    <div className="research-list">
      <h2>Ongoing Research</h2>
      <ul>
        {research.map((research, index) => (
          <li key={index}>{research}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResearchList;