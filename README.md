# Climbing Dots	                                       

An app to manage various unique collections of links, documents and videos. Designed for clients of the ACE Centre. 

## Video-cast.

Here is a quick video of the app - including the back-end administration and front-end client view. NB: We don't show how to upload a file or password protecting collections but pretty much everything else is here. 

[![Videocast of Climbing Dots on Youtube](http://img.youtube.com/vi/PE54bFivhBA/0.jpg)](http://www.youtube.com/watch?v=PE54bFivhBA)

## Why is it called Climbing Dots?

Because when chatting about the project on a train to London @phewett said it should be called "Client Docs". @willwade heard that as "Climbing Dots" and thought he was working back in East London in a new media company.

## So what does it do exactly?

Provides a very simple web page to a client with some basic information which is customisable and a series of links to webpages or uploaded PDFs. The webpage can be password protected if needs be.
The backend system manages the links, document storage and "collections". It ties neatly up with a number of other services - notably [bit.ly](http://bit.ly) (for creating a super short URL which you can use with your own custom domain e.g. http://acecent.re), [Amazon S3](http://s3.amazonaws.com) (for document storage) and [Diigo](http://diigo.com) for storing of the links. 

## To install and run

Climbing Dots is built entirely in Javascript. The following "Stack" is used in this project:

1. [MongoDB](http://mongodb.org/): The leading NoSQL database.
2. [Express](http://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
3. [AngularJS](): HTML enhanced for web apps.
4. [Node.js](http://nodejs.org/): A platform built on Chrome's JavaScript runtime.
5. [Angular Material](http://material.angularjs.org/): Implementation of Material Design in Angular.js.

### Dependencies to setup 

1. Install Node and NPM for your platform.
2. Install MongoDB for your platform
3. Amazon S3. You will need a Amazon AWS account to use with this system. Set one up then set up an access key - and save the secret access key code somewhere!
4. Diigo. Setup a Diigo account and grab the Diigo Key. NB: You will need to have a paid for account. 
5. Bit.ly. Setup a Bitly account and set up a developers key/pass. 
6. Either: Setup a Mandrill account OR use a Gmail account (this is to send out emails)

You will need to put all these settings somewhere safe. The app needs to see these settings - and it will look for them as environment variables. You can - if you so wish - edit system/config/development.js and system/config/production.js however I strongly recommend you work out how to set environment variables for your project. In the long run you may prefer something like forever or pm2 and their own ways of reading in environment variables (see below). 
An example bash script to store and then load these variables is included here. 

### Installation

1. Open up a command line and `git clone ` or download the zip of this project
2. `cd climbing-dots`
3. `npm i`
4. `bower i` (if there are errors, ensure to create this directory `/public/bower_components` and provide write permissions)
5. Set environment variables while running the app. If you're using `forever` (`npm i forever -g`) to run your app, below command can be helpful:
	
	`BASEURL=http://climbing-dots.riten.io PORT=8012 DB=delicious_desk_demo AWS_ACCESS_KEY_ID=<KEY> AWS_SECRET_ACCESS_KEY=<KEY> BITLY_TOKEN=<TOKEN> DIIGO_API_KEY=<key> DIIGO_USERNAME=<username> DIIGO_PASSWORD=<password> NODE_ENV=production forever --sourceDir <app-dir> -a -l <log-file-path> --minUptime 5000 --spinSleepTime 2000 start index.js`

## Long-term hosting

You can look at any way you want of hosting this node/mongo/angular stack. The easiest - but by no means cheapest - is probably [heroku](http://heroku.com). Just remember you will need to have the database stored somewhere too - maybe [compose](http://compose.io).

## Credits	

- @phewett for the original conception 
- @ritenv who coded the majority as a fork to his :)

## Licence

