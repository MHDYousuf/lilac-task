import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Description, ContactPhone, Poll, Payment } from "@material-ui/icons";

const useColorlibStepIconStyles = makeStyles({
	root: {
		backgroundColor: "#eee",
		zIndex: 1,
		color: "#777",
		width: 50,
		height: 50,
		display: "flex",
		borderRadius: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	active: {
		background: "#b3d9f2",
		color: "#2980b9",
	},
	completed: {
		background: "#b9edcf",
		color: "#2ecc71",
	},
});

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles();
	const { active, completed } = props;

	const icons = {
		1: <Description />,
		2: <ContactPhone />,
		3: <Poll />,
		4: <Payment />,
	};

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}
		>
			{icons[String(props.icon)]}
		</div>
	);
}

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		"& $line": {
			backgroundImage:
				"linear-gradient( 95deg,#2ecc71 0%,#2ecc71 50%,#2ecc71 100%)",
		},
	},
	completed: {
		"& $line": {
			backgroundImage:
				"linear-gradient( 95deg,#2ecc71 0%,#2ecc71 50%,#2ecc71 100%)",
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: "#eaeaf0",
		borderRadius: 1,
	},
})(StepConnector);

function StepperComponent() {
	const [activeStep, setActiveStep] = React.useState(1);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	function getSteps() {
		return [
			"Basic Information",
			"Additional Information",
			"Eligibility & Syllabus",
			"Fee & Scholarship",
		];
	}

	return (
		<div style={{ width: "80%", margin: "auto" }}>
			<Stepper
				alternativeLabel
				activeStep={activeStep}
				connector={<ColorlibConnector />}
			>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</div>
	);
}

export default StepperComponent;
