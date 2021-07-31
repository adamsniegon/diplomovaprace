import {useState} from 'react';

export default function ReadMore({shortText, longText}) {
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(state => !state);
    }

    return(
        <>
            <div>
                <p>{shortText}</p>
            </div>
            <button onClick={toggleReadMore}>Click</button>
            {readMore && (
                <div>
                    <p>{longText}</p>
                </div>
            )}
        </>
    );
}