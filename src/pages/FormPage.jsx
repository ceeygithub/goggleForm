import React, { useState } from 'react';
import './Form.css';
// import Response from './Response';

const FormPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <div className="container">
        <header>
          <h1 id="title">Psychometric Test</h1>
          <p id="description">Thank you for taking the time to answer our questions</p>
        </header>
        <main>
          <iframe
            className='response'
            title='response'
            name='response'
            style={{ display: 'none' }}
            onLoad={() => {
              if (submitted) {
                window.location = '/response';
              }
            }}
          ></iframe>
          <form
            id="survey-form"
            action="https://docs.google.com/forms/d/e/1FAIpQLSf_r4_1ait2ouu9SxOSwU1g7K30FMdQ_j8MJhHtxNiQgjxy9w/formResponse"
            method="post"
            target='response'
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" id="name-label">What is your name?
              <input
                id="name"
                type="text"
                name="entry.821976611"
                placeholder="Enter your Name"
                required
              />
            </label>
            <label htmlFor="text" id="email-label">Why are you here?
              <input
                id="text"
                type="text"
                name="entry.1229781026"
                required
              />
            </label>
            <label htmlFor="number" id="number-label">What is your goal?
              <input
                id="number"
                type="text"
                name="entry.61730274"
              />
            </label>

            <button type='submit' id="submit">Submit</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default FormPage;
