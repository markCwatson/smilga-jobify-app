import Wrapper from '../assets/wrappers/LandingPage';
import err from '../assets/images/not-found.svg'

const Error = () => {
  return (
    <Wrapper>
        <div className='container page'>
            <img src={err} alt='job hunt' className='img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Error