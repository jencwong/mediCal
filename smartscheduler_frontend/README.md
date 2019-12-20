# mediCal (Front-end)

## Created and developed by: Seymur Mammadov, Paul Raucci, Jennie Wong, and Kathryn Zaharek

mediCal is a light weight scheduling app for patients to schedule their own appointments, and for doctors to see the list of patients they have scheduled for any given day.

[Link to live client](http:......)

screenshots here.....
![screenshot of app](screenshot-01.png "Screenshot 1")
![screenshot of app](screenshot-02.png "Screenshot 2")
![screenshot of app](screenshot-03.png "Screenshot 3")

The landing page introduces the user to the scheduling application. A link leads the user to a login and signup page which is the gateway to patient and doctor dashboards. Patients are brought to dashboard where they can schedule new, see existing, edit or delete appointments; doctors will be brought to a separate dashboard with current and upcoming appointments as well as messages from patients.

## Features (Patient)

- Patients can view, edit and delete current appointments; Schedule a new appointment; and View or edit their user profile.
- When adding a new appointment, patients select the general reason for the visit and add additional information as desired to help doctors quickly assess the patients needs.
- Upon hovering over an exisiting appointment, patients are presented with a dynamically updated display of the appointment details.
- Buttons for logout and user profile are available in the navigation. Upon clicking the 'User Profile' button, a modal pops up for the user to view and edit their information.

## Features (Doctor)

- Doctor logs in as an admin and will be automatically routed to the Admin Dashboard
- On the Dashboard, all the appointments will be displayed.
- Upon hovering over a specific appointment, the appointment card will display the details of the appointment such as the appointment date, time and visit type.

## Approach

- The project was a team effort. Upon formation of the team, we gathered and discussed ideas. A rough sketch of the application was drawn and high level requirements written. We decided to set up a basic application and identified features for phase 2 or phase 3 of the project. We used Trello to track our progress. We collaborated or divided up work as we went along.

## Technologies

- Node.js
- React
- MongoDB
- CSS / Bootstrap / Material UI

## API/ Backend Server

- [https://....-backend-api.herokuapp.com/](https://....-backend-api.herokuapp.com/)
- [Github Link](https://github.com/....)

## Future Improvements

- Patient Dashboard
- Calendar that displays days that are booked and days that have availability.
- Ability for patients to select a calendar day, view available times, and select a day and time for their next appointment.
- Within edit, patients can view a calendar and select another day and time from the available options.
- Add payment options for appointments.
