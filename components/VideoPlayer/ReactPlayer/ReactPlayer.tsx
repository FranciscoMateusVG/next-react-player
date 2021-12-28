import { setRef, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useRef } from "react";
import RP from "react-player";
import { usereactVideoStore } from "../store/reactVideoStore";
interface ReactPlayerProps {
	setRef: any;
}

export const ReactPlayer: React.FC<ReactPlayerProps> = ({ setRef }) => {
	// Hooks
	const {
		width,
		height,
		url,
		muted,
		playing,
		volume,
		rate,
		playedSeconds,
		playedTotal,
	} = usereactVideoStore();
	const ref = useRef(null);
	//useEffects
	useEffect(() => {
		setRef(ref);
	}, [ref]);
	return (
		<RP
			ref={ref}
			width={width.get()}
			height={height.get()}
			url={url.get()}
			muted={muted.get()}
			playing={playing.get()}
			volume={volume.get()}
			playbackRate={rate.get()}
			onProgress={(changeState: any) => {
				playedTotal.set(changeState.played);
				playedSeconds.set(Math.floor(changeState.playedSeconds));
			}}
		/>
	);
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));
