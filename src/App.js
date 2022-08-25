import "./App.css";
import {Navbar, Header, Movie1, Space, Movie2, Movie3, Movie4, Movie5, Footer} from "./components"

function App() {
    return (
        <main>
            <header className="header-bg"> 
                <Navbar/>
                <Header/>
            </header>
            <Movie1/>
            <Space/>
            <Movie2/>
            <Space/>
            <Movie3/>
            <Space/>
            <Movie4/>
            <Space/>
            <Movie5/>
            <Space/>
            <Footer/>
        </main>
    );
}

export default App;

