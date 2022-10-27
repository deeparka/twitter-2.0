import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Twitter 2.0</title>
            </Head>
            <main>
                {/* Sidebar */}
                <Sidebar />
                {/* Feed */}
                {/* Widgets */}
            </main>
        </div>
    );
};

export default Home;
