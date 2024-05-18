# o the Pelican
the chost: <https://cohost.org/Spax/post/6017252-div-id-top-style>  
the original donald trump tweet: <https://twitter.com/realDonaldTrump/status/757573051215147008>  
the original pelican image: <http://www.jigzone.com/puz/zemThumb?p.jz.jzI.Pelican_Fly_0205:jpg>  
the website that contains the original image (yes I'm not kidding): <http://www.jigzone.com/puzzles/75055D565D07>  
the original pelican edit with the tweet: <https://web.archive.org/web/20230528032516/https://www.reddit.com/r/me_irl/comments/86w7js/me_irl/>  
other relevant chosts (oldest to newest):
- <https://cohost.org/Spax/post/6015752-pelican-incoming>
  - <https://cohost.org/doomvega/post/6015923-i-learned-how-to-sen>
    - <https://cohost.org/Spax/post/6016087-what-the-fuck-i-wa>
- <https://cohost.org/Spax/post/6016719-i-was-looking-for-th>
  - <https://cohost.org/Spax/post/6016782-okay-got-the-full-im>
- <https://cohost.org/Spax/post/6021799-augh-position-abso>
- <https://cohost.org/Spax/post/6022208-why-is-there-a-margi>

## Notes
- literally a first when I had to solve a PUZZLE to get the original image.
- the blackout poetry was actually quite clever. some of the letters didn't exist in the original so the original person who made the meme blacked out certain parts of some letters to make them into other characters
  - R -> P
  - m/n -> .
  - on -> cr
- I left the original text in so that positioning everything wasn't a concern. `user-select: none;` and `opacity: 0;`'d that text though so people wouldn't know unless they looked at the source.
- there was seemingly a margin that was being added to the right of the top div despite all my attempts to prevent that from happening?? (`margin-right: 0 !important;` didn't work). this made the `position: absolute;` on the text box act really weirdly when the screen was resized. turns out setting the top div to `position: relative;` was the answer.
- I did everything with pixel measurements before realizing "oh wait this won't look right on different screen sizes" and then redid everything to be in percentages.
- the only way that this isn't fully faithful to the original screenshot is the verified checkmark next to the username, but I was like "nah". maybe in the future I'll randomly decide to add it.
- speaking of the username, I decided to change it to "Jonald T. Drump" because it softens the blow of "oh this was originally donald trump". it also sounds funnier.
- `mix-blend-mode: difference;` was very useful! I use this blend mode in photoshop all the time but christ I'm so glad it exists for css as well. made positioning less of a nightmare.
- I couldn't figure out how to get the text to resize (and for some reason `overflow-y: auto;` was acting like `overflow-y: scroll;`?) so I just used `overflow-y: hidden;` and hoped that people wouldn't view at comically narrow screen sizes (it looks fine on mobile so you would have to try REALLY hard to get it to not display properly).
- I gotta thank jacksfilms for introducing me (in a video) to the meme a few weeks ago
  - <https://youtu.be/vLe5IaMW9is?t=2m47s>
