AMAZINE Coding challenge
========================

## the setup
**file structure:** The challenge contains the following files:

    index.html      → the main index file and handlebars templates
    css/            → the css file rendered by sass or manualy written
    layouts/photoshop   → the layout template as psd
    layouts/JPG         → the layout template and gridoverlay as jpg
    scrips/         → script files 
    sass/           → sass files

**git:** The project is hosted on github [https://github.com/webstrap/codingChallenges](https://github.com/webstrap/codingChallenges) 
If you are not familiar with git, you can download the project as a ZIP file and send the zipped project back when you are finished. Otherwise fork the project ( If you are logged in on github you can just press “Fork” at the right top corner)
Clone the forked repository, it should have an url like `http://github.com/YOURUSERNAME/codingChallenges`
Some important git comands:

    git clone https://github.com/webstrap/codingChallenges
    git add -A (add all new files, rename files, delete files)
    git commit -am “some commit message” (create a commit with the latest changes)
    git push origin master (upload commits to your central github repository)

**start:** To start the application, open the index.html in a browser (Firefox). To open it in Chrome you have to open the files with a local webserver e.g. Apache.
sass: If you don’t use sass, you can add your styles directly to `styles/amazine.css`. Otherwise use it to compile the sass files to replace the `styles/amazine.css` file. 
Find more about sass on [http://sass-lang.com/install](http://sass-lang.com/install)

We prepared some variables and mixins that are explained in detail in the code files. You could add some more variables or mixins just as you like.



## the task
When you open the website for the first time you will see two stories without any styling. We want you to style these two stories in the given layout. The included photoshop files provide detailed information about the layout and the grid system we use at Amazine.com. The width and the height of the grid are provided as sass-variables in the `sass/_variables.scss`.
Consider, that story texts could be longer or shorter. Images should have the given ratio’s that you can find in the _variables.scss.

If you like, you can create you own layout, as long as you have the same width and height as the layouts in the photoshop files.


## some notes

### Templates: Handlebars
The index.html contains a script (id → storyTemplate) element with the HTML template for the stories. In there you will find all variables that are important to output the complete story. You could change the HTML structure if you want. We prepared just a few elements so you will have some content displayed when you start the site for the first time. If the site will not show the stories at the beginning, please let us know. 



### JavaScript: Backbone Application
The Website is a small Backbone application that will provide everything you need to work on the stories. If you need to add some styles to the elements, please add the styles in the beforeAppend Method of the StoryView. Some initial story classes are already added to the story.