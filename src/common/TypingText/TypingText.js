'use client'
import { useEffect, useState } from 'react';
import styles from './TypingText.module.css'

const TypingText = ({ content }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < content.length) {
        setTypedText((prevText) => prevText + content[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        // Menyembunyikan kursor saat selesai mengetik
        setTimeout(() => {
          setShowCursor(false);
        }, 2000); // Mengatur kursor untuk disembunyikan setelah 2 detik
      }
    }, 150);

    const cursorInterval = setInterval(() => {
      if (currentIndex < content.length) {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [currentIndex, content]);

  return (
    <div>
      <p>
        {typedText}
        {showCursor && <span className={styles.animate_blink}>|</span>}
      </p>
    </div>
  );
};

export default TypingText;
