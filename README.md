# Password Generator
UCI Boot Camp Homework 03 - Password Generator

This was the third homework assignment for the full stack web development program at UC Irvine, in which the goal was to build a password generator using javascript.

# Link to Deployed Application:
https://maxx105.github.io/password_generator/

# Image of Deployed Application:
![deployed application](assets/deployed_app.JPG)

# Technologies:
The front end was created with only HTML and CSS and I made the script with Javascript.

# Purpose:
This application allows the user to generate a completely random password with any type of characters they choose. This would be useful in a scenario where someone needs a very secure password.

# How to Use:
When the user clicks the Generate Password button, it then prompts them with 5 criteria for the generated password:

1. Password length (must be between 8 and 128 characters)
2. lowercase letters
3. uppercase letters
4. numbers
5. special characters

It then uses these criteria to create a password.

# How it works:
It essentially takes a string of all of the possible characters (lowercase, uppercase, numbers, and special characters) and then pulls from that to create a new string based on the answers to the above criteria. It then pulls a random character from this new string and adds it to each index of an array (called genPassword) from i = 0 to i < the number of characters chosen in the first prompt, using a for loop. Lastly, it converts the genPassword array back to a string and returns this.