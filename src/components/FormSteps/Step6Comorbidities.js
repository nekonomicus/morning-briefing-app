import React, { useState } from 'react';

const Step5History = ({ onSubmit, prevStep }) => {
  const [history, setHistory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ history });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Relevant History</h2>
      <textarea
        value={history}
        onChange={(e) => setHistory(e.target.value)}
        placeholder="Enter relevant patient history"
        required
      />
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step5History;
