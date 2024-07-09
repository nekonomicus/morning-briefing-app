import React, { useState } from 'react';

const Step2Anamnesis = ({ onSubmit, prevStep }) => {
  const [anamnesis, setAnamnesis] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ anamnesis });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Anamnesis</h2>
      <textarea
        value={anamnesis}
        onChange={(e) => setAnamnesis(e.target.value)}
        placeholder="Enter patient's anamnesis"
        required
      />
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2Anamnesis;
