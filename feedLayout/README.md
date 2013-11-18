AMAZINE Coding challenge
========================

## the basics
You will find all files you need to start at https://github.com/webstrap/codingChallanges at the feedLayout folder. Fork the Project on github and send us the link when everything is done. 
You could start the application by run the index.html in the main folder (if you use the chrome browser you need to start the chrome without security because its not allowed to load local files via ajax. To avoid this you could also start the website from your localhost or from any webserver you like.)
Detailed information is provided as comments in the js and sass files.

The challenge contains the following files:
index.html      →  the main start file
css/            → the css file rendered by sass or manualy written
layouts/photoshop   → the layout template as psd
layouts/JPG         → the layout template and gridoverlay as jpg
scrips/         → script files 
sass/           → sass files

There are some coding conventions that we use at AMAZINE that you will find in detail at the code files for SASS and JavaScript.

## the task
When you open the website at the first time you will see two stories without any styling. We want you to style these two stories in the given layout. The included photoshop files provide detailed information about the layout and the grid system we use at Amazine.com. The width and the heights of the grid are provided as sass-variables in the sass/_variables.scss.

## get the files
fork the basic project from https://github.com/webstrap/codingChallanges to your own git repository and send us the project link when you finished the task. If you are not familiar with git, you could just download the project as a ZIP file and send the zipped project back when you are finished.


## the details

### Templates
The index.html contains a script (id → storyTemplate) element with the HTML template for the stories. there you will find all variables that are important to output the complete story. You could change the HTML sturcture as you want. We prepared just a few elements so you will have some content displayed when you start the site first. If the site will not show the stories at the beginning, please let us know. 

### Stylesheet (SASS or CSS)
You are welcome to sensibly use SASS, but that’s not required. If you want to use sass, we prepared some variables and mixins that are explained in detail at the code files. You could add some more variables or mixins just as you like. 

### JavaScript
The Website is a small Backbone application that will provide everything you need to work on the stories. If you need to add some styles to the elements, please add the styles in the beforeAppend Method of the StoryView. Some initial story classes are already added to the story.