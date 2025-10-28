import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

/** Quando separar o componente em componentes menores
 * 
 * 1. Quando eu tenho algo repetitivo
 * 2. Quando eu consigo isolar algo do seu contexto (sem prejudicar o comportamento original)
 */

// Na hora de separar olhamos mais para o js antes de olhar para o jsx
// Nosso objetivo não é diminuir a leitura, mas deixar o código mais legível

// Aula 3 -> Funções e event listeners

// handle, on

function App() {
  const [todos, setTodo] = useState<string[]>([])

  // handle para criar funções no componente a partir de eventos do usuário
  function handleCreateNewTodo() {

  }

  return (
    <div>
      <Header onCreateNewTodo={() => {}} />

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

      <Footer />
    </div>
  )
}

export default App
