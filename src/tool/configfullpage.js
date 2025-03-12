import { isMobile } from 'react-device-detect';

function Configfullpage() {
  const isSmallScreen = window.innerWidth < 768;

  // Kiểm tra xem có phải là WebView không
  const isWebView = /(Android.*wv|iPhone.*wv|iPad.*wv)/i.test(navigator.userAgent);

  // Nếu là thiết bị di động hoặc màn hình nhỏ hoặc là WebView, giảm kích thước văn bản đi 10%
  if (isMobile || isSmallScreen || isWebView) {
    document.body.style.fontSize = "90%";
  }
}

export default Configfullpage;