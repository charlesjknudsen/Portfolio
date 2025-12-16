import NavBar from '../components/home/navbar.jsx';
import Footer from '../components/home/footer.jsx';
import Intro from '../components/home/intro.jsx';
import Feature from '../components/home/feature.jsx';

function Home() {
    return (
        <div>
            <NavBar />
            <Intro />
            <Feature />
            <Footer />
        </div>
    );
}

export default Home;