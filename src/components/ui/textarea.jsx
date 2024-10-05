import React from 'react'

export function Textarea({ className, ...props }) {
  return (
    <textarea className={`w-full p-2 border rounded ${className}`} {...props} />
  )
}