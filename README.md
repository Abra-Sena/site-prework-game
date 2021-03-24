# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Abravi Emiline Tekpa**

Time spent: **15** hours spent in total

Link to project: [my project on Glitch](https://glitch.com/edit/#!/site-prework-game)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/8e2b0029-f07f-4f16-aea6-a4faa1467292%2Fwalkthrough.gif?v=1616564524609)
<img src='walkthrough.gif' title='Gif Walkthrough' width='250' alt='Gif Walkthrough' /> 

Gif created with [Kap](https://getkap.co/)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- Colors:  https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
- Selecting DOM elements: https://www.w3schools.com/jsref/dom_obj_all.asp
- HTML Emoji: https://www.w3schools.com/charsets/ref_emoji.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

- I could'nt get the sound after clicking on the buttons and the Console logs this error: 'ReferenceError' saying 'Can't find variable:  AudioContext()'.I did some search and MDN Web APIs stated that 'AudioContext() requires a vendor prefix or different name for use', and does not support latencyHint or sampleRate option on Safari browser. I switched to Chrome witch has a full support for AudioContext().
- Had issue removing text from button at the start of each game without page refresh. I tried all knowledge I have (innerHTML, innerText, textContent, getElementsByclassName, querySelector, querySelectorAll) about locating elements in a DOM tree with no success. I searched the topic on w3schools and developper.mozilla website, but i was not able to resolve that.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

There are so many option to implement something, example of selecting DOM element. How to know which method to use for a specific task ?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

- I would have implemented all the optional features and work more on the design to make buttons look like the physical game.
- Adaptive designing to fit all screens type.



## License

    Copyright Abravi Emiline Tekpa

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
