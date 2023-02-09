import React, { MouseEvent } from "react";
import styles from "@/styles/powered.module.css";
import codeNameMallow from "@/assets/codename-mallow-1.jpg";
import drawnDownAbyss1 from "@/assets/drawn-down-abyss-1.png";
import froggo1 from "@/assets/froggo-swing-n-grapple-1.png";
import resync1 from "@/assets/resync-1.png";
import PoweredCard from "./powered-card";

const games = [
  {
    id: 0,
    name: "Codename: Mallow",
    author: "Ancalabro Entertainment",
    image: codeNameMallow.src,
    mainlink: "https://store.steampowered.com/app/1437220/Codename_Mallow/",
  },
  {
    id: 1,
    name: "Drawn Down Abyss",
    author: "DaFluffyPotato",
    image: drawnDownAbyss1.src,
    mainlink: "https://store.steampowered.com/app/1146560/Drawn_Down_Abyss/",
    itchio: "https://dafluffypotato.itch.io/drawn-down-abyss",
    steam: "https://store.steampowered.com/app/1146560/Drawn_Down_Abyss/",
    youtube: "https://www.youtube.com/watch?v=lmaEy_2LMdo",
  },
  {
    id: 2,
    name: "Froggo Swing 'n Grapple",
    author: "smellyfrog",
    image: froggo1.src,
    mainlink: "https://store.steampowered.com/app/1743930/Froggo_Swing_n_Grapple/",
    itchio: "https://smellyfrog.itch.io/froggo-swing-n-grapple",
    steam: "https://store.steampowered.com/app/1743930/Froggo_Swing_n_Grapple/",
    youtube: "https://www.youtube.com/watch?v=GufkQcT-H2k",
  },
  {
    id: 3,
    name: "RESYNC",
    author: "Ghast",
    image: resync1.src,
    mainlink: "https://ghastly.itch.io/resync",
    itchio: "https://ghastly.itch.io/resync",
  },
];

class Powered extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentGameId: 0,
    };
    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground(e: MouseEvent) {
    const data = Object.assign({}, e.target.dataset);
    this.setState({ currentGameId: data.info });
  }

  render() {
    // TODO: clean this up
    if (this.state.currentGameId === undefined) {
        this.setState({ currentGameId: 0 });
    }

    var currentGame = games[this.state.currentGameId];
    if (currentGame === undefined) {
        currentGame = games[0]
    }

    return (
      <div
        className={styles.powered}
        style={{
          backgroundImage: `url(${currentGame.image})`,
        }}
      >
        <div className={styles.poweredcontainer}>
          <div className={styles.header}>Pygame Powered</div>
          Over the many years pygame has been around, there have been amazing
          projects created by the community.
          <div className={styles.poweredcards}>
            {games.map((data, key) => {
              return (
                <div key={key} onMouseEnter={this.changeBackground} data-info={key}>
                  <PoweredCard name={data.name} author={data.author} link={data.mainlink} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Powered;