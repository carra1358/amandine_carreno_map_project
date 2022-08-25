import { useSelector } from "react-redux"


function Location (){

    interface RootState {
        map : {       
            currentLocation: {
                lat : number,
                long: number
            }
        },
      }

     


    const currentLat = useSelector((state: RootState) => state.map.currentLocation.lat)
    const currentLong = useSelector((state: RootState) => state.map.currentLocation.long)

      
    return (
        <div className="location">
           <p className="current_location">Lattitude :{currentLat}, Longitude : {currentLong}</p>
        </div>
    )
}


export{ Location}