
/**Javascript for mobile menu */
let mobileMenuIcon = document.querySelector(".header__nav_mobile_icon");
let mobileMenuItems = document.querySelector(".header__nav_mobile_items");
let hamburger = document.querySelector(".header__nav_mobile_icon_hamburger");
let closeHamburger = document.querySelector(".header__nav_mobile_icon_close")

let productMobile = document.querySelector(".header__nav_mobile_items_list_product_title");
let productMobileItems = document.querySelector(".header__nav_mobile_items_list_product_items");
let companyMobile = document.querySelector(".header__nav_mobile_items_list_company_title");
let companyMobileItems = document.querySelector(".header__nav_mobile_items_list_company_items");
let connectMobile = document.querySelector(".header__nav_mobile_items_list_connect_title");
let connectMobileItems = document.querySelector(".header__nav_mobile_items_list_connect_items")

let arrowProduct = document.querySelector(".arrow-product")
let arrowCompany = document.querySelector(".arrow-company")
let arrowConnect = document.querySelector(".arrow-connect")

productMobile.addEventListener("click", ()=>{
    if(!companyMobileItems.classList.contains("hide-mobile")){
        companyMobileItems.classList.add("hide-mobile");
    }
    if(!connectMobileItems.classList.contains("hide-mobile")){
        connectMobileItems.classList.add("hide-mobile")
    }
    productMobileItems.classList.remove("hide-mobile");
    arrowProduct.classList.add("active-arrow")
    arrowCompany.classList.remove("active-arrow")
    arrowConnect.classList.remove("active-arrow")
})
companyMobile.addEventListener("click", ()=>{
    if(!productMobileItems.classList.contains("hide-mobile")){
        productMobileItems.classList.add("hide-mobile");
    }
    if(!connectMobileItems.classList.contains("hide-mobile")){
        connectMobileItems.classList.add("hide-mobile")
    }
    companyMobileItems.classList.remove("hide-mobile");
    arrowProduct.classList.remove("active-arrow")
    arrowCompany.classList.add("active-arrow")
    arrowConnect.classList.remove("active-arrow")
})
connectMobile.addEventListener("click", ()=>{
    if(!companyMobileItems.classList.contains("hide-mobile")){
        companyMobileItems.classList.add("hide-mobile");
    }
    if(!productMobileItems.classList.contains("hide-mobile")){
        productMobileItems.classList.add("hide-mobile")
    }
    connectMobileItems.classList.remove("hide-mobile");
    arrowProduct.classList.remove("active-arrow")
    arrowCompany.classList.remove("active-arrow")
    arrowConnect.classList.add("active-arrow")
})

mobileMenuIcon.addEventListener("click", ()=>{
    mobileMenuItems.classList.toggle("hide-menu-mobile");
    hamburger.classList.toggle("deactive-mobile-menu");
    closeHamburger.classList.toggle("deactive-mobile-menu");
})


/**Javascript for desktop Menu */

let arrowCompanyDesktop = document.querySelector(".arrow-company-desktop");
let arrowConnectDesktop = document.querySelector(".arrow-connect-desktop");
let arrowProductDesktop = document.querySelector(".arrow-product-desktop");

let productDesktop = document.querySelector(".header__nav_desktop_items_list_product_title");
let productDesktopItems = document.querySelector(".header__nav_desktop_items_list_product_items");
let companyDesktop = document.querySelector(".header__nav_desktop_items_list_company_title");
let companyDesktopItems = document.querySelector(".header__nav_desktop_items_list_company_items");
let connectDesktop = document.querySelector(".header__nav_desktop_items_list_connect_title");
let connectDesktopItems = document.querySelector(".header__nav_desktop_items_list_connect_items")


productDesktop.addEventListener("click", ()=>{
    if(!companyDesktopItems.classList.contains("invinsible-desktop")){
        companyDesktopItems.classList.add("invinsible-desktop");
    }
    if(!connectDesktopItems.classList.contains("invinsible-desktop")){
        connectDesktopItems.classList.add("invinsible-desktop")
    }
    productDesktopItems.classList.toggle("invinsible-desktop");
    arrowProductDesktop.classList.toggle("active-arrow")
    arrowCompanyDesktop.classList.remove("active-arrow")
    arrowConnectDesktop.classList.remove("active-arrow")
})
companyDesktop.addEventListener("click", ()=>{
    if(!productDesktopItems.classList.contains("invinsible-desktop")){
        productDesktopItems.classList.add("invinsible-desktop");
    }
    if(!connectDesktopItems.classList.contains("invinsible-desktop")){
        connectDesktopItems.classList.add("invinsible-desktop")
    }
    companyDesktopItems.classList.toggle("invinsible-desktop");
    arrowProductDesktop.classList.remove("active-arrow")
    arrowCompanyDesktop.classList.toggle("active-arrow")
    arrowConnectDesktop.classList.remove("active-arrow")
})
connectDesktop.addEventListener("click", ()=>{
    if(!companyDesktopItems.classList.contains("invinsible-desktop")){
        companyDesktopItems.classList.add("invinsible-desktop");
    }
    if(!productDesktopItems.classList.contains("invinsible-desktop")){
        productDesktopItems.classList.add("invinsible-desktop")
    }
    connectDesktopItems.classList.toggle("invinsible-desktop");
    arrowProductDesktop.classList.remove("active-arrow")
    arrowCompanyDesktop.classList.remove("active-arrow")
    arrowConnectDesktop.classList.toggle("active-arrow")
})