import { AiOutlineMinus } from 'react-icons/ai';

export default function MinusIcon({size, extraStyles, onClick}:any) {
    return (
        <AiOutlineMinus 
            name = 'minus'
            style={{
                fontSize: size,
                color: '#000',
                ...extraStyles
            }}
            onClick={onClick}
        />
    )
}