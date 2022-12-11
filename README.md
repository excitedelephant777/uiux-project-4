# Development

### Link to Deployed Website
https://excitedelephant777.github.io/uiux-project-4/

### Goal and Value of the Application
The goal of the application is to help users explore popular tourist destinations in Europe and add them to an itinerary. This service is valuable because the user can see the population, first language, and miles from Providence, and use the itinerary feature to keep track of cities they are interested in visiting.

### Usability Principles Considered
The filter and sorting features are on the top of the website so that they are easy to find. The cities themselves are organized compactly on the page so that it is easy to compare them. I took advantage of common conventions like "X" to mean "remove" to avoid too many words on the page. I think the website is highly learnable, so I trusted the user to play around a bit and learn the features rather than overwhelm the user with too many instructions.

### Organization of Components
The App component creates an instance of FilteredList, passing in an array of location objects, and includes the citation information at the bottom of the page. The FilteredList component renders the filter/sorting features, uses the DisplayList component to display the list of cities, and uses the Cart component to display the Itinerary. The DisplayList component maps each item in the list to HTML for the image, text, and "Add to Itinerary" button. The Cart component renders each item in the cart and the total miles from Providence figure.

### How Data is Passed Down Through Components
The App component passes in the array of location objects to the FilteredList component, which filters and sorts that array according to the user's selections and passes that trimmed version to the DisplayList component to render. The FilteredList component has a state variable for the locations in the cart which it passes to the Cart Component. The DisplayList and Cart components also take in callback functions to the FilteredList component to handle adding to and removing from the cart.

### How the User Triggers State Changes
The user triggeres state changes by changing the values in the filter/sort menus or adding/removing from the cart.
