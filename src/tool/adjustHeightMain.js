function updateMainHeight() {
    
    const graphContainer = document.querySelector("#trangchu-main");
  
    
    // const headerHeight = header.offsetHeight;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
 
    
    if(windowWidth >= 1024){
        graphContainer.style.height = `${windowHeight}px`;
    }
    else{
        graphContainer.style.height = `fit-content`;
    }
}

// Cập nhật khi trang vừa tải
window.addEventListener("load", updateMainHeight);

// Cập nhật khi cuộn chuột


// Cập nhật khi thay đổi kích thước cửa sổ
window.addEventListener("resize", updateMainHeight);


export default updateMainHeight;