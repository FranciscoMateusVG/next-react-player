import { AppBar, Toolbar, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { VideoPlayer } from "../components/VideoPlayer/VideoPlayer";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Prototipo</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6">Protótipo</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<Toolbar />
			<VideoPlayer />
		</div>
	);
};

export default Home;
