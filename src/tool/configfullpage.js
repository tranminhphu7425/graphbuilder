function Configfullpage() {
  // Phát hiện thiết bị di động
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || /Android|iPhone|iPad|iPod/i.test(navigator.platform);

  // Nếu là thiết bị di động, giảm kích thước văn bản đi 10%
  if (isMobile) {
    document.body.style.fontSize = "80%";
  }
}

export default Configfullpage;