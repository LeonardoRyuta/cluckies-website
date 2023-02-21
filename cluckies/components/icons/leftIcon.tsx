import { AiOutlineLeft } from 'react-icons/ai';

export default function LeftIcon({size, extraStyles, onClick}:any) {
    return (
        <AiOutlineLeft 
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