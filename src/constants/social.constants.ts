import Social from "src/app/core/model/Social";
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faCodepen, faFigma } from '@fortawesome/free-brands-svg-icons';

const twitter: Social = {
  id: "twitter",
  icon: faTwitter,
  path: "https://twitter.com/KodenekoFront"
};
const github: Social = {
  id: "github",
  icon: faGithub,
  path: "https://github.com/kode-neko"
};
const codepen: Social = {
  id: "codepen",
  icon: faCodepen,
  path: "https://codepen.io/kodeneko"
};
const stackblitz: Social = {
  id: "stackblitz",
  icon: faBolt,
  path: "https://stackblitz.com/@kode-neko"
};
const figma: Social = {
  id: "figma",
  icon: faFigma,
  path: "https://www.figma.com/@kodeneko"
};

const socialList: Social[] = [
  twitter,
  github,
  codepen,
  stackblitz,
  figma
]

export default socialList;