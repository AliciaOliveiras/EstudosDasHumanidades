import { useEffect } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, navigate]);

  return null;
};

export default ScrollToTop;