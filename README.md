# Todo List Application

This is a Todo List application built using React, Redux, and Material-UI. It allows users to manage tasks with functionalities such as adding, viewing, editing, deleting, and marking tasks as completed.

## Features

- Add a new task.
- View all tasks in a list format.
- Delete tasks from the list.
- Edit tasks directly from the list.
- Mark tasks as completed without deleting.
- Persist tasks in local storage for data persistence across page reloads.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/tjmanoj/todo-app.git
    ```

2. Navigate into the project directory:

    ```bash
    cd todo-app
    ```

3. Install dependencies:

    ```bash
    npm install
    npm install @reduxjs/toolkit react-redux @mui/material @emotion/react @emotion/styled @mui/icons-material
    ```
4. Run the application:

    ```bash
    npm start
    ```

## Project Structure

![Project Structure](https://res.cloudinary.com/dejvgjqgh/image/upload/v1719997216/project_structure_pqnd4u.png)

# Functionality

## Adding a Task
- Enter a task description into the input field under "Add a new task".
- Press the "Add Task" button or hit Enter to add the task to the list.

## Viewing Tasks
- All added tasks are displayed in a list format under the input field.

## Deleting a Task
- Each task in the list has a delete button (trash icon). Clicking this button will remove the task from the list.

## Editing a Task
- Each task in the list has an edit button (pencil icon). Clicking this button will open a dialog box where you can edit the task's description.
- Click "Save" to save the edited task or "Cancel" to discard changes.

## Marking a Task as Completed
- Each task in the list has a checkbox. Check or uncheck the checkbox to mark the task as completed or incomplete, respectively.
- Completed tasks are displayed with a strikethrough text decoration.

## Persisting Tasks
- Tasks are saved to local storage, allowing them to persist even after the page is reloaded.

# Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Material-UI**: A popular React UI framework for designing applications with a unified design language.


## Live Demo
A live demo of the application can be accessed [here](https://tjtodoapp.ccbp.tech/).
