import { BsFillCaretDownFill } from "react-icons/bs";

export default function DownArrowIcon({size, extraStyles, onClick}:any) {
    return (
        <BsFillCaretDownFill 
            name = 'downArrow'
            style={{
                fontSize: size,
                color: '#000',
                ...extraStyles
            }}
            onClick={onClick}
        />
    )
}