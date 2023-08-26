import { useRef, useState } from 'react'

export default function Bookmark({
  bookmark,
  updateBookmark,
  deleteBookmark
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  const inputCat = useRef(null)
  const inputTf = useRef(null)
  return (
    <>
      <hr></hr>
      <li>
        <h4 onClick={() => setShowInput(!showInput)}>{bookmark.title}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRef.current.value
              updateBookmark(bookmark._id, { title: title })
              setShowInput(false)
            }
          }}
          defaultValue={bookmark.title}
        />
        <h4 onClick={() => setShowInput(!showInput)}>{bookmark.category}</h4>
        <select
          // value={bookmark.category}
          // name="category"
          ref={inputCat}
          style={{ display: showInput ? 'block' : 'none' }}
          type='option'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const category = inputCat.current.value
              updateBookmark(bookmark._id, { category: category })
              setShowInput(false)
            }
          }}
        >
          <option value="option a">option a</option>
          <option value="option b">option b</option>
          <option value="option c">option c</option>
          <option value="option d">option d</option>
        </select>
        <a href={bookmark.url} target='_blank' rel='noreferrer'>{bookmark.url} Link</a>
        <h4 onClick={() => setShowInput(!showInput)}>{bookmark.anon}</h4>
        <input
          ref={inputTf}
          style={{ display: showInput ? 'block' : 'none' }}
          type='checkbox'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const anon = inputTf.current.value
              updateBookmark(bookmark._id, { anon: anon })
              setShowInput(false)
            }
          }}
          defaultValue={bookmark.anon}
        />


        <button
          onClick={() => deleteBookmark(bookmark._id)}
        >
          Delete Me
        </button>
      </li>
    </>
  )
}