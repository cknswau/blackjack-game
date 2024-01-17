just my first go at a quick blackjack game in javascript

there are a few changes i want to make, but i'll do that later

1, make it so 1, can either be a 1 or 11, at present, 1 is a 11 and 11 is a 11<br>
2, make it so the START GAME button disapears when the game is going and comes back when either you STAND or BUST or get BLACKJACK<br>
3, change NEW CARD to HIT, and add a STAND button, STAND will end the game<br>
4, make a automated dealer, which will draw 2 cards, and once you stand or have BJ, it will hit till either a push, win, or bust.<br>
5, found a bug where 2x 11 could be selected by the random geberator, that will be fixed with the note above about makeing a 11 a 1 if a 11 makes the total > 21
6. make the chips counter work, by reducing $5 each game, adding $10 on a win and $15 on a BJ

17/1/24: made it so when a game is started, the start game button is hidden, and the new card button is shown. (above #2)
17/1/24: changed new card button to hit, to get ready for stand button and dealer (above #3)
17/1/24: cleaned alot of code and rewrote heaps