import './index.css'
import image from './download.jpg'
function App() {

  return (
    <div className="container">
        <header className="header">Photo Fetcher</header>

        <nav className="navBar">
            <section className="grayscaleSection">
                <button>toggle button</button>
                <span style={{fontSize: "19px"}}>Make photos grayscale</span>
            </section>

            <button className="FetchNewButton">Fetch New Photos</button>
        </nav>

        <main className="mainContent">

            <section className="imageContainer">
                
                <img src={image} alt="Random Image" className="randomImage"/>
                
                <article className="imageInfo">
                    <p>Author</p>
                    <p>Description</p>
                </article>

            </section>

            <section className="imageContainer">
                
                <img src={image} alt="Random Image" className="randomImage"/>
                
                <article className="imageInfo">
                    <p>Author</p>
                    <p>Description</p>
                </article>

            </section>

            <section className="imageContainer">
                
                <img src={image} alt="Random Image" className="randomImage"/>
                
                <article className="imageInfo">
                    <p>Author</p>
                    <p>Description</p>
                </article>

            </section>

            <section className="imageContainer">
                
                <img src={image} alt="Random Image" className="randomImage"/>
                
                <article className="imageInfo">
                    <p>Author</p>
                    <p>Description</p>
                </article>

            </section>

        </main>
        <footer>
            <button className="morePhotosBttn">More Photos</button>
        </footer>
    </div>
  )
}

export default App
