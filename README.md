# To-Do App 📝

A simple and responsive to-do list application built with React and Redux Toolkit, featuring task prioritization, persistent storage, and user authentication.

## Features

- **Add Tasks**: Easily add tasks to your to-do list with a simple input field.
- **View Tasks**: Displays all tasks with their priority (High, Medium, Low).
- **Search Tasks**: Displays all tasks based on Search Query.
- **Shorting Tasks**: Displays all tasks based on Shorting (All Tasks, Completed Tasks, Pending Tasks).
- **Delete Tasks**: Remove tasks with a single click.
- **Task Prioritization**: Set priority levels for tasks (High, Medium, Low).
- **Mark as Completed**: Mark tasks as completed and filter them.
- **Persistent Storage**: Tasks are saved using local storage to persist across sessions.
- **User Authentication**: Simulated login/logout functionality using Redux.
- **API Integration**: Integrated with a public API (e.g., weather API) to display relevant data for outdoor tasks.
- **Mobile-First Design**: Fully responsive and optimized for mobile, tablet, and desktop views.
- **Dark or Light Mode**: Toggle between light and dark themes.
- **Grid or List Mode**: Toggle between Grid and List Mode Tasks Views.

## Demo

Check out the live demo: [Live Demo Link](https://todosite124.netlify.app/)

## Screenshots
#### Light Mode
![Screenshot 1](./src/screenshots/screenshot1.png)
![Screenshot 2](./src/screenshots/screenshot2.png)
![Screenshot 3](./src/screenshots/screenshot3.png)
![Screenshot 4](./src/screenshots/screenshot4.png)

#### Dark Mode
![Dark Screenshot 1](./src/screenshots/dark1.png)
![Dark Screenshot 2](./src/screenshots/dark2.png)
![Dark Screenshot 3](./src/screenshots/dark3.png)

#### Other Screenshots
![Other Screenshot 1](./src/screenshots/1.png)
![Other Screenshot 2](./src/screenshots/2.png)
![Other Screenshot 3](./src/screenshots/3.png)


## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed (version 12 or above)
- npm or yarn installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/a2istogether/todo.git
   cd todo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or if you use yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or:

   ```bash
   yarn run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Add a Task**: Enter your task in the input field and press the "Add Task or Press Enter" button.
- **Set Task Priority**: Choose a priority level from the dropdown when adding or editing tasks.
- **Mark as Completed**: Click the checkbox next to a task to mark it as completed.
- **Delete a Task**: Click the delete icon next to the task you want to remove.
- **Login**: Use the simulated login feature to protect tasks behind authentication.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Redux Toolkit**: For state management, including handling async actions.
- **Tailwind CSS**: For responsive and modern styling.
- **Axios**: For making API requests.
- **React-Icons**: For icons used in the app.

## API Integration

This app integrates with the **Weatherapi API** to display weather information for outdoor tasks. You can replace the API key in `src/components/WeatherInfo.jsx` to use your own.

```javascript
const API_KEY = 'your-weatherapi-api-key';
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
