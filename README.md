https://github.com/samsong1019

This Challenge was fun and alot less stressful either because I learned alot from last project or It was easier but I am happy either way haha. Main issues I had that stumped me alittle bit was the update function I made. I put all the variables above the function and not inside cause it to not update the variables everysecond and instead update virtualy nothing. at first I thought it wasn't working but I console logged inside "hi" and it was being refreshed everysecond and so I tried moving all the var to inside the function and that worked beautifully. another thing that tripped me a little was changing background color because I kept thinking set attribute instead of .css and was so confused why I kept getting .setattribute is not a function haha. then when I used .css I had already set a background color with css and when I was super stumped and then when I looked at the application i saw a tiny bit of pink(first color i used) on the top left corner and went back into the css and took it out and it worked. now 
Given I am using a daily planner to create a schedule
When I open the application
Then I the current day is displayed at the top of the calender along with date and time that updates every second
when I scroll down
Then I am presented with time blocks for standard business hours
when I view the time blocks for that day
Then each block is color-coded to indicate Whether that time has past, is present or in the future.
When I click into the time block 
THen I can enter an event in the textarea
When I click the save button for a specefic time block
Then the text for that block is saved in local storage
When I refresh the page the saved content does not go away
<img src="./Assets/Screenshot (37).png">
<img src="./Assets/Screenshot (38).png">