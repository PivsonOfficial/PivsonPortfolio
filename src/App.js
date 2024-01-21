
import NavigationMenu from "./components/navigation/navigation_menu";
import Portfolio from "./components/pages/portfolio";
import Footer from "./components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


function App() {
    return (
        <div>

            <NavigationMenu></NavigationMenu>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </div>
    );
}

export default App;
