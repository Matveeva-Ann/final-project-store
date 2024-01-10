import { useState, useEffect } from 'react';
import { Button, ArrowUp } from 'components/Buttons/IconButton/IconButton.style';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(document.documentElement.scrollTop > 300);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button variant="btnToTop" visible={isVisible} onClick={scrollToTop}>
      <ArrowUp />
    </Button>
  );
}
