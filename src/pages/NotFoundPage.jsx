import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
  <div>
  <h1>Page not found</h1>
  <Link to="/">Ir al inicio</Link>
  </div>
  )
}

export default NotFoundPage