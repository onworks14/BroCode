import { Link } from 'react-router-dom'

const Footer = () => {
  const getCurrentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }
  
  return (
    <footer>
     <p>Copyright &copy; {getCurrentYear()}</p>
     <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer