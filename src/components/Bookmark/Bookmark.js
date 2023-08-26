import { useRef, useState } from 'react'

export default function Bookmark ({
  bookmark,
  updateBookmark,
  deleteBookmark
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  return (
    <>
      <li>
        <h4 onClick={() => setShowInput(!showInput)}>{bookmark.title}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRef.current.value
              updateBookmark(bookmark._id, { title })
              setShowInput(false)
            }
          }}
          defaultValue={bookmark.title}
        />


<h4 onClick={() => setShowInput(!showInput)}>{bookmark.category}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='select'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const category = inputRef.current.value
              updateBookmark(bookmark._id, { category })
              setShowInput(false)
            }
          }}
          defaultValue={bookmark.category}
        />

        





        <a href={bookmark.url} target='_blank' rel='noreferrer'>{bookmark.url} Link</a>
        <button
          onClick={() => deleteBookmark(bookmark._id)}
        >
          Delete Me
        </button>
      </li>
    </>
  )
}