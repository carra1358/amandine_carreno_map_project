# amandine_carreno_map_project
Web app using google map Api,

![React](https://shields.io/badge/madewith-ReactApp-teal)
![Typescript](https://shields.io/badge/madewith-TypeScript-blue)


## Mission

- Integrate the google maps API
- The map default coordinates should be the current user position.
- User can visit random location or see his location.
 - User can see a list of each visited location.

## Tech

- [ReactApp](https://github.com/facebook/create-react-app)-Create React apps with no build configuration
- [Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)- is JavaScript with syntax for types JavaScript library.
- [Visual Studio Code ](https://code.visualstudio.com/) - Code editor.
- [Git](https://git-scm.com/) - Version control.


## Usage
To be able to render the project correctly, you will have to add a map Key in the componant Map.
```
function Map () {
   
    const { isLoaded } = useJsApiLoader({
        // Enter Your Key
        googleMapsApiKey: "",
      });
    
      
      return isLoaded? <div className='map_container'><MapView /></div> : <div>Loading...</div>;
    }
}
```

## Installation

- git clone
- npm install
- cd map_project
- npm start


## Available Scripts

`````
npm test
npm run build
npm run eject
`````

## Author
