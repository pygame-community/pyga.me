import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import styles from '@/styles/powered.module.css';
import drawnDownAbyss1 from '@/assets/drawn-down-abyss-1.png';
import froggo1 from '@/assets/froggo-swing-n-grapple-1.png';
import resync1 from '@/assets/resync-1.png';
import tuxemon1 from '@/assets/tuxemon-1.png';
import PoweredCard from './powered-card';


const games = [
  {
    name: 'Drawn Down Abyss',
    author: 'DaFluffyPotato',
    image: drawnDownAbyss1.src,
    mainlink: 'https://store.steampowered.com/app/1146560/Drawn_Down_Abyss/',
    itchio: 'https://dafluffypotato.itch.io/drawn-down-abyss',
    steam: 'https://store.steampowered.com/app/1146560/Drawn_Down_Abyss/',
    youtube: 'https://www.youtube.com/watch?v=lmaEy_2LMdo',
  },
  {
    name: "Froggo Swing 'n Grapple",
    author: 'smellyfrog',
    image: froggo1.src,
    mainlink: 'https://store.steampowered.com/app/1743930/Froggo_Swing_n_Grapple/',
    itchio: 'https://smellyfrog.itch.io/froggo-swing-n-grapple',
    steam: 'https://store.steampowered.com/app/1743930/Froggo_Swing_n_Grapple/',
    youtube: 'https://www.youtube.com/watch?v=GufkQcT-H2k',
  },
  {
    name: 'RESYNC',
    author: 'Ghast',
    image: resync1.src,
    mainlink: 'https://ghastly.itch.io/resync',
    itchio: 'https://ghastly.itch.io/resync',
  },
  {
    name: 'Tuxemon',
    author: 'The Tuxemon Community',
    image: tuxemon1.src,
    mainlink: 'https://github.com/Tuxemon/Tuxemon',
  },
];


const Powered: React.FC = () => {
  const [currentGameId, setCurrentGameId] = useState(0);

  const changeBackground = useCallback((id: number) => {
    setCurrentGameId(id);
  }, []);

  const currentGame = games[currentGameId];

  return (
    <>
      <Head>
        {games.map((data, key) => (
          <link key={key} rel="preload" href={data.image} as="image" />
        ))}
      </Head>

      <div
        className={styles.powered}
        style={{
          backgroundImage: `url(${currentGame.image})`,
        }}
      >
        <div className={styles.poweredcontainer}>
          <div className={styles.header}>Pygame Powered</div>
          Over the many years pygame has been around, there have been amazing projects created by the community.
          <div className={styles.poweredcards}>
            {games.map((data, key) => (
              <div key={key} onMouseEnter={() => changeBackground(key)} data-info={key}>
                <PoweredCard name={data.name} author={data.author} link={data.mainlink} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Powered;
