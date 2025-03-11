function updateMainHeight() {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const graphContainer = document.querySelector(".graph-container");
    // const mynetwork = document.getAnimations("mynetwork");
    if (!header || !main) return;
    
    // const headerHeight = header.offsetHeight;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const scrollY = window.scrollY;
    
    var headerHeightRight = 0;

    if (windowWidth >= 967) {
        headerHeightRight = 74;
    } else if (windowWidth >= 769 && windowWidth <= 966) {
        headerHeightRight = 118;
    }

    if(windowWidth >= 769){
        if (scrollY >= headerHeightRight) {
            main.style.height = 'fit-content';
            graphContainer.style.marginTop  = `${ scrollY- headerHeightRight}px`;
            graphContainer.style.height = `${windowHeight-30}px`;
            
        } else {
            main.style.height = `${windowHeight - headerHeightRight - 30 + scrollY}px`;
            graphContainer.style.marginTop  = "10px";
            graphContainer.style.height = `${windowHeight - headerHeightRight - 30 + scrollY}px`;
        }
    }
    else {

        main.style.height = 'fit-content';
        graphContainer.style.height = `${windowHeight-120}px`;


    }
}

// Cập nhật khi trang vừa tải
window.addEventListener("load", updateMainHeight);

// Cập nhật khi cuộn chuột
window.addEventListener("scroll", updateMainHeight);

// Cập nhật khi thay đổi kích thước cửa sổ
window.addEventListener("resize", updateMainHeight);


export default updateMainHeight;