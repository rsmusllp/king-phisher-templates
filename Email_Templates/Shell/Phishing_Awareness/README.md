# Phishing Awareness Email 

## Objective
Shell

## Pretext 
You are an IT Security Manager, or IT Administrator who has reciently conducted an internal phishing awareness campaign against your company. You are asking users to read the phishing awareness information in the email and download the results of the phishing campaign; explaining that the Excel or Word document needs macros enabled to view the results.

## Modify
1. File: email.html
  * Update the inline image file path on line 27.
  * Open the email in King-Phisher and go to the 'Edit' tab.
  * Right click -> Insert -> Inline Image and select the image 'phish_one.jpg' located in the images folder.

2. File: email.html
  * Update the inline image file path on line 30.
  * Open the email in King-Phisher and go to the 'Edit' tab.
  * Right click -> Insert -> Inline Image and select the image 'phish_two.jpg' located in the images folder.

3. Attach an Excel or Word document
  * Create a document containing an auto run macro.
  * Empire is the easiest method.
