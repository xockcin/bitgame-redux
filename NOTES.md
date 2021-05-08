### 5/7/21

This is the newest version of bitgame, now using redux. Before, I was trying to retrofit redux into my already-existing code. But then I decided it would be easier to start with a premade redux app - the counter app that is used as an example in the redux documentation - and then turn it into bitgame. The next challenge is to implement the rest of the bitgame functionality.

### 5/8/21

Implementation in redux is going well so far, except I just learned the hard way that you can't use dispatch inside a reducer function. Still not totally clear on all the concepts, but getting there. Hopefully today's class will help.

Note: We are looking good!

Ideas for other buttons:
"!" = all on
" " = all off
"=" = save to register
"&" = bit and with register
"|" = bit or with register
"^" = bit xor with register

Note: I am stopping for the day. It looks janky but it works pretty much almost how I want it to.
Next steps:
-get the goal reveal function to work
-implement display mode switching
-implement level selector
-make it look good

I will try out other buttons in my original bitgame-react file