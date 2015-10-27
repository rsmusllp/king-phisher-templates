# Anti-Virus Update Website

## Objective
Credentials *and* Shell

## Pretext
You are an IT Security Manager or IT Administrator and you are pushing out new anti-virus software and need users to run an automated scan to see if the new software was pushed to their workstation correctly and is up-to-date.

First the user is asked to login to the company's 'Partner Plus' portal. The user is then sent to the 'scan' page that once reaching approximately 75%, the page redirects to 'failed' and notifies the user that their anti-virus is not up-to-date and they need to download and run an a program update.

## Modify
1. File: ./images/logo.png
  * Store the company logo in the images folder, as logo.png.

2. File: ./images/favicon.ico
  * Store the custom favicon in the images folder as favicon.ico.

3. File: /include/style-login-new.css
  * Customize the color of the login page to match the spoofed company.
  * Update the `background-color:#FFF;` color code in `header`.
  * Update the `background: #FFF;` color code in `footer#bottom`.

4. File: PartnerPlus_Antivirus_v3.5.3.exe
  * Create a custom executable file.
  * Use Veil if possible to avoid anti-virus detection.
  * Make sure to name your executable 'PartnerPlus_Antivirus_v3.5.3.exe' or you will have to edit the link in the 'failed' page.

## Landing Page
File: ./login
