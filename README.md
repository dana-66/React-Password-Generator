the Prerequisites for this project are:
1. React.
2. Validator.
3. useState.


## Validator 
- the validator is a module and is popular for validation, and that process is necessary to check whether the data is correct or not.

- Validator Module Features:
    1. its easy to use, popular, and widely used.
    2. has simple functions for validation such as : isEmail(), isEmpty(), etc...

- how to install it :
1. 
    ```bash
        npm install validator
    ```
2. check the version: 
    ```bash
        npm version validator
    ```
3. After that, you can just create a folder and add a file for example index.js, To run this file you need to run the following command. and in this file it has all the validation rules ,functions 
    ```bash
        node index.js
    ```

--- make sure uou install the express module
    Express JS is a small framework that works on top of Node web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node HTTP objects and facilitates the rendering of dynamic HTTP objects.

- there are other modules available for validation like hapi-joi, express-validator.

---
## useState:
useState Hook is used to access state in the React Functional components. and its a special function that<strong> allows you to manage state within functional components </strong> without the need for class-based components.

- it lets you add <a href="https://www.geeksforgeeks.org/reactjs-state/" >state</a> to functional components. it provides a way to declare and manage state variables directly within a function component. it should be noted that one use of useState() can only ve used to declare one state variable.

- <strong>why Developers prefer Functional Programming ? </strong>
    1. Simplicity: due to their concise code. useStates simplifies state management.
    2. Avoiding Class Component.

- to import useState Hook :
    ```bash 
        import { useState } from 'react';
    ```

- the structure of useState hook:
    the hook takes some initial state and return 2 value. 
    - the First value contains the State, and the second value is the function that updates the state, and the value passed in use state will be the default value.
    ```bash
        const [var, setVar ] = useState(initialValue);
    ```

- internal Work of useState hook:
    <li><strong>useState(): </strong> creates a new cell in the functional component's memory object.</li>
    <li>New state values are stored in this cell during renders.</li>
    <li>The stack pointer points to the latest cell after each render.</li>
    <li>Deliberate user refresh triggers stack dump and fresh allocation.</li>
    <li>The memory cell preserves state between renders, ensuring persistence. </li>





---
## SideNotes
- a state => in react it refers to an object that stores a component's dynamic data (data that is periodically updated and changes asynchronously overtime) and determines how the component behaves. its an instance of the React Component Class that can be defined as an object of a set of observable properties that control the behavior of the component.

- whenever state changes, React re-renders the component to reflect the updated data, and this enables us to build dynamic UIs tht respond to user interactions.

- React may updates multiple setState() updates in a single go, Thus using the value of the current state may not always generate the desired results.

- reminder of how stacks work <a href="https://www.cs.colostate.edu/~cs270/.Fall19/recitations/R3.stack/stack.html">remember stack memory</a>