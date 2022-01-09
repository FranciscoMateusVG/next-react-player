import { Button, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Formik, Field, Form } from "formik";
import { useNavigatorStore } from "../store/navigatorStore";
import FormikRadioGroup from "./FormikRadioGroup/FormikRadioGroup";

interface QuestionsProps {}

export const Questions: React.FC<QuestionsProps> = () => {
	// States
	// Consts
	const { arr } = useNavigatorStore();
	const onSubmit = (values: any) => {
		let index = 2;
		let teste = arr.get();
		const newArr = [...teste];

		const obj = arr[index].get();
		const newObj = {
			icon: obj.icon,
			primary: obj.primary,
			secondary: obj.secondary,
			type: obj.type,
			id: obj.id,
			blocked: false,
		};
		arr[index].set((p) => newObj);
	};
	const options = ["Sim", "Nao", "Talvez"];
	// useEffects
	// Hooks
	const {} = useStyles();
	// Props

	return (
		<div style={{ width: "100%" }}>
			<h1>Questões</h1>
			<Formik
				initialValues={{
					radioGroup1: "",
					radioGroup2: "",
					radioGroup3: "",
				}}
				onSubmit={onSubmit}
				render={() => (
					<>
						<Form>
							<div>
								<h2>Questao 1</h2>
								<Field
									name="radioGroup1"
									options={options}
									component={FormikRadioGroup}
								/>
							</div>

							<div>
								<h2>Questao 2</h2>
								<Field
									name="radioGroup2"
									options={options}
									component={FormikRadioGroup}
								/>
							</div>

							<div>
								<h2>Questao 3</h2>
								<Field
									name="radioGroup3"
									options={options}
									component={FormikRadioGroup}
								/>
							</div>
							<div className="activation-buttons">
								<Button
									color="primary"
									variant="contained"
									fullWidth
									type="submit"
								>
									Submit
								</Button>
							</div>
						</Form>
					</>
				)}
			/>
		</div>
	);
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));
