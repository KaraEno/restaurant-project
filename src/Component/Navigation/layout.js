import React from "react";
import Footer from './footer/footer'


const Layout = (props)=>{
    return(
        <div>
            
            <main>
                
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;