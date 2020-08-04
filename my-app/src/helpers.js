import React from 'react';
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