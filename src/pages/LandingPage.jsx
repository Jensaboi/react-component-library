import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <Header />
            <main className="p-5 bg-light-primary-100 h-screen flex flex-col justify-start items-center gap-10">
                <section className="flex flex-col justify-start items-center gap-5">
                    <div className="text-center">
                        <h1 className="font-sans text-light-text-primary text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                            Build Faster with Reusable React Components
                        </h1>

                        <p className="text-light-text-100 font-sans text-lg font-medium">
                            Kickstart your next React app with customizable,
                            reusable UI components that are easy to integrate
                            and modify.
                        </p>
                    </div>
                    <Link
                        className="bg-green-500 shadow-md hover:bg-green-600 active:bg-green-700 hover:shadow-lg text-sm text-light-primary font-semibold px-4 py-3 rounded-md"
                        to=""
                    >
                        Get Started
                    </Link>
                </section>
                <article className="bg-light-primary w-full h-full p-2 shadow-xl rounded-2xl">
                    <h2 className="text-light-text-primary font-sans font-medium text-lg text-center">
                        Show case:
                    </h2>
                </article>
            </main>
        </>
    );
}
