# How To Contribute

User submitted phishing emails and websites are highly encouraged. If you would
like to submit content there are a few guidelines that contributors need to
follow.

Please keep licensing restrictings in mind when contributing. Specifically the
King Phisher project will not accept contributions utilizing resources (such as
but not limited to logos) of legitmate websites and companies.

## Template Classification

### Email Templates
Inside the [Email_Templates](https://github.com/securestate/king-phisher-templates/tree/master/Email_Templates) directory there are three sub-directories that classify the ultimate goal for the phishing email.
 * [Training](https://github.com/securestate/king-phisher-templates/tree/master/Email_Templates/Training)
  * Convincing the user to click on a link in the email and visit a website displaying phishing awareness training
  * Generic emails should also be stored here
 * [Credentials](https://github.com/securestate/king-phisher-templates/tree/master/Email_Templates/Credentials)
  * Pretext that requests the user click on a link to log in, register, or verify with their credentials
 * [Shell](https://github.com/securestate/king-phisher-templates/tree/master/Email_Templates/Shell)
  * An email, with an attachment, that requests the user download and run the file
  * Requests the user click on a link in the email and download a file from the phishing website

### Website Templates
Inside the [Website_Templates](https://github.com/securestate/king-phisher-templates/tree/master/Website_Templates) directory there are three sub-directories that classify the ultimate goal for the phishing website.
 * [Training](https://github.com/securestate/king-phisher-templates/tree/master/Website_Templates/Training)
  * Teaches or informs the user through phishing awareness training
  * A quick redirect, error page, or convincing looking website that does not alert the user they have been phished, and does not collect credentials or return a shell
 * [Credentials](https://github.com/securestate/king-phisher-templates/tree/master/Website_Templates/Credentials)
  * Login or registration portal that prompts for the user's username or password
 * [Shell](https://github.com/securestate/king-phisher-templates/tree/master/Website_Templates/Shell)
  * Serves a document, file, or exploit to the user that when downloaded or executed, will return a shell
  * Websites that also collect credentials, as well as return shell, should be stored here

## Template Structure

### Email Templates
 * Email templates should go in the [Email_Templates](https://github.com/securestate/king-phisher-templates/tree/master/Email_Templates) directory
 * Name the root email template directory using `This_Style_Of_Case`
 * The HTML email template should be saved in this directory as a file named `email.html`
 * A `README.md` file should be included in this directory which includes the following:
  * Title - Descriptive name of the template file
  * Pretext - Short example of how the email would be used for during a phishing campaign
  * Modify - Any items within the email template that need to be customized or modified

### Website Templates
 * Website templates should go in the [Website_Templates](https://github.com/securestate/king-phisher-templates/tree/master/Website_Templates) directory
 * Name the root website template directory using `This_Style_Of_Case`
 * A `README.md` file should be included in this directory which includes the following:
  * Title - Descriptive name of the website template
  * Pretext - Short example of how the website could be used during a phishing campaign
  * Modify - Any items such as logos, favicons, or website content that need to be customized or modified
 * Make a directory name `www` which contains the following:
  * The HTML website should be saved in this directory
  * Images should be stored in a subdirectory named `images`
  * CSS or JavaScript files should be stored in a subdirectory named `include`

# Additional Resources
* [King Phisher Wiki](https://github.com/securestate/king-phisher/wiki)
* [King Phisher Templates](https://github.com/securestate/king-phisher/wiki/Templates)
* [Jinja Template Documentation](http://jinja.pocoo.org/docs/dev/templates/)
