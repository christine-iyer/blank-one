export default function CreateBookmark ({
     createBookmark,
     bookmark,
     handleChange
   }) {
     return (
       <>
         <h2>Create A Bookmark</h2>
         <form onSubmit={(e) => {
           e.preventDefault()
           createBookmark()
         }}
         >
           <input type='text' value={bookmark.title} name='title' onChange={handleChange} placeholder='text' />
           
           <select
            value={bookmark.category}
            onChange={handleChange}
            name="category">
            <option value="option a">option a</option>
            <option value="option b">option b</option>
            <option value="option c">option c</option>
            <option value="option d">option d</option>
          </select>
          {/* <br /> */}
          <input type='text' value={bookmark.url} name='url' onChange={handleChange} placeholder='http://link.com' />
           <input type='submit' value='Create Bookmark' />
         </form>
       </>
     )
   }