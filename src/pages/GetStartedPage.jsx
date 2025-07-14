import React from "react";
import Header from "../components/Header";
export default function GetStartedPage() {
    return (
        <>
            <div className="bg-light-primary-100 flex flex-col h-screen w-full gap-10">
                <Header />
                <main className="flex-1 w-full">
                    <h1>Get started</h1>
                </main>
            </div>
        </>
    );
}
