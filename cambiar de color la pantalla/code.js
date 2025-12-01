onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/El-Reno-Rodolfo-_-Canci--n-popular-navide--a-_-Villancico-para-ni--as-y-ni--os.mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://www.infobae.com/new-resizer/AAYNf9d0Zrl6rnBanZAoxtURwo0=/arc-anglerfish-arc2-prod-infobae/public/MQ4IPCPHBBEVVDZ2SXX367ZOO4.jpg");
});
