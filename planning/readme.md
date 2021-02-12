# Project 3 - Hustle Busters

## Links

- [Backend Repo](https://github.com/gbarka2/be-hustle-busters)
- [Frontend Repo](https://github.com/gbarka2/fe-hustle-busters)
- [Netlify](https://hustlebusters.netlify.app/)
- [Heroku](https://hustle-busters.herokuapp.com/leads)

## General Approach

Welcome to Hustle Busters! This app is designed to mimic the functionality of the well-know sales-tracking app Salesforce. Hustle Busters features a login page, a profile page to see your assigned leads, a page to see all leads across the company, and a page to see all leads by division of the company.

Our approach was to divide and conquer the setup phase by splitting three ways: one backend engineer, one frontend engineer, and one fullstack. After completion of the setup, we all came together to build the front end and close out tasks of the project.

During the front end build, we assigned ourselves tasks to complete such as the user registration form and the search functionality. Once a task was complete, their Git branch was merged with a development branch and pulled down by the other teammates to continue working on their task at hand.

## User Stories

| User Story | Frontend | Backend |
|---|---|---|
| User logs in | Data request via form | Get route /:username in the username db |
| User can see their list of leads | Data request for all leads filtered by username | Get route /:username in the leads db |
| User can select a lead | Data request for one lead filtered by id | Get route /:id in the leads db |
| User can create lead | Data create for new lead via form | Create route in lead db |
| User can create lead | Data create for new lead via form | Create route in lead db |
| User can delete lead profile | Data destroy by id | Delete route in the lead db |
| User can see all leads from division | Data request for all leads from division | Get route /:division from company db |
| User can see all companies and their leads | Data request for all leads company wide | Get route /:company from company db |

## React Architecture

- [React Architecture](https://trello-attachments.s3.amazonaws.com/601c812215d67e7ea1fac187/601c8803a9931360b1832d5d/91e856d6ee4fee7f2524e48bb5b5f948/Snip20210205_3.png)

## Wireframes

- [Main Wireframe](https://xd.adobe.com/view/77902926-2061-4eeb-a597-df0772f90e7e-22c3/)
- [Styling Wireframe](https://trello-attachments.s3.amazonaws.com/601c812215d67e7ea1fac187/601c87fd93fa5145d09b1a3e/406960ba99effdfb3db1e4411910042a/Router_%E2%80%9C-%E2%80%9C.png)
- [More Styling](https://trello-attachments.s3.amazonaws.com/601c812215d67e7ea1fac187/601c87fd93fa5145d09b1a3e/a610761e8a7330ad181ee6c737aef2e6/Router_%E2%80%9C-user%E2%80%9D.png)


## MVP - COMPLETE

- Fetch Data of Users, Leads, and Companies
- Get Backend Connection, Server, Models, and Routes running.
- Render Data onto React Front End.
- Allow User to interact with all Forms: Log-in, Create-lead, Edit-lead, Search-user.
- Allow User to Interact with Responsive Design
- Mobile, Tablet, and Desktop Responsive
- Deployed via Netlify and Heroku
- Basic Css Styling


## Post MVP

| Project | Status |
|---|---|
| Create a login function to enter app | Incomplete |
| Create search function by lead in the my-profile route | COMPLETE | 
| Create search function by lead in the all-leads route | Incomplete |
| Create search function by division in the division-leads route | Incomplete |
| Build table to house leads | Incomplete |
| Add component to see lead profile | Incomplete |
| Add user effects and animations | Incomplete |

## Time Table

| Task | Priority | EstimatedTime | ActualTime |
|---|---|---|---|
| Set up backend database boilerplate | H | 1hr | 30min |
| Create preliminary schemas | H | 2hr | 2hr |
| Set up frontend boilerplate | H | 1hr | 1hr |
| Render preliminary routes and components | H | 1hr | 2hr |
| Deploy backend to Heroku | H | 1hr | 30min |
| Deploy frontend to Netlify | H | 1hr | 30min |
| Styling of Nav | H | 1hr | 5hr |
| Render leads data to company leads component | H | 3hr | 3hr |
| Render leads data to division leads component | H | 2hr | 5hr |
| Render leads data to user leads component | H | 2hr | 1hr |
| Create userLogin/newUser in Login component | M | 2hr | 16hr |
| Enable a search function Company | H | 3hr | 4hr |
| Enable a search function in User | H | 2hr | 4hr |
| Enable a search function in Division | H | 2hr | 0hr |
| Enable update of leads | H | 3hr | 5hr |
| Enable update of user | H | 3hr | 0hr |
| Render About Page | L | 1hr | 4hr |
| Enable responsive design | H | 4hr | 3hr |
| CSS additions | H | 6hr | 11hr |
| TOTAL |  | 41hr | 67.5hr |

## Unsolved Problems
|Error|
|---|
| Two search components used, however the search by division became corrupted after a merge. Unable to resolve at publication |
| User Authentication working on backend, but ran out of time to problem solve the issues surrounding the front end |
| CSS on React Bootstrap components was difficult to style |


## Resolved Problems

| Error | Resolution |
|---|---|
| Search function unable to set the state of the selected lead | Created a new state and applied to search function |
| Unable to update lead | Error in the props pass down causing the props to fail |
| Unable to delete lead | Error in the props pass down causing the props to fail |
| Shoelace components not working | Does not work well with React and switched to React Bootstrap |
| React Strap not installing | Switched to React Bootstrap |

## Post-Project Questions

| Questions |
|---|
| How do professional teams document their code in a way that all team members use the same naming conventions, formatting, ect? |

## Credits

- Huge thanks to Alex Merced for his instructional videos and the GA TAs!
- React Bootstrap