#MacPaw Summer Internship Submission

##About app
It has all functionality that was required in the task
1.  Getting the joke from the API based on selected option Random / Category / Search 
2.  Saving the joke to favorites which indicated later in the search list and saved after the browser reload
3.  Supports adaptive mobile and tablet layout 

##Preview
You can view live demo here https://gifted-poitras-b34645.netlify.app/

##Technology used 
The app is written with ReactJS without any additional libraries aside from React-testing-library for the unit test. All api requests are sent using `src/services/api-service.js`, all UI components located in the `src/components`. 

##Test coverage
Unfortunately I had almost no time for writing tests, so the only component that has them is `error`.

##To run project  
npm start 

##To run tests 
npm test

