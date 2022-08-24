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