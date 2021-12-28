import {
	Theme,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	SvgIconTypeMap,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ListItemProps {
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
	primary: String;
	secondary: String;
}

export const ItemList: React.FC<ListItemProps> = ({
	Icon,
	primary,
	secondary,
}) => {
	// States
	// Consts
	// useEffects
	// Hooks
	const {} = useStyles();
	// Props

	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar>
					<Icon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={primary} secondary={secondary} />
		</ListItem>
	);
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));
