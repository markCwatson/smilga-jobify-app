import logo from '../assets/images/logo.svg'

const Logo = (option) => {
    const className = option ? option : 'logo';

    return (
        <nav>
            <img src={logo} alt='jobify' classname={className} />
        </nav>
    )
}

export default Logo