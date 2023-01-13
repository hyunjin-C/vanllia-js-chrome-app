const quotes = [
  {
    quote: "With the new day comes new strength and new thoughts.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The way I see it, if yoi want the rainbow, you gotta put up with the rain",
    author: "dolly parton",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: It goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "You're not defined by your past; you're prepared by it. You're stronger, more experienced, and you have greater confidence.",
    author: "Joel Osteen",
  },
  {
    quote: "Every moment is a fresh beginning.",
    author: "T.S. Eliot",
  },
  {
    quote:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain",
  },
  {
    quote: "A good plan today is better than a perfect plan tomorrow.",
    author: "George S. Patton",
  },
  {
    quote: "Every day brings new choices.",
    author: "Martha Beck",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
