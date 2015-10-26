# Generic Registration or Sign Up

**Objective:** Credential Harvesting

## Pretext:
This is meant to be a very general credential harvesting page. A possible pretext would be to spoof from the human resources department, to a group of employees, asking for volunteers to help with a specific cause, or to register for a company event.

To make this pretext more believable, ask the user to register by supplying their email address and password to create an account. Even if the user “registers” a non-corporate related email address, you can test for password reuse using the submitted password.

## To Change:
1. File: ./register
  * Change the page title fitting your pretext.
  * Specifically the text between the `<h1>Volunteer Sign Up</h1>` HTML tags.                        
  * Update meta redirect to company website URL.

2. File: ./error
  * Update meta redirect to company website or other URL.

3. File: ./images/1.png - 3.png
  * Keep the current images or replace them with images fitting your pretext.
  * These images should be roughly 800 by 400 pixels.

4. File: ./images/favicon.ico
  * Replace default favicon with favicon.ico fitting your pretext.

