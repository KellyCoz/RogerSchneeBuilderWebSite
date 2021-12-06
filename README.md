# RogerSchneeBuilderWebSite

## Summary

This project was completed as part of Code Kentucky's Front End Web Development course requirements.

I chose to design a website for my father's construction business. He has been in business for over 50 years but has never developed an online presence. This website does not currently respresent the full working version that I envision, but it is a nice start and will help my dad visualize what his site might look like and get him thinking about any additions he would like to make.

The website includes the landing page (index.html) which dispalys stock photos, a footer that lists some of the services offered by Roger Schnee Builder, and a working navigation bar that will link to a page where the user can fill out a form in order to request a free estimate (estimate.html). Once the information on the estimate request is browser validated, the user will be taken to the thank you page (thanks.html)

## Mobile First Design

This site was developed using a mobile first design. To accomplish this, the website was designed first for small screen sizes. As the screen sizes are enlarged, the images, navigation, and footer information adjust to maintain a clean and organized appearance. The query for medium screen sizes is active when the screen size is 768px. The query for large screen sizes is active when the screen is 1064px or greater.

## CSS

There are several classes used in main .css which are used to achieve desired styling but also dynamically display behavior as the screen sizes change.

.medium-6, .medium-4, .large-3 are all used to change the width each container fills. The numbers are based on assuming you might have as many as 12 columns displayed in a single line, and the -# indicates how many of those 12 columns the class should use. For example, .medium-6 has a width of 50% since that particular item will display as a column taking 6 of 12 available columns, 50%. Similarly, .medium-4 has a width of 33.333%, .large-3 has width 25%.

Other classes used for spacing, coloring, alignment, etc. include but are not limited to .thankyou, .row, .estimate, .submitbtn.

## JavaScript

There are two javascript files used to achieve the web site's functionality.

toggleMenu.js is a file used when the navigation is concealed under the hamburger button (as determined by the small screen media query). The menu appears in a list after a click event triggers the class to change to "open", which will changes the nav ul elements to display as block.

thanks.js contains the code that will grab the parameters filled in by the user on estimate.html from the URL and post the information in a thank you message on thanks.html.
