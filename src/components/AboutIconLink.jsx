import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
    return (
		<div className='about-link'>
			{/* <Link
                to={{
					pathname: '/about',
					search: '?sort=name',
					hash: '#hello',
                }}
            ></Link> */}
            <Link to='/about'>
                <FaQuestion size={30} />
            </Link>
        </div>
    )
}
	// create an active link in react to show what page is active
	//<NavLink to='/about' activeClassName='active' />
export default AboutIconLink
