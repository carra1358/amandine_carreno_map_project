import { GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetcurrentLocation, saveLoc } from '../redux/mapSlice';
import { Button } from './Button';



function Map () {
   
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyA8zezqorEqem7xnoAit9r_SJ1vFA-IyKY",
      });
    
      if (!isLoaded) return <div>Loading...</div>;
      return <div className='map_container'><MapView /></div>;
    }

    
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
        console.log(mapList, mapSelector)
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

  const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };
    
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
       <GoogleMap zoom={18} center={center} options={options} mapContainerClassName="map_view">
           <Marker position={center}  />  
         </GoogleMap>
         <div className='button_container'>
         <Button customColor='#2EC1EF' label='Teleport me to somewhere random' handleClick={() => getrandomLocalisation()}></Button>
         <Button customColor='#9A2EEF' label='Bring me back home' handleClick={() => getUserLocalisation()}></Button>
         </div>
       </> 
         
        
      );

}

export { Map}