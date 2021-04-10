# fitnesstracker

This logs exercise.  New workouts can be added as a new one on a new day or they
may be continued from that day (or a prior day - maybe you haven't slept since).
But each workout is effectively just a collection of exercises done on a certain
day.  A workout is created empty and exercises may be added to it.  You get a 
bare summary of completed exercises that totals the duration of each exercise 
but no details are shown so you better have a mongo database viewer or be fine
typing into the shell.  Sure - needs work.

# development

Stop 0: optionally(!!!) add an .env file with with a MONGODB_URI="some url" to
specify which mongo database you're connecting to.  It defaults to
"mongodb://localhost/workout" if left unspecified so you better set it if you 
don't have mongo set up locally.  In my case, I do but that is used for 
development and MONGODB_URI is set when this is deployed to Heroku and set to
Atlas (a mostly FREE offsite database hosting service).

Regardless of seting this variable, the way of launching this project is:
From the root folder (/fitnesstracker directory probably) run:
1)  npm i                            # installs all the npm packages the project needs to run
2)  npm start &                      # runs the project server locally on port 8080
3)  firefox http://localhost:8080/   # launch your browser and navigate to http://localhost:8080/
4)  fg                               # put npm start from step 2 back into the 
5)  CTRL-C                           # foreground so a CTRL-C will kill  it 
                                     # and so you don't lose track of the fact
                                     # you've got a running process out in limbo
                                     # sitting on a port.  Sketchy!!!

^ note the bash funny-business above.  Everything after the # on a line is only
a comment and is ignored by bash.  There is no need to type this in - I put it
there for commentary.  Also, the '&' after "start" in the second step launches
the command ("npm start" in this case) in the background.  This is needed so 
the next line can be run.  Otherwise the command prompt will just block until
the server process is killed.  But after #3 is done, running fg is good so you
don't lose track of the running server process (it is sitting on a port).  This
puts it so that the server process is blocking the terminal again as if the &
hadn't been used in the first place.  Now you're in a good position to hit CTRL-C
whenever you want to kill the server.  nodemon is another tool you can use to
launch the server but i'm not getting into it here.  Some people like it.
Google it to read up on it more if you've never heard of it.  That said, *I*
don't use it much because i've had it lock up my terminal and also, I like to 
keep a good pulse on my running server processes during development.

