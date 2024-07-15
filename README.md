# Netflix GPT
- Create react app
- Configured Tailwind CSS
- Header
- Routing of app
- Login form
- Sign Up form
- Form Validation
- useRef hook
- Firebase setup
- deploy after production
- create signup user account
- implement Sign In user Api
- Created redux store with userSlice
- Implemented Sign out
- Update Profile(done validation,redux,auth)
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in redirect to Login pg and if logged in redirect to browse page.
unsubscribe
- Unsubscribe to the onAuthStageChanged callback
- Add hardcoded values to the constants file
- Fetch from TMDB Movies
- Register TMDB API and create an app & get access token
- Get data from TMDB now playing movies list API
- Browse page structure
/*   MainContainer
        -VideoBackground
        -VideoTitle
    SecondaryContainer
        -MovieList * N
        -Moviecards * N
*/
- Custom hook for Now Playing Movies
- Create MovieSlice
- Update Store with Movies Data
- PLanning for main container and secondary container

- Fetch data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind classes to make Main container look good
- Structure of secondary container
/*
MovieList - Popular
MovieCard*n
MovieList - Now Playing
MovieList - Trending
*/
- Build Secondary container
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with tailwind css
- usePopularMovies custom hook
- GPT Search feature 
- Multi-language Feature in our GPT Search page
- fetched moviesuggestions from tmdb
- Memoization
- adding .env file
- Making the site responsive






# Features:
-Login/Sign Up
    -Sign In/Sign Up Form
    -redirects to Browse Page
-Browse(after Authentication)
    -Header
    -Main Movie
        -Tailer in Background
        -Title & Description
        -Movie Suggestions
            -MovieLists * N
-NetflixGPT
    -Search Bar
    -Movie Suggestions
