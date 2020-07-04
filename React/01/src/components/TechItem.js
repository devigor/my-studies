import React from 'react'

export const TechItem = ({ tech, handleDelete }) => (
  <li key={tech}>
    {tech}
    <button type="button" onClick={ handleDelete }>X</button>
  </li>
)