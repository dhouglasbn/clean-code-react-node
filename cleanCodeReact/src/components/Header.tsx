interface HeaderProps {
  // Quando eu crio um componente e ele precisa receber
  // uma função que é disparada de um evento do usuário usamos 'on'
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