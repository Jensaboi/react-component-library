import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <div className="bg-light-primary-100 flex flex-col h-screen w-full gap-10">
                <Header />
                <main className="flex-1 px-5 h-full w-full">
                    <section className="container mx-auto flex flex-col justify-start items-center gap-5">
                        <div className="text-center w-full">
                            <h1 className="font-sans text-light-text-primary text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                                Build Faster with Reusable <br />
                                React Components
                            </h1>

                            <p className="text-light-text-100 font-sans text-lg font-medium">
                                Kickstart your next React app with,
                                <br /> reusable UI components that are <br />
                                easy to integrate and modify.
                            </p>
                        </div>
                        <Link
                            className="bg-green-500 shadow-md hover:bg-green-600 active:bg-green-700 hover:shadow-lg text-sm text-light-primary font-semibold px-4 py-3 rounded-md"
                            to="/Get started"
                        >
                            Get Started
                        </Link>
                    </section>
                    <article className="container mx-auto p-5 shadow-xl rounded-2xl">
                        <h2 className="text-light-text-primary font-sans font-medium text-lg text-center">
                            Show case:
                        </h2>
                    </article>
                </main>
            </div>
        </>
    );
}
