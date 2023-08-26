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
           <input type='text' value={bookmark.title} name='title' onChange={handleChange} placeholder='Field A1' />
           
           <select
            value={bookmark.category}
            onChange={handleChange}
            name="category">
            <option value="Field A2a">Field A2 Select One</option>
            <option value="Field A2b">Field A2a</option>
            <option value="Field A2c">Field A2b</option>
            <option value="Field A2d">Field A2c</option>
          </select>
          {/* <br /> */}
          <input type='text' value={bookmark.url} name='url' onChange={handleChange} placeholder='http://field a3' />
           <input type='submit' value='Create Bookmark' />
         </form>
       </>
     )
   }