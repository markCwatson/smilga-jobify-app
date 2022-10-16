import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';
import main from '../assets/images/main-alternative.svg'

const Dashboard = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>

        <div className='container page'>
            <div className='info'>
                <h1>
                    your <span>dashboard</span>
                </h1>
                <p>
                    Letterpress messenger bag pickled poke. Chartreuse taiyaki poutine salvia kogi. Coloring book hoodie vape intelligentsia, wayfarers tumeric mustache. Trust fund shoreditch Brooklyn, lyft selfies retro plaid banh mi fashion axe asymmetrical small batch mumblecore.
                </p>
            </div>

            <img src={main} alt='job hunt' className='img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Dashboard