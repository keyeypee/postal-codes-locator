This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application Implementation

- Made a Search bar which filters out the postal codes based on postal codes and names of the locations. It triggers filter only when user stops for atleast 300 ms (Used `debounce` for that).

- For Table, used `Virtual Scroll Concept`, it takes filtered results from Search bar or total results as prop. It loads only few records in DOM that are in current view only, thus optimizing memory uses. Also once user stops scrolling for atleast 300 ms (`debounce` again), then only it triggers re-render of markers on Google Map on right side. Thus preventing unnecessary re-renders.

- In Map Section, drawing markers for records that are in current view only. Created a `LatLngBound` accross current markers, thus making them to come to view and zoome in, every time new markers are drawn.

- Used styled-components for writing CSS in SCSS style.

## Setup

In project root directory, run following command.

```
    git clone https://github.com/keyeypee/postal-codes-locator.git
    cd postal-codes-locator && yarn install
```

Or

```
    git clone https://github.com/keyeypee/postal-codes-locator.git
    cd postal-codes-locator && npm install
```

To run the project use below scripts.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
