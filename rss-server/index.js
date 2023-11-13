import cors from "cors";
import express from "express";
import RSSParcer from "rss-parser";

const feedURL = "https://netflixtechblog.com/feed";

const parser = new RSSParcer();

const articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((article) => {
    articles.push({ article });
  });
};
parse(feedURL);

let app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(articles);
});

const server = app.listen("8888", () => {
  console.log("App is listening on http://localhost:8888");
});

export default server;
