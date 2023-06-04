# # Gelato Price Widget

This repository contains a simple HTML and JavaScript code that displays the current price of $GEL. The price is fetched from the CoinGecko API and updates it every 60 seconds. Additionally, it provides instructions for creating a macOS widget using Automator.

## How to Use

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in a web browser to see it in action.

3. To customize or integrate the widget into your own website or project, follow these steps:
    - Include the HTML code from `index.html` in your desired webpage.
    - Include the JavaScript code from `index2.js` in your JavaScript file.
    - Make sure to include the necessary CSS styles from the `<style>` section in your stylesheet or HTML.

4. Update the appearance or behavior by modifying the HTML, CSS, and JavaScript code as needed.

5. **Creating a macOS Widget using Automator:**

    - Open Automator on your Mac.
    - Select "New Document" or "New" to create a new workflow.
    - Choose "Application" as the type of workflow you want to create and click "Choose".
    - In the Actions Library on the left, search for "Run Shell Script" and drag it to the workflow area on the right.
    - Set the following options in the "Run Shell Script" action:
        - Shell: `/bin/bash`
        - Pass input: `as arguments`
    - Replace the default script in the "Run Shell Script" action with:
        ```
        open "/path/to/your/widget.html"
        ```
        Replace "/path/to/your/widget.html" with the actual path to your HTML file.
    - Save the workflow as an application.
    - Double-click the saved application file to run the widget. It will open your HTML file in your default web browser, displaying the widget.


## Dependencies

This project has no external dependencies. It utilizes vanilla JavaScript and fetches data from the CoinGecko API.

## Resources

- [CoinGecko API](https://www.coingecko.com/en/coins/gelato) - The API used to fetch the current price of $GEL.
- [Automator](https://support.apple.com/guide/automator/welcome/mac) - Official documentation for Automator on macOS.

