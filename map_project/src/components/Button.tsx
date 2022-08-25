/**
 * 
 * @param label button text content
 * @param customColor  button background color
 * @param handleClick function pass to handle the behavior of button
 * @return React Element 
 */
function Button ({label, customColor, handleClick}:ButtonProps){


    return (
        <div className="basic_button" style={{backgroundColor: customColor}} onClick={handleClick}>{label}</div>
    )
}

interface ButtonProps {
    label: string
    customColor: string
    handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        
    }

export{ Button}