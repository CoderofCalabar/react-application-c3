import React from 'react'

const Posts = ({
    post,
    onClick
}) => {
  return (
    <div 
        className="rounded-md flex flex-col justify-center gap-4"
        style={{
            boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.5)"
        }}
        onClick={onClick}
    >
        <div className='flex flex-col p-4 gap-4'>
            <p className="text-lg font-semibold leading-5">{post.title}</p>
            <p className='text-xs'>{post.body}</p>
        </div>
    </div>
  )
}

export default Posts