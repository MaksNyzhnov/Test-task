import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feeds: [
    {
      title: "NASA Breaking news",
      link: "https://www.nasa.gov/news-release/feed/",
    },
    {
      title: "Reddit front page",
      link: "https://www.reddit.com/.rss",
    },
    {
      title: "Mobile World Live",
      link: "https://www.mobileworldlive.com/latest-stories/feed/",
    },
  ],
  isLoggedIn: false,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addFeed(state, action) {
      state.feeds.push(action.payload);
    },
    removeFeed(state, action) {
      state.feeds.splice(state.feeds.indexOf(action.payload), 1);
    },
    toggleLogin(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { addFeed, removeFeed, toggleLogin } = feedSlice.actions;

export default feedSlice.reducer;
