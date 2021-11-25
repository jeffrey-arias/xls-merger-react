# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Description

Set up the date range of the data files from this page:

![](https://i.ibb.co/51WJmqs/XLS-Merger-Date-Range.png)

The app pulls the data from a Java REST API 
_(Java was chosen since this is a heavy file I/O operation and Node is too slow for that)_

By default, the Dashboard page looks like this:

![Dashboard Page, default](https://i.ibb.co/420ZsF8/default.png)

After pulling data, the correct percentages are shown and the displayed graphs, tables and info can be filtered using the "Filter By" section by checking and unchecking the corresponding data label:

![Dashboard, filtered](https://i.ibb.co/9TYYBgP/filtered-dashboard.png)
