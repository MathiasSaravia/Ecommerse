import React from 'react'

export const TableRow = ({title,duracion,rating,genre,award}) => {
  return (
    <tbody>
                <tr>
                    <td>{title}</td>
                    <td>{duracion}</td>
                    <td>{rating}</td>
                    <td><ul>
                    {genre.map((g)=><li key={g}>{g}</li>)}</ul>
                    </td>
                    <td>{award}</td>
                </tr>
            </tbody>
  )
}
