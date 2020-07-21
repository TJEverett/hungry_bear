# Hungry Bear

#### _Learn to play with intervals, 07/01/2020_

#### By _**Tristen Everett**_

## Description

This Project was my attempt at learning to use setTimeout and setInterval in an application. I used them to create a game where you need to keep a bear's mood up by constantly feeding it and having it rest.

|Specifications|Example Input|Example Output|
|-|-|-|
|create a bear from inputted name and difficulty level (1-3)|("fuzzy", 3)|-|
|set an interval timer length based on chosen difficulty|3|1000 milliseconds|
|each time the timer hits 0 decrease food by 1 down to 0|timer hits 0|food - 1|
|each time the timer hits 0 decrease sleep by 1 down to 0|timer hits 0|sleep - 1|
|each time the timer hits 0 lower mood by 1|timer hits 0|mood - 1|
|each time the timer hits 0 if food is 6-10 increase mood by 1|food = 9|mood + 1|
|each time the timer hits 0 if food is 1-5 decrease mood by 1|food = 3|mood - 1|
|each time the timer hits 0 if food is 0 decrease mood by 10|food = 0|mood - 10|
|each time the timer hits 0 if sleep is 6-10 increase mood by 1|sleep = 7|mood + 1|
|each time the timer hits 0 if sleep is 1-5 decrease mood by 1|sleep = 2|mood - 1|
|each time the timer hits 0 if sleep is 0 decrease mood by 10|sleep = 0|mood - 10|
|check if mood is bellow 1 and if so set mood to 0|mood = -4|mood = 0|
|check if mood is above 100 and if so set mood to 100|mood = 101|mood = 100|
|press a button to add 2 to bear's food up to 10|press|food + 2|
|press a button to add 2 to bear's sleep up to 10|press|sleep + 2|
|each time a button is pressed set a 250 millisecond timer before you can press a button again|press|wait 250 milliseconds|
|every time the timer hits 0 if mood is less than 1 stop all interval timers and end the game|mood = 0|"game over"|
|-|-|-|
|-|-|-|


## Setup/Installation Requirements

1. clone the repo
2. open the command line in the repo's root directory
3. run npm install
4. run npm test

## Technologies Used

* webpack
* node
* jest
* javascript

### License

This software is licensed under the MIT license

Copyright (c) 2020 **_Tristen Everett_**