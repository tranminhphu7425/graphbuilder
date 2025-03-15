function updateMenuHeight() {
    
    const Menu = document.querySelector(".menu");
  
    
    // const headerHeight = header.offsetHeight;
    const windowHeight = window.innerHeight;
    
 
    
    if(windowHeight <= 720){
        Menu.style.height = `${windowHeight-30}px`;
    }
    else{
        Menu.style.height = `720px`;
    }
}


// Cập nhật khi thay đổi kích thước cửa sổ
window.addEventListener("resize", updateMenuHeight);


export default updateMenuHeight;