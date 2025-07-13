import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="p-5 dark:bg-slate-800 text-black dark:text-white">
          <h1 className="text-gray-900 dark:text-blue-100 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Build Faster with Reusable React Components
          </h1>
          <br />
          <br />
          <p className="text-lg font-semibold">
            Kickstart your next React app with customizable, reusable UI
            components that are easy to integrate and modify.
          </p>
          <br />

          <Link
            className="bg-green-500 shadow-md hover:bg-green-600 hover:shadow-lg text-white text-xl leading-tight tracking-tight font-bold p-4 pl-8 pr-8 rounded-lg"
            to=""
          >
            Get Started
          </Link>
        </section>
      </main>
    </>
  );
}
