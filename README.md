# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

# Clarification Needed for Tech Task
I need some clarification regarding the tech task. Specifically, I’m unsure whether the task is to implement loopable pagination for:
1) Nested Pages:
    ```
    .
    └── one
        └── two
            └── three
                └── four
    ```
    In this scenario, a more appropriate approach might involve navigating using relative indices (e.g., navigate(-1)).
2) Horizontal Paths:
    ```.
    ├── four
    ├── one
    ├── three
    └── two

    ```
    For this layout, a different approach might be necessary, such as manipulating an array to handle pagination

The approach for each case differs significantly, so understanding the structure of the pages will guide the implementation method. I initially chose an array manipulation approach, but I want to confirm whether this aligns with the expected solution for the given structure.

