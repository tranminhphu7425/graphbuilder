function updateMainHeight() {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    if (!header || !main) return;
    
    const headerHeight = header.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    if (scrollY >= 75) {
        main.style.height = `${windowHeight}px`;
    } else {
        main.style.height = `${windowHeight - headerHeight - 20 + scrollY}px`;
    }
}

// Cập nhật khi trang vừa tải
window.addEventListener("load", updateMainHeight);

// Cập nhật khi cuộn chuột
window.addEventListener("scroll", updateMainHeight);

// Cập nhật khi thay đổi kích thước cửa sổ
window.addEventListener("resize", updateMainHeight);


export default updateMainHeight;