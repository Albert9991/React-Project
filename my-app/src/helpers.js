import React from 'react';

export  const hendleResponse = (resp) => {
    return resp.json().then(data => {
        if(resp.ok){
            return data
        }
        return Promise.reject(data)
    })
}

export const renderChangePercent = cangePercent => {
    if (cangePercent > 0) {
        return (
            <span className="percent-raised">
                {cangePercent}% &uarr;
            </span>
        )
    } else if (cangePercent < 0) {
        return (
            <span className="percent-fallen">
                {cangePercent}% &darr;
            </span>
        )
    } else {
        return (
            <span>
                {cangePercent};
            </span>
        )
    }
}
