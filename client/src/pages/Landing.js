import { Link } from 'react-router-dom'

import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';
import main from '../assets/images/main.svg'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>

        <div className='container page'>
            <div className='info'>
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>
                    Letterpress messenger bag pickled poke. Chartreuse taiyaki poutine salvia kogi. Coloring book hoodie vape intelligentsia, wayfarers tumeric mustache. Trust fund shoreditch Brooklyn, lyft selfies retro plaid banh mi fashion axe asymmetrical small batch mumblecore.
                </p>

                <Link to='/register' className='btn btn-hero'>
                    Login/Register
                </Link>
            </div>

            <img src={main} alt='job hunt' className='img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Landing
