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
           <input type='text' value={bookmark.title} name='title' onChange={handleChange} placeholder='Title' />
           <input type='text' value={bookmark.url} name='url' onChange={handleChange} placeholder='URL' />
           <select
            value={bookmark.category}
            onChange={handleChange}
            name="category">
            <option value="Curiousities">Select One ...</option>
            <option value="Curiousities">Curiousities</option>
            <option value="Thoughts">Thoughts</option>
            <option value="ToDos">ToDos</option>
          </select>
          <br />
           <input type='submit' value='Create Bookmark' />
         </form>
       </>
     )
   }