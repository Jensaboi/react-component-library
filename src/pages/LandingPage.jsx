import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <div className="bg-light-primary-100 flex flex-col min-h-screen w-full gap-2">
                <Header />
                <main className="flex-1 mt-20 px-5 h-full w-full">
                    <section className="container mx-auto flex flex-col justify-start items-center gap-5">
                        <div className="text-center w-full mt-20">
                            <h1 className="font-sans text-light-text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
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
                            className="bg-green-500 shadow-md hover:bg-green-600 active:bg-green-700 hover:shadow-lg text-sm text-light-primary self-center font-semibold px-4 py-3 rounded-md"
                            to="/Get started"
                        >
                            Get Started
                        </Link>
                    </section>

                    <article className="mt-10 container mx-auto p-5 min-h-[480px] shadow-xl rounded-2xl"></article>
                </main>
            </div>
        </>
    );
}
