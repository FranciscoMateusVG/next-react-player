import {
	Theme,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Work, Image } from "@mui/icons-material";
import { ItemList } from "./ItemList/ItemList";

interface NavigatorProps {}

export const Navigator: React.FC<NavigatorProps> = () => {
	// Consts
	const arr = [
		{ icon: Image, primary: "testim", secondary: "testao" },
		{ icon: Image, primary: "testim", secondary: "testao" },
		{ icon: Image, primary: "testim", secondary: "testao" },
	];
	// Hooks
	const {} = useStyles();

	return (
		<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			{arr.map((a, i) => (
				<ItemList
					key={i}
					Icon={a.icon}
					primary={a.primary}
					secondary={a.secondary}
				/>
			))}
		</List>
	);
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));
