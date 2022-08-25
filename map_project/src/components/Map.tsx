import { GoogleMap, MarkerF, useJsApiLoader} from '@react-google-maps/api';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetcurrentLocation, saveLoc } from '../redux/mapSlice';
import { Button } from './Button';
import Icon from "../asset/map_marker.png"


// React Element that render map, marker and buttons
function Map () {
   
    const { isLoaded } = useJsApiLoader({
        // Enter Your Key
        googleMapsApiKey: "",
      });
    
      
      return isLoaded? <div className='map_container'><MapView /></div> : <div>Loading...</div>;
    }

    // React Element that contains map
    // children of map
    function MapView() {

        type RootState = {
            map: {
                currentLocation : {
                    lat: number,
                    long: number
                },
                list:  Array<object>
            }
           
        }
        const dispatch = useDispatch()
        const mapSelector = useSelector((state : RootState) => state.map)
        const mapList = mapSelector.list
        const lat = mapSelector.currentLocation.lat
        const long = mapSelector.currentLocation.long
    
        const getUserLocalisation = () => {
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position: GeolocationPosition) => {
                        const result = {
                            lat: position.coords.latitude,
                            long: position.coords.longitude,
                        }
                        dispatch(GetcurrentLocation(result))
                    }
                )
    
            }           
        }

        const getrandomLocalisation = () => {
        
         const randomLat = Math.ceil(Math.random() * 90) * (Math.round(Math.random()) ? 1 : -1)
         const randomlng = Math.ceil(Math.random() * 90) * (Math.round(Math.random()) ? 1 : -1)
         const randomLocation = { lat: randomLat , long: randomlng}
        dispatch(GetcurrentLocation(randomLocation))
        dispatch(saveLoc(randomLocation))                     
        }

      useEffect(()=> {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    const result = {
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                    }
                    dispatch(GetcurrentLocation(result))
                    
                }
            )

        } 
   

      }, [])

      type MapOptions = google.maps.MapOptions;
      const center = useMemo(() => ({ lat: lat , lng: long }), [lat,long]);

      const options = useMemo<MapOptions>(
        () => ({
            mapId: "9beb4823f65f6919",
            clickableIcons: false,
            disableDefaultUI: true,
            fullscreenControl: true,
            zoomControl: true,
            
  
        }),
        []
      );
    
      return (
    
       <>
       <GoogleMap zoom={18} center={center}  options={options} mapContainerClassName="map_view">
           <MarkerF position={center} icon={Icon}/>
         </GoogleMap>
         <div className='button_container'>
         <Button customColor='#2EC1EF' label='Teleport me to somewhere random' handleClick={() => getrandomLocalisation()}></Button>
         <Button customColor='#9A2EEF' label='Bring me back home' handleClick={() => getUserLocalisation()}></Button>
         </div>
       </> 
         
        
      );

}

export { Map}