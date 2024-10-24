# svg-logo-maker-10

## Description
The SVG Logo Maker is a command-line application that allows users to generate simple logos by selecting a shape, text, and colors. This project utilizes Object-Oriented Programming principles and incorporates user input via the Inquirer package to create an SVG file.

## What I Learned
- **Object-Oriented Programming (OOP)**: I learned how to implement classes and inheritance in JavaScript, allowing for reusable code and better organization of my shapes (Triangle, Circle, and Square).
- **User Input Handling**: I gained experience using the Inquirer package to collect user input from the command line, providing a smooth interaction for the user.
- **File System Interaction**: I learned how to use Node.js's `fs` module to create and write files, enabling the saving of user-generated logos as SVG files.
- **Testing with Jest**: I practiced writing unit tests using Jest to ensure the integrity of my shape classes and their methods.

## Challenges Encountered
1. **Input Validation**: Ensuring that the text input did not exceed three characters was challenging. 
   - **Solution**: I implemented a validation function that checks the length of the input and provides feedback if it exceeds the limit.

2. **File Writing Location**: Initially, the generated SVG files were being saved in the root directory instead of the designated `examples` folder.
   - **Solution**: I utilized the `path` module to construct the correct file path, ensuring that SVG files are written to the `examples` directory.

3. **Class Structure**: Designing the class structure to appropriately represent the shapes and their properties required careful planning.
   - **Solution**: I created a base `Shape` class with common methods, which was then extended by the `Triangle`, `Circle`, and `Square` classes to inherit shared functionality.

## Walkthrough Video
[Link to Walkthrough Video](https://drive.google.com/file/d/1zUrHnULi0n_oDjbCRXQrkTHykUfQKN9G/view?usp=sharing)