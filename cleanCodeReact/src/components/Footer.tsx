/**
 * Aqui eu separei pq eu tinha um componente com um
 * javascript relacionado somente a esse footer
 */

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
        Copyright &copy; Rocketseat {currentYear}
    </footer>
  )
}