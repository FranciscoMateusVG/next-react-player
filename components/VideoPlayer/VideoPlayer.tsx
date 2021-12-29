import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactPlayer } from "./ReactPlayer/ReactPlayer";
import { ControllerLayer } from "./ControllerLayer/ControllerLayer";
import { useRef, useState } from "react";
import { useVideoPlayer } from "./useVideoPlayer";
import { Navigator } from "./Navigator/Navigator";
import { useNavigatorStore } from "./store/navigatorStore";
import { Questions } from "./Questions/Questions";

interface VideoPlayerProps {}

export const VideoPlayer: React.FC<VideoPlayerProps> = () => {
	// Hooks
	const { playerWrapper } = useStyles();
	const [ref, setRef] = useState(null);
	const playerContainerRef = useRef(null);
	const { tipo } = useNavigatorStore();
	//consts

	const utils = useVideoPlayer(ref, playerContainerRef);
	const [show, setShow] = useState(false);
	const handleMouseEnter = (bool: boolean) => setShow(bool);
	return (
		<Container maxWidth="md">
			{tipo.get() === "video" && (
				<div
					ref={playerContainerRef}
					className={playerWrapper}
					onMouseEnter={() => handleMouseEnter(true)}
				>
					<ReactPlayer setRef={setRef} />
					<ControllerLayer
						utils={utils}
						show={show}
						handleMouseEnter={handleMouseEnter}
					/>
				</div>
			)}
			{tipo.get() === "questions" && <Questions />}
			<Navigator />
		</Container>
	);
};

const useStyles = makeStyles({
	playerWrapper: {
		width: "100%",
		height: "500px",
		position: "relative",
	},
});
