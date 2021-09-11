import React, { useEffect, useState } from 'react';
import { Container } from './styles';

const ScrollToTop: React.FC = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Container className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <img
            src="https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png"
            alt="Go to top"
            loading="lazy"
          />
        </div>
      )}
    </Container>
  );
};

export { ScrollToTop };
