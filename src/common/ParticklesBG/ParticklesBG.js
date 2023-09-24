'use client'
import React, { useCallback, useEffect, useState, useContext } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styles from './ParticklesBG.module.css';
import { ThemeContext } from '@/context/ThemeContext';

const ParticklesBG = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { mode } = useContext(ThemeContext); // Menggunakan mode tema dari konteks

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
    setIsLoaded(true);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const particlesContainer = document.getElementById('tsparticles');
      if (particlesContainer) {
        particlesContainer.classList.add(styles.particlesFadeIn);
      }
    }
  }, [isLoaded]);

  return (
    <div
      className={`${styles.particlesContainer} w-full h-full`}
      style={{
        backgroundColor: mode === 'dark' ? 'var(--background-color-dark)' : 'var(--background-color-light)',
      }}
    >
      <Particles
        className="w-full h-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fpsLimit: 30,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",

                distance: 400,
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

export default ParticklesBG