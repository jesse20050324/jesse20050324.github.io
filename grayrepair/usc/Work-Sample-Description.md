# Creative Work Sample Description — The Gray Workshop

## 1. The work sample

The Gray Workshop is a browser-based puzzle game about photo repair. The player runs a small repair shop where every job is a photo with its colors stripped away, and repairs it with a small set of tools based on digital image processing. There are 13 levels.

- Platform: browser (HTML5)
- Development period: 2 months
- Team: designed by me alone
- Levels: 13

## 2. My role

The game is a solo project and I did all of the work myself. My work included the level design, the UI, the interaction rules, and playtesting. I ran several rounds of playtests with classmates and friends; the earliest one was with a friend of mine in particular, and later rounds reshaped levels 1 and 2.

## 3. Inspiration

I took a digital image processing course last semester. I photograph and cut videos in my spare time, so concepts like tone, exposure and gray value were already familiar to me and the course felt easy. Many of my classmates, though — including a friend of mine — could recite the formulas and charts but could not say what the numbers describe in an actual image.

The game is made for both kinds of people: those with no background in the subject, and students taking the course who have not yet formed the concepts. I wanted to turn the most basic ones, gray value, threshold and gray mapping, into things a player can move and see the effect of directly. That idea became this game.

## 4. Rules and objectives

**The screen.** Every level shows two images and two bars below. The gray axis is a gradient from black to white; thresholds divide it into stretches. The mapping bar shows the color of each stretch. A pixel renders in the color of the stretch its gray falls into.

**The four moves.** The entire game runs on these four moves; the layout never changes across the 13 levels.

1. Tap a pixel to select it. (From level 3 on, its position is also marked on the gray axis.)
2. Drag the handle on the gray axis to change the selected pixel's gray.
3. Drag a threshold to change the gray range that maps to a color.
4. Drag a color chip onto a stretch of the mapping bar to assign a color to that stretch.

**Winning.** In levels 1–9 the left image is the answer, and the check is pixel-for-pixel equality between the two images. From level 10 on, the left image is no longer an answer: it shows the photo that needs repairing, with a one-line prompt such as "A faded old photo.", and the goal is the player's to infer. The answer is not given up front; the restored image appears only after the check passes. A pass flashes green and moves the player to the next level; a fail flashes red and the player tries again. There is no timer and no penalty.

## 5. Level design

The game grew out of a playtest. The first prototype was a single level, the one that later became level 8, with a lot of explanation around it: a histogram, a lookup table, written notes for every part. A friend of mine, who was taking the course but had not yet formed the concepts, tried it and got lost; the extra information did not make the level easier to learn, it gave him more things to puzzle over. So I removed all of the teaching text and put the rules into the starting state of the level instead, and set one standard for the whole project: every level has to be solvable by a complete beginner playing alone, with no text. Apart from the one-line prompt in levels 10–13 and a short post-clear note naming the concept, the game contains no instructional text; instructions never appear before or during a level.

Held against that standard, the prototype itself was the next problem: as a synthesis level it presupposed every concept at once. So the direction reversed: working backward from level 8, each concept it requires became a level of its own, from a single pixel in level 1 to thresholds in levels 5 to 7. Working forward from it gave levels 9 to 13, where the same mechanics meet real repair jobs.

The derivation also shaped the difficulty curve: each level introduces at most one new move or concept, and builds only on what the previous levels taught. The design notes behind the levels are on the portfolio website, linked below.

## 6. Why I chose this piece

**It shows that I can turn a body of knowledge into a system a player can learn by playing.** The concepts are never explained as instructions, they are the tools, and the levels are arranged so that a complete beginner can pick them up without text. A short note after each clear names what the player has just discovered.

**It reflects my way of thinking as a designer.** All 13 levels were derived from one level, working backward and forward, and every design decision has a reason behind it. Level 2 opens with one wrong pixel already selected, so its teaching lives in the starting state rather than in text. Level 4 hides two yellow pixels instead of painting them a wrong color, because a visible wrong color would send players back to the mapping bar to guess again and again, while an invisible pixel points the problem toward the gray.

**It points at the direction I want to keep working in.** Teaching through level design rather than text is what I want to keep doing, and this piece is the clearest example of it I have.

## 7. Links

- Portfolio website, with the design notes: https://jesse20050324.github.io/grayrepair/
- Play in the browser, no installation: https://jesse20050324.github.io/dip-game/game/blue/index.html
- Gameplay video: https://youtu.be/rjIUUuGn3N0
