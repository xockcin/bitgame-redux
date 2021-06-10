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

Note: Actually I am messing around with other buttons. I was going to do it in bitgame-react but then I remembered that it's all janked up. I have implemented the all on button and have begun to implement register.

### 5/15/21

I have implemented register and the register buttons. I have also implemented the mouse-over goal reveal. Still need to implement level choosing as a dropdown menu. Also need to start implementing the larger game mechanic:

1. First, you can only do level-1 pairs. Each one requires one token and earns you two tokens.
2. It costs ten tokens to unlock level 2.
3. Once you unlock level 2, you can do level-2 pairs. Each one requires two tokens and earns you four tokens.
4. It costs 20 tokens to unlock level 3.
5. In general, the number of tokens you earn for solving a pair is double the number of tokens required.
6. Each of the five basic moves costs 1 token.
7. The first special tokens you can capture are space and !.
8. You have to pay some amount of tokens in order to get a "license" to capture the special tokens, and then you have to capture them "in the wild," while solving a puzzle.
9. Once you've captured one, then you can buy them.
10. ! turns the current number to 255; space turns the current number to zero.
11. The next special tokens you can capture are =,&,| and ^. You buy one "license" for all of them.
12. = saves the current number to the register and the other three sets the current number equal to the result of the corresponding bit operation between the register and the current number.
13. You need to capture the register tokens separately, although &,| and ^ cannot be used without = and vice versa.

### 6/3/21

I haven't worked on this in a while, but I have thought about it a lot. Let me spend a little bit of time trying to dump my thoughts.

