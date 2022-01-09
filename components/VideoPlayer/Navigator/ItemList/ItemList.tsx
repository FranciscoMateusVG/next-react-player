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
import { usereactVideoStore } from "../../store/reactVideoStore";
import { useNavigatorStore } from "../../store/navigatorStore";
import { QuestionAnswer, OndemandVideo } from "@mui/icons-material";

interface ListItemProps {}

export const ItemList: React.FC<ListItemProps> = ({}) => {
	// States
	// Consts
	const { arr } = useNavigatorStore().get();
	// useEffects
	// Hooks
	const { root } = useStyles();
	const { url } = usereactVideoStore();
	const { tipo } = useNavigatorStore();

	return (
		<>
			{arr.map((a, i) => (
				<ListItem
					className={root}
					key={i}
					onClick={
						a.blocked
							? () => alert("Termine o video primeiro!")
							: () => {
									if (tipo.get() === "video") {
										url.set(a.id);
									}

									tipo.set(a.type);
							  }
					}
				>
					<ListItemAvatar>
						<Avatar>
							{a.type === "video" && <OndemandVideo />}
							{a.type === "questions" && <QuestionAnswer />}
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={a.primary}
						secondary={
							a.blocked ? (
								<div style={{ color: "red" }}>Blocked</div>
							) : (
								""
							)
						}
					/>
				</ListItem>
			))}
		</>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			cursor: "pointer",
		},
	}),
);
