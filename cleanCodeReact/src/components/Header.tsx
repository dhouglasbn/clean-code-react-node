interface HeaderProps {
  onCreateNewTodo: () => void
}

/**
 * Essa forma de receber a função onCreateNewTodo
 * permite esse componente permanecer puro
 * Ele agora pode ser usado em qualquer parte do nosso programa
 * Ele não depende do seu contexto
 */
export function Header({ onCreateNewTodo }: HeaderProps) {
  return (
    <header>
        <h1>My new revolutionary to-do list app!</h1>

        <button onClick={onCreateNewTodo}>
          Add new todo
        </button>
    </header>
  )
}