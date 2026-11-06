# Creative Work Sample Description — The Gray Workshop

## 1. The work sample

The Gray Workshop is a browser-based puzzle game about photo repair. The player runs a small repair shop where every job is a photo with its colors stripped away, and repairs it with a small set of tools based on digital image processing. There are 13 levels.

- Platform: browser (HTML5)
- Development period: 2 months
- Team: designed by me alone
- Levels: 13

## 2. My role

The game is a solo project and I did all of the work myself. My work included the level design, the UI, the interaction rules, and playtesting: I invited friends to play early versions and adjusted the levels based on their feedback.

## 3. Inspiration

I took a digital image processing course last semester. Concepts like gray value, thresholds and tone appeared in class as formulas and charts, and many students could recite them without being able to say what they describe in an actual image. I wanted to turn the most basic ones, gray value, threshold and gray mapping, into things a player can move and see the effect of directly. That idea became this game.

## 4. Rules and objectives

**The screen.** Every level shows two images and two bars below. The gray axis is a gradient from black to white; thresholds divide it into stretches. The mapping bar shows the color of each stretch. A pixel renders in the color of the stretch its gray falls into.

**The four moves.** The entire game runs on these four moves; the interface never changes across the 13 levels.

1. Tap a pixel to select it; its gray is marked on the gray axis.
2. Drag the handle on the gray axis to change the selected pixel's gray.
3. Drag a color chip onto a stretch of the mapping bar to assign a color to that stretch.
4. Drag a threshold to change the gray range that maps to a color.

**Winning.** In levels 1–9, the goal is to make the right image identical to the left one, pixel by pixel. From level 10 on, the left side shows a damaged photo with a one-line prompt, for example "A faded old photo."; the repaired result is not shown, and the player infers it from the prompt. If the image is right, the player moves on to the next level; if not, the frame flashes red as a reminder and the player tries again. There is no timer and no penalty.

## 5. Level design

The game grew out of a playtest. The first prototype was a single level, the one that later became level 8, with a lot of explanation around it: a histogram, a lookup table, written notes for every part. A friend without the background tried it and got lost; the extra information did not make the level easier to learn, it gave him more things to puzzle over. So I removed all of the teaching text and put the rules into the starting state of the level instead, and set one standard for the whole project: a complete beginner has to be able to finish the game by playing alone. There is no tutorial text anywhere in the game.

Held against that standard, the prototype itself was the next problem: as a synthesis level it presupposed every concept at once. So the direction reversed: working backward from level 8, each concept it requires became a level of its own, from a single pixel in level 1 to thresholds in levels 5 to 7. Working forward from it gave levels 9 to 13, where the same mechanics meet real repair jobs. Level 9 is the first turn: the target still shows on the left, but it can no longer be copied pixel by pixel — removing the sun from a landscape only works by dragging a threshold so far that the sun's gray stretch disappears into the sky. From level 10 on, the target is gone entirely: for jobs like restoring an ink-stained letter or retouching a faded portrait, the player sees only a one-line prompt. The derivation also shaped the difficulty curve: each level introduces at most one new move or concept, and builds only on what the previous levels taught. The full design notes for every level are on the portfolio website, linked in the last section.

## 6. Why I chose this piece

Three reasons. First, it shows that I can turn a body of knowledge into a system a player can learn by playing: the concepts are not explained in the game, they are the tools, and the levels are arranged so that a complete beginner can pick them up without text. Second, the level design reflects my way of thinking as a designer: all 13 levels were derived from one level, working backward and forward, and every design decision has a reason behind it. Level 2 opens with one wrong pixel already selected, so its teaching lives in the starting state rather than in text. Level 4 hides two yellow pixels instead of painting them a wrong color, because a visible wrong color would send players back to the mapping bar to guess again and again, while an invisible pixel points the problem toward the gray. Third, teaching through level design rather than text is the direction I want to keep working in, and this piece is the clearest example of it I have.

## 7. Links

- Portfolio website, with the full level-by-level design notes: https://jesse20050324.github.io/grayrepair/
- Play in the browser, no installation: https://jesse20050324.github.io/dip-game/game/blue/index.html
- Gameplay video: https://youtu.be/rjIUUuGn3N0
