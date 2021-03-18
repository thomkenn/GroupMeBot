# GroupMeBot

## Preliminary steps: 

Set access token to your Z-Access-Token (can be gathered by going to network tab and grabbing the cookie from any credentialed network request)

set group to the groupid of the group you want to monitor (can be gathered from the request URL)

set phrase to the phrase you want to track, and the UsertoTrack to userID of tracked user. Important: if you want to track user and not phrase, set phrase to ZZZZZ or just delete that part of the if statement, because being empty will mean it always passes

If you dont want to track user or group, you can just leave phrase blank, since being empty, it will always match

## Running code: 

Set the previous variables, install NodeJS, then run 

node groupme.js

If you want it to run in the background, you can use something like Screen or pm2 to manage the job

## Code operation

Every 5 seconds, code checks if the time is between 5-645am ET, 8-845, 13-14. If so, it grabs the most recent message. If its a new message it hasnt seen before, it will check if it matches user1, user2, or it includes the preset phrase. If it matches any of those 3 criteria it will launch the 'like' function, which likes the message. 

Notes: Times are set bet
