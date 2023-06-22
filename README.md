# QuantaSift
A music Website for all the all the music lovers out there
This is a project which was made by me and Ishan Gupta.

# Description
The external CSS for all the pages is in CSS folder with appropiate names. It has a subfolder 'Fonts' which contains the custom fonts used in website , the definitions for which can be found in navbar.css

The main pages (i.e. Home page, Artists page,Spotlight page,Search Page , Playlist Page and About Us page) are in 'Main_pages' directory along with home page's background and image resources for about us page. The logo for the service also resides in it.
The pages for the 6 artists are in 'Artists_Pages' directory with each artist page with the same file name as the artists. The image resources for the artists page are in 'artists_and_album_pics'.

The webpage for each album is in 'Albums_Pages' with the filename same or a shorter version of its respective album's name. The image resources can be found in 'Songs_cover' directory.

JS files for the typing effects,review system,search page ,countdown for the artist and JS files for handling insertion,display and deletion can be found in the JS folder in the main directory with appropiate names. 

The Python script for Flask server can be found in the Scripts folder along with the song database containing the artists and albums for respective song IDs. The DB also contains the songs in the playlist. Note that Flask is used as a server which recieves fetch request with appropiate method from JS, executes queries in database and returns the data to JS which updates the webpage accordingly.


# Features
---> Search Page: You can search for your favourite songs from the search page. It has various filters to suit your taste. 

---> SpotLight Page: You can view the description of your favourite artist, his/her upcoming album and a countdown for it. Along with it, you can rate the artists out of 5 stars and give your reviews about them. 

---> PlayList Page: Want to give your favourite songs a special place? Playlist Page does that job for you. There are a number of songs in the website. Click on the "Add To Playlist" button to add your favourite song to the PlayList page. 


# PreRequisites
Read Assumptions.md

# How To Use
Pull the Repo to your local machine. Run the python script "Playlist" in the Scripts folder to use the playlist feature of the website. Open the Home page on your default browser which is in the "Main Pages" folder.


# Contributors
This project was made by me and Ishan Gupta. You can find more about us from the "About Us" page of the website. 
