import { useState } from 'react'
import './App.css'

/** Quando separar o componente em componentes menores
 * 
 * 1. Quando eu tenho algo repetitivo
 * 2. Quando eu consigo isolar algo do seu contexto (sem prejudicar o comportamento original)
 */

function App() {
  const [todos, setTodo] = useState<string[]>([])

  const currentYear = new Date().getFullYear()

  return (
    <div>
      <header>
        <h1>My new revolutionary to-do list app!</h1>

        <button onClick={() => {}}>Add new todo</button>
      </header>

      <main>
        <h2>Advantages</h2>

        <section>
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast.</p>  
          </div>

          <div>
            <h3>NO CSS</h3>
            <p>Clean and flat design with no CSS.</p>  
          </div>
        </section>

        <ul>
          {todos.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
      </main>

      <footer>
        Copyright &copy; Rocketseat {currentYear}
      </footer>
    </div>
  )
}

export default App
