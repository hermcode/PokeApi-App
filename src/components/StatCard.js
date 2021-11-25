import React from 'react'

export const StatCard = ({stat, stat_prop}) => {
    return (
        <div className="stat-card">
            <div className="stat-data flex">
                <p>{stat_prop}</p>
                <h4>{stat}%</h4>
            </div>
        </div>
    )
}
