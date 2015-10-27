# Anti-Virus Update Website

## Objective
Credentials

## Pretext
You are an IT Security Manager or IT Administrator and you are pushing out new anti-virus software and need users to run an automated scan to see if the new software was pushed to their workstation correctly and is up-to-date.

The user is asked to login to the company's 'Partner Plus' portal. The user is then sent to the 'scan' page which will reach 100% and inform the user that their anti-virus is up-to-date.

## Modify
1. File: ./scan
  * Update the link to your company home page on line 40.
  * This is where the user will be sent when they click 'Continue'.

2. File: ./images/logo.png
  * Store the company logo in the images folder, as logo.png.

3. File: ./images/favicon.ico
  * Store the custom favicon in the images folder as favicon.ico.

4. File: /include/style-login-new.css
  * Customize the color of the login page to match the spoofed company.
  * Update the `background-color:#FFF;` color code in `header`.
  * Update the `background: #FFF;` color code in `footer#bottom`.

## Landing Page
File: ./login
