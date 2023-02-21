import { AiOutlinePlus } from 'react-icons/ai';

export default function PlusIcon({size, extraStyles, onClick}:any) {
    return (
        <AiOutlinePlus 
            name = 'plus'
            style={{
                fontSize: size,
                color: '#000',
                ...extraStyles
            }}
            onClick={onClick}
        />
    )
}