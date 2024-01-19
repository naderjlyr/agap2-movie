# agap2Movie-task-nj
All the requested features are implemented:
###### Page 1:
The TV show page should at least display the following information (you're free to add more):
- [x] Show title
- [x] Show Description
- [x] Show cover image
- [x] Episode list. Every episode in the list should link to a details page for that specific episode

###### Page 2:
The episode detail page should contain at least:
- [x] Episode-title
- [x] Episode Summary
- [x] Episode cover image

API: http://www.tvmaze.com/api

Requirements:

- [x] Setup two routes in your app, one for TV shows and one for episodes.
- [x] Retrieve data from TV Maze REST API.

- [x] Use of typescript.
- [x] Use React to render UI components.
- [x] Use "Create React App" to bootstrap your project.

- [x] Use of react-hooks.

- [x] Do not leave any unused dependencies or scripts
- [x] Setup state management - redux - and data flow.
- [x] Style your components with css-in-js, make sure that the end result is responsive and has at least one breakpoint.
- [x] All code should be checked-in into a Git repository.

- [x] Documentation is optional but appreciated, the same goes for comments in your code.

Nice to have:

If you feel you have time to express yourself more here's the list of few points to guide you:

- [x] Add unit and snapshot tests.
- [x] URL where the app can be viewed and seen working (use any platform of your preference: heroku.com, aws.amazon.com, etc)

#### Evaluation points:

- [x] use of community best practices

- [x] use of clean code which is self-documenting

- [x] use of domain driven design

- [x] tests for business logic

- [x] clean and extendable project structure, usage of best practices

- [x] use of css-in-js

- [x] use of design frameworks

- [x] use of code quality checkers such as linters and build tools

- [x] use of git with appropriate commit messages

- [x] documentation: README and inline code comment
## Introduction

This app is a React-based web application designed for agap2 / TV enthusiasts. It provides an interactive platform for users to discover, explore, and learn more about their favorite TV shows. this application utilizes the TVMaze API to fetch detailed information about various shows, episodes, and casts.

## Project Structure

The application is structured into several key components and features, enhancing user experience and application maintainability.

### Components

1. **ErrorBoundary**: Catches and handles JavaScript errors anywhere in the child component tree, logs those errors, and displays a fallback UI.

2. **Layout**: Wraps the application layout, including the navigation and content display areas.

3. **NavLink**: A custom navigation link component for seamless routing within the app.

4. **NotFound**: A user-friendly component displayed when a page or resource is not found.

5. **DrawerMenu**: A slide-in menu for mobile and smaller screen sizes, providing navigation options.

6. **Footer**: A footer component for the application, displaying developer credits and other relevant information.

7. **Index**: An interactive search bar utilizing debounced input for efficient real-time search experience.

8. **ToggleSwitch**: A custom toggle switch for theme change (light/dark mode).

9. **TopBar**: The top navigation bar, containing menu toggle, search bar, and theme switcher.

10. **EpisodeCard/EpisodeDetailCard**: These components display episode information in a card layout, suitable for lists and detailed views.

11. **RelatedEpisodes**: Displays episodes related to the current viewing context, enhancing content discoverability.

12. **SeasonCard**: Similar to EpisodeCard, but for seasons, offering a quick glance at the various seasons of a show.

13. **TVShowCard**: A comprehensive display of a TV show's details, including imagery, ratings, and a summary.

### Pages

1. **HomePage**: The landing page of the application, showcasing details of a selected show.

2. **SeasonsPage**: Displays all seasons of a selected TV show.

3. **EpisodesPage**: Lists all episodes of a TV show, categorized by season.

4. **EpisodeDetailsPage**: Provides detailed information about a specific episode.

5. **ShowDetailsPage**: Similar to HomePage but for different shows as per user navigation.

### Features

- **React Router Integration**: Seamlessly manages routing and navigation within the app.
- **Redux Toolkit**: Manages the application's state, providing a predictable state container.
- **Responsive Design**: Ensures a consistent user experience across various device sizes.
- **Dark Mode**: Users can switch between light and dark themes for comfortable viewing.
- **Infinite Scroll**: Implements infinite scrolling for episodes and seasons, enhancing user engagement.
- **API Integration**: Utilizes the TVMaze API to fetch real-time data about TV shows, episodes, and casts.
- **Error Handling**: Gracefully handles API errors and unexpected interruptions.
- **Animated Transitions**: Implements subtle animations for smooth user experience transitions.

### Utilities

- **useTvShows, useDarkMode**: Custom hooks for fetching show data and managing theme.
- **Data Formatting**: Utility functions for formatting dates, text, and grouping episodes.

### API Services

- **tvMazeService**: Manages API calls to TVMaze, fetching details about shows, episodes, casts, and popular shows.

## Getting Started

To run the application locally:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the app using `npm start`.
4. Access the app at `http://localhost:3000`.


