## doctor-js

An app for searching for doctors using an api.

### Description

This page is to allow users to search through doctors by different search methods and retrieve their information.

## Specifications

| Behavior                   | Input Example     | Output Example    |
|:---:|:---:|:---:|
|user can search for docotor by name|user inputs "jim"|show doctor info|
|user can search by location|user inputs "OR"|show doctors|
|user can do multiple searches|new search name "mike"|clears last search and shows doctors matching "mike"|
|automatically loads more doctors when user scrolls down|user scrolls to bottom of page|displays more doctors matching search|

### Setup

* This repository is meant to be viewed. It can be viewed [here](https://ChanceMagno.github.io/doctor-js
).

### Or you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://ChanceMagno.github.io/doctor-js
).
  * Clone this track survey repository by typing, `git clone(https://ChanceMagno.github.io/doctor-js
)`
* Download
  * Click [here](https://ChanceMagno.github.io/doctor-js
/archive/master.zip) to download the repo
  * Unzip the zipped repository
* For launching the program if you are unsure visit [here](https://www.learnhowtoprogram.com/java/java-applications-ff6bacd3-bc1c-4c32-87c5-cc963b704cc2/compiling-and-running-a-java-program)

* you will have provide your own api key, to do this sign up at https://developer.betterdoctor.com/
* Create a file at the top of the project directory named .env inside type exports.apiKey = "YOUR API KEY";
* run these commands in your terminal provided here: https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/node-commands-overview
* type gulp serve and the page will automatically load.s



### License


Copyright (c) 2017 **_MIT License_**
