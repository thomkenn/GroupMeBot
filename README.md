# GroupMeBot

Preliminary steps: 

Set access token to your Z-Access-Token (can be gathered by going to network tab and grabbing the cookie from any credentialed network request)

set group to the groupid of the group you want to monitor (can be gathered from the request URL)

set phrase to the phrase you want to track, and the UsertoTrack to userID of tracked user. Important: if you want to track user and not phrase, set phrase to ZZZZZ or just delete that part of the if statement, because being empty will mean it always passes

If you dont want to track user or group, you can just leave phrase blank, since being empty, it will always match

