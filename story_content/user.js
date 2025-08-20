window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const button = object('5w1VxWN30bu');
var player = GetPlayer();
var name = player.GetVar("UserName");

fetch("https://script.google.com/macros/s/AKfycbwj7Q1MmHp53484xbgtIXYYbb5Rm4N94xp8T5h7_ticJx-sI4YWvzUf7Mw7hclgB2Fb/exec", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: name })
});
}

window.Script2 = function()
{
  const restart1 = object('6cMC1vufi8x');
var player = GetPlayer();
var userName = player.GetVar("UserName");

var answers = [
  { name: userName, slide: "Slide17", field: "A1", answer: player.GetVar("Slide17_A1") }
];

fetch("https://script.google.com/macros/s/AKfycbwj7Q1MmHp53484xbgtIXYYbb5Rm4N94xp8T5h7_ticJx-sI4YWvzUf7Mw7hclgB2Fb/exec", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ answers: answers })
});

}

window.Script3 = function()
{
  const restart1 = object('5g9gLz1SFyV');
var player = GetPlayer();
var userName = player.GetVar("UserName");

var answers = [
  { name: userName, slide: "Slide13", field: "A1", answer: player.GetVar("Slide13_A1") },
  { name: userName, slide: "Slide13", field: "A2", answer: player.GetVar("Slide13_A2") },
  { name: userName, slide: "Slide13", field: "A3", answer: player.GetVar("Slide13_A3") }
];

fetch("https://script.google.com/macros/s/AKfycbwj7Q1MmHp53484xbgtIXYYbb5Rm4N94xp8T5h7_ticJx-sI4YWvzUf7Mw7hclgB2Fb/exec", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ answers: answers })
});

}

window.Script4 = function()
{
  const restart1 = object('5zARIXDha6l');
var player = GetPlayer();
var userName = player.GetVar("UserName");

var answers = [
  { name: userName, slide: "Slide14", field: "A1", answer: player.GetVar("Slide14_A1") },
  { name: userName, slide: "Slide14", field: "A2", answer: player.GetVar("Slide14_A2") },
  { name: userName, slide: "Slide14", field: "A3", answer: player.GetVar("Slide14_A3") }
];

fetch("https://script.google.com/macros/s/AKfycbwj7Q1MmHp53484xbgtIXYYbb5Rm4N94xp8T5h7_ticJx-sI4YWvzUf7Mw7hclgB2Fb/exec", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ answers: answers })
});

}

window.Script5 = function()
{
  const restart1 = object('5nXg8JDi0bs');
var player = GetPlayer();
var userName = player.GetVar("UserName");

var answers = [
  { name: userName, slide: "Slide4", field: "A1", answer: player.GetVar("Slide4_A1") },
  { name: userName, slide: "Slide4", field: "A2", answer: player.GetVar("Slide4_A2") }
];

fetch("https://script.google.com/macros/s/AKfycbwj7Q1MmHp53484xbgtIXYYbb5Rm4N94xp8T5h7_ticJx-sI4YWvzUf7Mw7hclgB2Fb/exec", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ answers: answers })
});

}

};
