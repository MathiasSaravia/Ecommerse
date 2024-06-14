import React from 'react'

export const TableHead = ({items}) => {
    return (
            <thead>
                <tr>
                    {
                        items.map((el,i)=><th key={i} scope="col">{el}</th>)
                    }
                </tr>
            </thead>
            
    )
}
