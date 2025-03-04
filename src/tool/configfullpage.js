import { isMobile } from 'react-device-detect';

function Configfullpage() {
  const isSmallScreen = window.innerWidth < 768;
  // Nếu là thiết bị di động, giảm kích thước văn bản đi 10%
  if (isMobile || isSmallScreen) {
    document.body.style.fontSize = "90%";
  }
}

export default Configfullpage;