THOUGHT DUMP: 
- The main project will be called Bitgame Arcade. It will be a web app, but it won't run on the web. Instead, it will run on its own device with its own WiFi network. You will connect to the device with a computer or, perhaps, a smartphone, or perhaps both, and interact with it through the browser. While playing the game, you will not be able to connect to the Internet.
- Bitgame Arcade is a sandbox-style suite of puzzle games that teach a variety of topics in computer science, programming, engineering, science, math and other areas, all building off of the fundamental operations of bit manipulation.
- As with a real arcade, Bitgame Arcade is all about spending and winning tokens. Tokens are the in-game currency, just as "lingots" are the in-game currency of Duolingo. But unlike Duolingo, in Bitgame Arcade you have to spend your tokens in order to progress in the game. I think this makes for a more satisfying and motivated experience for the player.
- The first game in the "arcade" - the first "level," if you will - is simply an explaination of how bits work. It goes something like this:
    - **Lesson 0: Bits**
    - Everything is made of bits. A bit can be either on or off. Click the bit to turn it on. Click the bit again to turn it off.
    - **Lesson 1: Bit-Sets**
    - A bit-set is made of one or more bits. Each of the bits in a bit-set can be either on or off. Use the buttons to increase or decrease the size of the bit-set.
    - A bit can be either on or off. In other words, a bit-set with a size of one can be either of two states, on or off.
    - But a bit-set with a size of two can be in one of four states: off off, on on, on off, or off on.
    - With every bit we add to our bit-set, we double the number of potential states.
    - **Lesson 2: Bits and Numbers**
    - We can use bit-sets to represent numbers.
    - The number system that uses bits to represent numbers is called the binary system, or "base 2", because it has just two digits: zero and one.
    - To understand how bits can represent numbers, let's take a look at an even simpler number system: the unary system, also known as base one
    - The unary system has just one digit. In the unary system, the number being represented is simply the number of digits. 
    - The unary system is the first number system that everyone learns. We learn about numbers by counting.
    - Fundamentally, numbers are amounts.
    - Number systems other than the unary system, with more than one digit, use digits to represent numbers.
    - Digits are not numbers; they are symbols that represent numbers.
    - The number system we use in everyday life is called the decimal system, or base ten, because it has ten different digits.
    - In the decimal system, the first digit represents the number of 1's in the number, the second digit represents the number of 10's, the third represents the number of one 100's, and so on.
    - The number 154 represents the sum of four ones, five tens and one hundred. We write "154" only because it is easier than writing out one digit 154 times.
    - Bit-sets can be used as a number system. They are like the decimal system but with twos instead of tens.
    - So the first digit represents the amount of ones in the number, the second the amount of twos, the third the amount of fours, and so on.
    - Just as two decimal digits can represent any number from 0 to 99, two binary digits can represent any number from 0 to 3.
    - With every bit you add to your bit-set, the number of possible states is doubled.
    - With three bits, you can represent the numbers 0 through 7. With four, you can represent the numbers 0 through 15.
    - Once you enter the arcade, you will have eight bits in your bit-set, and will be able to represent any number from 0 through 255.
    - But we are not inside the arcade yet. We are only on the threshold. You must learn more before you can enter.
    - **Lesson 3: Bit-moves**
    - Now we have three bits in our bit-set.
    - As we learned in the last lesson, with three bits we can represent the numbers 0 through 7.
    - We will refer to the number being represented by our bit-set as the *value* of the bit-set.
    - A bit-set with three bits can be in one of eight different states. Each state represents a value.
    - Up until now, we have controlled the state of our bit-set by switching on or off the individual bits.
    - But now we are doing something different. Instead of controlling the bits directly, we now have a set of five buttons:
      - The middle button, with a tilde, is called the **complement** button. It simply toggles every bit in the bit-set, so the ones that were on before are now off and the ones that were off before are now on.
      - The two buttons next to it, with less-than and greater-than signs, are the **left shift** and **right shift** buttons. They shift the pattern of the bit-set one bit over to the left or right. In a left shift, the rightmost bit is filled in as off, and the value of the leftmost bit (on or off) is lost. In a right shift, it is the opposite.
      - The two buttons on the outsite, with plus and minus signs, are the **increment** and **decrement** buttons. These buttons are the easiest to understand mathematically, in terms of the *value* of the bit-set, but hardest to understand in terms of the *state* of the bit set. In terms of the value, it simply adds or subtracts one. A decrement at zero will yield the maximum value; an increment at the maximum value will yield zero.
    - You may have noticed that every bit-move has a mathematical as well as a logical meaning.
    - If we wanted to explain how to perform a bit-move, we could give a set of logical instructions for how to change the bits, or a set of mathematical instructions for how to change the value of the bits. Either would have the same result.
    - For instance, if we want to explain how to do a complement, we could say "for every bit, if it's off turn it on and if it's on turn it off," or better, "for every bit, make its value the opposite of what it is currently". Or, we could say, "Take the maximum possible value of this bit-set, which with three bits is seven, and subtract from it the current value, then return the result."
    - For a right shift, we could say "Divide the number in half and round down if necessary", or we could say "Starting from the rightmost bit, give every bit the value (on or off) of the bit directly to the left of it, and make the leftmost bit zero".
    - For increment, it is a little more complicated. We could of course say "Add one," but to put it in terms of bits we would have to say the following: "Start at the rightmost bit. If this bit is off, turn it on and quit; if this bit is on, turn it off and go to the next bit."
    - When you are in the arcade, you will become an expert at using the five bit-moves to transform bit-sets into other bit sets. But you are still not quite ready to enter the arcade. There is still more you have to learn.
    - **Lesson 4: Hexadecimal**
    - Now we have four bits in our bit-set. The range of numbers we can represent is 0 through 15.
    - Up until now, we have been representing the value of our bit-set using the familiar base ten. But now, because the range of numbers we can represent is greater than ten, we will start using a different number system called "hexadecimal", or base 16.
    - From 0 through 9, hexadecimal is the same as base 10. But after 9, things get different.
    - Just as the decimal system as ten digits, the hexadecimal system has 16 digits. Along with the numerals 0 through 9, it also uses the letters A through F.
    - Hexadecimal might seem difficult and unfamiliar at first, but after you enter the arcade you will find that it is an easier way to think about the relationships between bit-sets and the numbers they represent.
    - You are almost ready to enter the arcade.
    - ... and so on and so forth

### 6/10/21

Here is what I need to do next:
- Split the Counter component and state slice into pieces: byte, register, buttons, reg buttons, etc.
- Create a system for controlling the state of the game in order to implement the tutorial content.
- Implement a system for earning and spending tokens, and for grabbing and using special tokens.