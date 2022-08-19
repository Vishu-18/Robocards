import React from 'react';

const Card= ({id ,name, email, username}) => {
    return(
        <div className='tc bg-light-pink dib br3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id+5}`}/>
            <div>
                <h1>{name}</h1>
                <h2>{username}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;