import { useSelector } from "react-redux"


function Visited (){

    interface mapListValue {
        lat : number,
        long: number
      }

    interface RootState {
        map : {       
            list: Array<mapListValue>
        },
      }

     


    const list = useSelector((state: RootState) => state.map.list)
    const mapList = [...list]
      
    return (
        <div className="locations_visited">
           <ul >
             <h4>Locations Visited</h4>
            {
                mapList.length > 0 ?
                
                mapList.map((value,index) => {
                    return (
                        <li key={index}> Lattitude :{value.lat}, Longitude : {value.long}</li>
                    )

                }) : null
            }
              
           </ul>
        </div>
    )
}


export{Visited}