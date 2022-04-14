import { FC } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router';

const Home: FC = (props) => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/login');
  // }, [navigate]);
  return (
    <div>
      <Link to="/login">login</Link>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
