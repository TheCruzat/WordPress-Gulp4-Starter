# WordPress / Gulp4 Starter Theme

A blue-box mac’n’cheese solution for getting the ball rolling quickly on theme development for WordPress using Gulp 4 as a toolkit.



### Before We Begin

This project assumes you have a working knowledge of WordPress as a system and already have a local dev environment set up -- if all of those other pieces are in place and you are ready to begin working on your theme, here is your jam.

Also, this is a bare-bones starter theme, we have an index.php, a functions.php and a style.css. If you are not yet ready to build out a theme and its required templates yourself, you will want to start with a more complete theme.



# Getting Started


### Get Gulp

First, you will need Gulp installed globally. If you do not have it yet, [get it](http://gulpjs.com):

```
npm install gulp-cli -g
npm install gulp -D
npx -p touch nodetouch gulpfile.js
gulp --help
```


### Get the Set

Next, download the fileset. The root of the set lives in the wp-content directory of a WordPress project. It can be renamed, but it wants to live in the **wp-content** folder alongside themes and plugins. It is configured to output into the themes folder using the **dest** variable in **src/gulpfile.js:13** to define the folder name.



### Get Pressed

If you are starting a site build from scratch, grab the [latest fileset](https://wordpress.org/latest.zip) for WordPress. Set up the fileset like any other project, then drop the starter folder into the **wp-content** folder alongside plugins and themes.

If you're using this with an existing site, just drop it into the **wp-content** folder. 



### Get Personal

If you want, rename the wp-gulp-starter folder. 

Open **src/scss/style.scss** to edit your style.css details.

Open **gulpfile.js** and make 2 quick changes:
1. change var dest to your theme name ala '../themes/your-theme-name'
2. change var stage to your local dev url ala 'local.dev'

Next we need to run a build to get your initial fileset:
```
gulp build
```

There is now a folder in the site's ./wp-content/themes/ for the newly cooked theme, it can be seen and selected in the dashboard. Once activated, the theme is ready to be edited.



### Get Crackin'

Let's put the Watcher on the Wall:
```
gulp
```

Bam! You should have a browser pop up with a localhost:3000 (or similar) mirroring the local dev url in gulpfile.js, any changes made will refresh into the browser.



### Get It All

Once you have completed your masterpiece:

```
gulp build
```

Doing one final build clears out the fileset and recooks everything, to insure that all changes are reflected in the final fileset. The cooked theme is then ready to be deployed.



# Under the Hood

While the layout collection is intentionally minimal, there are several tools included in PHP and CSS.



### PHP Toolies

We have our functions broken out into child pages in the src/functions/ folder, including custom post types, shortcodes, script/style imports, utilities and global settings.

*In src/functions/globals.php, the upload directory has been changed to 'media'. Delete this line if you want it to default back to ./wp-content/uploads*

Utilities include:
- a string-to-slug cooker
- a numeric "sanitizer" to remove non-numeric characters (very handy for phone numbers in links)
- a content filter shorthand
- a boolean sniffer to detect variable content



### CSS Toolies

Our SCSS files are also broken out into child files, they live in the src/scss/ folder.

Many basics are included, including:
- the Meyer CSS reset
- screen size breakpoints in width
- media queries for width + height
- media query for hover rules


# Acknowledgements

- [Matt Banks'](https://github.com/mattbanks) work with WordPress starters circa 2015 was an inspiration, salud
- [Zell Liew's](https://css-tricks.com/gulp-for-beginners/) recipe informed the previous version of this starter, salud

# Author

[**Dan Cruzat**](http://thecruzat.com) for [Cruzat.Media](http://cruzat.media) and [E+C](http://eencee.me).
