import { AiOutlineRight } from 'react-icons/ai';

export default function RightIcon({size, extraStyles, onClick}:any) {
    return (
        <AiOutlineRight 
            name = 'right'
            style={{
                fontSize: size,
                color: '#000',
                ...extraStyles
            }}
            onClick={onClick}
        />
    )
}