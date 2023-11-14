import cors from "cors";
import express from "express";
import RSSParcer from "rss-parser";

let feedURL = "https://www.nasa.gov/news-release/feed/";

const parser = new RSSParcer();

const articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((article) => {
    articles.push({ article });
  });
};

let app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(articles);
});

parse(feedURL);

const server = app.listen("8080", () => {
  console.log("App is listening on http://localhost:8888");
});

export default server;
