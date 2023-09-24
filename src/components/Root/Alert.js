import { useState } from 'react'

export default function Alert() {
     const [name, setName] = useState('Enxter Name Here')
     const [content, setContent] = useState('Enter content here')

     function handleSubmit(e) {
          e.preventDefault()
          setTimeout(() => {
               alert(`You wrote ${content} to ${name}`)
          }, 500)
     }
     return(
          <form onSubmit={handleSubmit}>
               <label>
                    To: {' '}
                    <select
                    value={name}
                    onChange={e => setName(e.target.value)}><option value="Oh">Oh</option>
                         <option value="Me">Me</option>
                    </select>
               </label>
               <textarea
               placeholder="Enter you preferred Content"
               value={content}
               onChange={e=> setContent(e.target.value)}
               />
               <button type="submit">Send</button>
          </form>
     )
}