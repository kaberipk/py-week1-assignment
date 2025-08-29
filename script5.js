// ===== PART 1: Variables, Conditionals, and Basic Interaction =====

// 1. Variable Declarations (using let and const)
const profileButton = document.getElementById('profile-btn');
let userName = ''; // 'let' because this value will change
let userAge = 0;   // 'let' because this value will change

// 2. DOM Interaction 1: Responding to the profile button click
profileButton.addEventListener('click', function() {
    // Get values from the input fields
    userName = document.getElementById('userName').value;
    userAge = parseInt(document.getElementById('userAge').value); // Convert string to number

    // 3. Conditional Logic (if/else)
    let message;
    if (userAge >= 18) {
        message = `Hello ${userName}, you are an adult.`;
    } else if (userAge > 0) {
        message = `Hello ${userName}, you are a minor.`;
    } else {
        message = "Please enter a valid age.";
    }

    // Output the result by modifying the webpage (DOM Manipulation)
    document.getElementById('profile-message').textContent = message;
});


// ===== PART 2: Functions - The Heart of Reusability =====

// Function 1: A simple greeting function that returns a string
function createGreeting(name) {
    return `Welcome back, ${name}! Hope you're having a great day.`;
}

// Function 2: A more complex calculator function that performs different operations based on input
function calculate(operation) {
    // Get values from the input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    // Use conditional logic to decide which operation to perform
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'max') {
        // Use a ternary operator as another form of conditional
        result = num1 >= num2 ? num1 : num2;
    } else {
        result = 'Invalid operation';
    }

    // Display the result on the webpage
    document.getElementById('math-result').textContent = `Result: ${result}`;

    // Also, demonstrate the first function in the console
    console.log(createGreeting(userName || "Guest"));
}

// This function is called directly from the HTML onclick attribute


// ===== PART 3: Loops - Embrace the Power of Repetition! =====

// Variable to hold our array of tasks
let tasks = ['Learn JavaScript', 'Complete Assignment', 'Celebrate!']; // Initial tasks

// Function to render the task list (uses a loop!)
function renderTaskList() {
    const taskListElement = document.getElementById('task-list');
    
    // 1. Loop Example: FOR loop
    // First, clear the current list content
    taskListElement.innerHTML = ''; // Empty the <ul>

    // Now, loop through the tasks array and create an <li> for each task
    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = tasks[i];
        taskListElement.appendChild(listItem);
    }

    // 2. Loop Example: FOR...OF loop (commented out)
    // This is a cleaner way to loop through arrays if you don't need the index (i)
    /*
    for (const task of tasks) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskListElement.appendChild(listItem);
    }
    */
}

// Call the function when the page loads to show the initial tasks
renderTaskList();

// DOM Interaction 3: Add a new task to the list
document.getElementById('add-task-btn').addEventListener('click', function() {
    const newTaskInput = document.getElementById('new-task');
    const newTask = newTaskInput.value.trim(); // Get value and remove extra spaces

    if (newTask) { // Check if the input is not empty
        tasks.push(newTask); // Add the new task to our array
        renderTaskList(); // Re-render the list to include the new task
        newTaskInput.value = ''; // Clear the input field
    }
});