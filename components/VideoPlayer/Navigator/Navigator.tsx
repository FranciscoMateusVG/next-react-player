import { Theme, List } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useNavigatorStore } from "../store/navigatorStore";

import { ItemList } from "./ItemList/ItemList";

interface NavigatorProps {}

export const Navigator: React.FC<NavigatorProps> = () => {
	// Hooks
	const {} = useStyles();

	return (
		<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			<ItemList />
		</List>
	);
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));
