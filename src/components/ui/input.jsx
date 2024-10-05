import React from 'react'

export function Input({ className, ...props }) {
  return (
    <input className={`w-full p-2 border rounded ${className}`} {...props} />
  )
}