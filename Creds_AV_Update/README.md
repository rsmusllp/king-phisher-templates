
# AV Update Template

**Objective:** Credential Harvesting

## Pretext:
Spoofing as an IT administrator, you're pushing out new antivirus software and need users to help run an automated scan to see if the new software was pushed to their computer and is up-to-date.

## Things you'll need to change:
* File: ./login: 
  ** name="logo" -> update to the company logo
  ** Store company logo in the images folder. name it logo.png

* File: ./scan: 
  ** name="logo" -> update to company logo

* File: /include/style-login-new.css
  ** footer#bottom -> update the background:# to the spoofed company color if wanted. 
  ** header -> update background-color:# to spoofed company color if wanted.