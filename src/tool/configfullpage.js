import { isMobile } from 'react-device-detect';

function Configfullpage() {
  // Nếu là thiết bị di động, giảm kích thước văn bản đi 10%
  if (isMobile) {
    document.body.style.fontSize = "80%";
  }
}

export default Configfullpage;