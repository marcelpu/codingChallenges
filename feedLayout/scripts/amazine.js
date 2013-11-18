/*
    AMAZINE Coding Competition

    Technologies: Javascript, jQuery, Backbone.js, Underscore.js, 
                  Handlebars, JSON, Require, HTML, SASS

    by Alexander Kong (alex@amazine.com)
       Leif Marcus (hello@leifmarcus.com)
    

    PLEASE NOTICE:

    1.  naming:
        - use camelCase variable and function names.
        - begin Backbone model-, view- and collectionnames
          with a capital letter.
        - use readable variable names.

    2.  format:
        please set line indent to 4 spaces instead of one tab

*/
;(function(Backbone, require, define){
    'use strict';

    // -----------------------------------------------
    // story model:
    // contains the data structure of a stories 
    // (scripts/stories.json contains an array [] of 2 stories) 
    define('model/story', function(){
        var StoryModel;
        StoryModel = Backbone.Model;
        return StoryModel;
    });

    // -----------------------------------------------
    // story collection:
    // a collection is just a list/array of model objects
    // in this case the story models above
    define('collection/stories', function(){
        var StoriesCollection, StoryModel;
        StoryModel = require('model/story');
        StoriesCollection = Backbone.Collection.extend({
            model: StoryModel,
        url: "scripts/stories.json"
        });
        return StoriesCollection;
    });

    // -----------------------------------------------
    // story view:
    define('view/story', function(){
        var StoryView, htmlSource, template;
        // the story template is loaded from the index.html script block
        htmlSource = $.trim( $('#storyTemplate').html() );

        StoryView = Backbone.View.extend({
            template    : Handlebars.compile(htmlSource),
            className   : "Story",
            tagName     : "article",

            // ----------------------------------
            // DOM-Events declaration:
            // define the mouse events that are
            // important for the story view:
            events      : {
                'click'        : 'openStory',
                'click .image' : 'openImage'
            },
            initialize  : function() {
                // binding events:
                this.listenTo(this.model, 'change', this.render);
            },

            // ----------------------------------
            // this appended the template to
            // the parent view element
            render      : function() {
                var template;
                // template contains the rendered html templated
                // already with the data inside
                template = this.template( this.model.toJSON() );
                this.beforeAppend( $(template) );
                this.$el.html(template);
                return this;
            },

            // ----------------------------------
            // change html before it is appended
            // to the DOM. This is for adding
            // css classes to the elements
            // this.$el is the parent element
            // of the current view (Backbone)
            beforeAppend: function( $html ) {
                var id, countImages, firstImageRatio;
                id = this.model.get('id');
                countImages = this.model.get('images').length;
                firstImageRatio = this.model.get('images')[0] ? this.model.get('images')[0].ratio : 1.5
                this.$el.addClass('story' + id.toString());      // <- add a class to style each story different
                this.$el.addClass('i' + countImages.toString()); // <- add a class for the image count
                this.$el.addClass( firstImageRatio > 1.1 ? 'heroPortrait' : 'heroLandscape' );
            },

            // event handler:
            openStory: function( event ) {
                event.preventDefault();
                alert('open Story');
            },
            openImage: function( event ) {
                event.stopPropagation();
                alert('open Image');
            }
        });
        return StoryView;
    });

    // -----------------------------------------------
    // main application:
    define('view/app', function(){
        var AppView, StoryView, StoriesCollection, stories;

        // get the backbone story collection:
        StoriesCollection = require('collection/stories');
        stories = new StoriesCollection;

        // get the backbone story view:
        StoryView = require('view/story');

        // define the backbone app view:
        AppView = Backbone.View.extend({
            el          : '#App',
            model       : stories,
            initialize  : function() {

                // Observer Patter: Listen to changes of the
                // collection and update the view.
                // add the story when a new story is
                // added to the collection
                this.listenTo( this.model, 'add', this.addStory);

                // ----------------------------------
                // fetch the json stories from the url
                // defined in the collection above
                this.model.fetch();
            },
            addStory    : function( story ) {
                var view;
                view = new StoryView( { model: story } );
                this.$el.append(view.render().el);
            }
        });
        return AppView;
    });

    // -----------------------------------------------
    // start the web app:
    var App, app;
    App = require( 'view/app' );
    app = new App;

})(Backbone, require, define);
