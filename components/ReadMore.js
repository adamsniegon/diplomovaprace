import {useState} from 'react';

export default function ReadMore({children}) {
    if (!Array.isArray(children) || (Array.isArray(children) && children.length !== 2)) {
        return (null);
    }
    
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(state => !state);
    }

    return(
        <>
            <div>
                {children[0]}
            </div>
            <button onClick={toggleReadMore}>Click</button>
            {readMore && children[1]}
        </>
    );
}