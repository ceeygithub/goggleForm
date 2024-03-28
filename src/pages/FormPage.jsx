import React, { useState } from 'react';
import './Form.css';


const FormPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
     
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
            <label htmlFor="entry.61730274" id="number-label">What is your goal?
              <input
                id="number"
                type="text"
                name="entry.61730274"
              />
            </label>
             <fieldset>
            <label htmlFor='entry.520046930'>On a scale of 1 to 5, how much do you agree with the statement: "I enjoy meeting new people and socializing at events?</label>
        
           <label htmlFor="Strongly disagree"><input id="entry.520046930" type="radio" name="entry.520046930" value="Strongly disagree" /> Strongly disagree</label>
              <label htmlFor="Disagree"><input id="entry.520046930" type="radio" name="entry.520046930" value="Disagree" /> Disagree</label>
              <label htmlFor="Neutral"><input id="entry.520046930" type="radio" name="entry.520046930" value="Neutral" /> Neutral</label>
              <label htmlFor="Agree"><input id="entry.520046930" type="radio" name="entry.520046930" value="Agree" /> Agree</label>
              <label htmlFor="Strongly agree"><input id="entry.520046930" type="radio" name="entry.520046930" value="Strongly agree" /> Strongly agree</label>
          </fieldset>

           <fieldset>
            <label htmlFor='entry.1502698870'>
             A car travels at an average speed of 60 miles per hour. How far will it travel in 3 hours?
            </label>
          <label htmlFor="120 miles"><input id="entry.1502698870" type="checkbox" name="entry.1502698870" value="120 miles" /> 120 miles</label>
              <label htmlFor="150 miles"><input id="entry.1502698870" type="checkbox" name="entry.1502698870" value="150 miles" /> 150 miles</label>
              <label htmlFor="180 miles"><input id="entry.1502698870" type="checkbox" name="entry.1502698870" value="180 miles" /> 180 miles</label>
              <label htmlFor="200 miles"><input id="entry.1502698870" type="checkbox" name="entry.1502698870" value="entry.1502698870" /> 200 miles</label>
          </fieldset>

            <button type='submit' id="submit">Submit</button>
          </form>
        </main>

    </>
  );
};

export default FormPage;
