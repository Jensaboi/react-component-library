import Header from "../componets/Header"
import { Link } from "react-router-dom"

export default function LandingPage(){

    return(
        <>
        <Header />
        <main>
        <section className="hero-section">
            <h1>Get started with your next React app using reusable, composable UI components.</h1>
            <br/>
            <p>A good starting point with easily modified and reusable React UI components.</p>
            <br />
            <button className="button-reset">
                <Link className="link-reset" to="">
                    Get Started
                </Link>
            </button>
        </section>
        </main>
        </>
    )
}
