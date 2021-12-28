import {
	Button,
	Grid,
	Theme,
	Typography,
	Popover,
	IconButton,
	PopoverProps,
} from "@mui/material";
import { Fullscreen } from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState } from "react";
import { usereactVideoStore } from "../../../store/reactVideoStore";
interface RightControlsProps {
	utils: any;
}

export const RightControls: React.FC<RightControlsProps> = ({ utils }) => {
	// States
	const [anchorEl, setAnchorEl] = useState(null);
	const { rate } = usereactVideoStore();
	// Consts
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const onClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;
	const { toggleFullScreen } = utils;
	// Hooks
	const { bottomIcons } = useStyles();
	// props
	const popProps: PopoverProps = {
		id,
		open,
		anchorEl,
		onClose,
		anchorOrigin: {
			vertical: "top",
			horizontal: "center",
		},
		transformOrigin: {
			vertical: "bottom",
			horizontal: "center",
		},
	};

	return (
		<Grid item>
			<Button variant="text" onClick={handleClick} className={bottomIcons}>
				<Typography>{rate.get()}x</Typography>
			</Button>
			<Popover {...popProps}>
				<Grid
					container
					direction="column-reverse"
					style={{ background: "rgba(0,0,0,0.6)" }}
				>
					<ButtonRates rates={[0.5, 1, 1.5, 2]} />
				</Grid>
			</Popover>
			<IconButton
				aria-label="rewind"
				className={bottomIcons}
				onClick={() => toggleFullScreen()}
			>
				<Fullscreen fontSize="large" />
			</IconButton>
		</Grid>
	);
};

const ButtonRates = (props: any) => {
	const { bottomIcons } = useStyles();
	const { rates } = props;
	const { rate } = usereactVideoStore();
	return rates.map((ratio: number, index: number) => (
		<Button
			key={index}
			variant="text"
			className={bottomIcons}
			onClick={() => rate.set(ratio)}
		>
			<Typography>{ratio}x</Typography>
		</Button>
	));
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		bottomIcons: {
			color: "white",
			"&:hover": {
				color: "red",
			},
		},
	}),
);
