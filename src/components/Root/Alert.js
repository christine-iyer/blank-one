import { useState } from 'react'

export default function Alert() {
     const [name, setName] = useState('')
     const [content, setContent] = useState('')

     function handleSubmit(e) {
          e.preventDefault()
          setTimeout(() => {
               alert(`You wrote ${content} to ${name}`)
          }, 500)
     }
     return(
          <form onSubmit={handleSubmit}>
               <label>
                    To: {' '}</label>
                    <select
                    value={name}
                    onChange={e => setName(e.target.value)}><option value="Oh">Oh</option>
                         <option value="Me">Me</option>
                    </select>
                    <label>
                    Says: {' '}</label>
               <textarea
               placeholder="Enter content here "
               value={content}
               onChange={e=> setContent(e.target.value)}
               />
               <button type="submit">Send</button>
          </form>
     )
}