import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/ErrorPage';
import err from '../assets/images/not-found.svg';

const Error = () => {
  return (
    <Wrapper className='full-page'>
        <div>
            <img src={err} alt='job hunt' className='img main-img'/>
            <h3>Oops.. page not found!</h3>
            <p>sorry about that</p>
            <Link to='/'>Back Home</Link>
        </div>
    </Wrapper>
  )
}

export default Error