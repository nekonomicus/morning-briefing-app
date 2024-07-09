import React, { useState } from 'react';

const Step4Examination = ({ onSubmit, prevStep }) => {
  const [examination, setExamination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ examination });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Examination Findings</h2>
      <textarea
        value={examination}
        onChange={(e) => setExamination(e.target.value)}
        placeholder="Enter examination findings"
        required
      />
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step4Examination;
