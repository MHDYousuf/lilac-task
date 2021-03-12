import {
	Chip,
	Container,
	Grid,
	Button,
	IconButton,
	FormControl,
	Input,
} from "@material-ui/core";

import {
	Add,
	ArrowLeft,
	ArrowRight,
	Close,
	Delete,
	Save,
} from "@material-ui/icons";
import React from "react";
import ProfileCards from "../../components/ProfileCards";
import Stepper from "../../components/utils/Stepper";

function Main() {
	const [userData, setUserData] = React.useState([
		{
			id: 1,
			newUser: false,
			isPicAdded: true,
			status: 0,
		},
		{
			id: 2,
			newUser: true,
			isPicAdded: false,
			status: 1,
		},
		{
			id: 3,
			newUser: true,
			isPicAdded: false,
			status: 2,
		},
	]);

	return (
		<Container maxWidth="lg">
			<Grid
				container
				spacing={3}
				style={{ background: "#e9eff5", padding: "1rem", borderRadius: 10 }}
			>
				{userData.map((item) => (
					<ProfileCards data={item} />
				))}
			</Grid>
			<Grid container style={{ margin: "2rem 0" }}>
				<Grid
					container
					style={{
						justifyContent: "space-between",
						alignItems: "center",
						paddingBottom: "1rem",
						borderBottom: "1px solid #ebebeb",
					}}
				>
					<div style={{ display: "flex", alignItems: "center" }}>
						<h4 style={{ fontWeight: 500, fontSize: 20 }}>Course Creation</h4>
						<Chip
							label="Step 2 of 4"
							variant="default"
							size="small"
							style={{ fontSize: 12, marginLeft: 10, padding: "0 10px" }}
						/>
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<Button
							variant="contained"
							color="primary"
							size="small"
							startIcon={<Save />}
							style={{ textTransform: "capitalize", borderRadius: 0 }}
						>
							Save as Draft
						</Button>
						<IconButton
							style={{ background: "#ebebeb", padding: 5, marginLeft: 10 }}
							size="small"
						>
							<Close />
						</IconButton>
					</div>
				</Grid>
				<Grid container>
					<Stepper />
				</Grid>
				<Grid item xs={12} lg={12}>
					<h4 style={{ fontWeight: 500, fontSize: 20 }}>
						Additional Information
					</h4>
					<Grid
						container
						spacing={2}
						style={{
							paddingBottom: "1rem",
							borderBottom: "2px dashed #ebebeb",
						}}
					>
						<Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
							<FormControl fullWidth>
								<label htmlFor="admission" aria-required="true">
									Admission
								</label>
								<select
									native
									label="Select Admission"
									placeholder="Select Admission"
									inputProps={{
										name: "admission",
										id: "admission",
									}}
									style={{
										padding: 15,
										width: "100%",
										borderColor: "#bebebe",
										margin: "5px 0",
									}}
								>
									<option value={10}>Merit</option>
									<option value={20}>Management</option>
									<option value={30}>NRE</option>
								</select>
							</FormControl>
						</Grid>
						<Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
							<FormControl fullWidth>
								<label htmlFor="service" aria-required="true">
									Service
								</label>
								<select
									native
									label="Select Service"
									placeholder="Select Service"
									inputProps={{
										name: "service",
										id: "service",
									}}
									style={{
										padding: 15,
										width: "100%",
										borderColor: "#bebebe",
										margin: "5px 0",
									}}
								>
									<option value={10}>Service 1</option>
									<option value={20}>Service 2</option>
									<option value={30}>Service 3</option>
								</select>
							</FormControl>
						</Grid>
						<Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
							<FormControl fullWidth>
								<label htmlFor="course" aria-required="true">
									Course Affiliation
								</label>
								<Input
									style={{
										border: "1px solid #bebebe !important",
										borderBottom: 0,
										paddingLeft: 15,
									}}
									disableUnderline
									placeholder="Select Course Affiliation"
									endAdornment={
										<IconButton
											style={{ borderRadius: 0, background: "#c2e5fc" }}
										>
											<Add style={{ color: "#3498db" }} />{" "}
										</IconButton>
									}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
							<FormControl fullWidth>
								<label htmlFor="entrance" aria-required="true">
									Entrance Required
								</label>
								<Input
									style={{
										border: "1px solid #bebebe !important",
										borderBottom: 0,
										paddingLeft: 15,
									}}
									disableUnderline
									placeholder="Select Entrance"
									endAdornment={
										<IconButton
											style={{ borderRadius: 0, background: "#c2e5fc" }}
										>
											<Add style={{ color: "#3498db" }} />{" "}
										</IconButton>
									}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
							<FormControl fullWidth>
								<label htmlFor="documents" aria-required="true">
									Documents Required
								</label>
								<Input
									style={{
										border: "1px solid #bebebe !important",
										borderBottom: 0,
										paddingLeft: 15,
									}}
									disableUnderline
									placeholder="Select Documents"
									endAdornment={
										<IconButton
											style={{ borderRadius: 0, background: "#c2e5fc" }}
										>
											<Add style={{ color: "#3498db" }} />{" "}
										</IconButton>
									}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
							<FormControl fullWidth>
								<label htmlFor="specialization" aria-required="true">
									Specialization
								</label>
								<Input
									style={{
										border: "1px solid #bebebe !important",
										borderBottom: 0,
										paddingLeft: 15,
									}}
									disableUnderline
									placeholder="Select Specialization"
									endAdornment={
										<IconButton
											style={{ borderRadius: 0, background: "#c2e5fc" }}
										>
											<Add style={{ color: "#3498db" }} />{" "}
										</IconButton>
									}
								/>
							</FormControl>
						</Grid>
					</Grid>
					<h4 style={{ fontWeight: 500, fontSize: 20, marginTop: 20 }}>
						Intakes
					</h4>
					<Grid container style={{ borderBottom: "2px dashed #ebebeb" }}>
						<Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
							<FormControl fullWidth style={{ height: "100%" }}>
								<label
									htmlFor="intake"
									aria-required="true"
									style={{ marginBottom: 10 }}
								>
									Intake
								</label>
								<span
									style={{
										display: "flex",
										padding: "2rem 5px",
										background: "#e8eaed",
										border: "1px solid #bebebe",
										height: "100%",
										alignItems: "center",
									}}
								>
									<IconButton
										style={{
											borderRadius: 0,
											background: "#f7c4be",
											margin: 5,
											height: "50px",
										}}
									>
										<Delete style={{ color: "#e74c3c" }} />
									</IconButton>
									<select
										native
										label="Intake"
										placeholder="Select Intake"
										inputProps={{
											name: "service",
											id: "service",
										}}
										style={{
											padding: 15,
											width: "100%",
											borderColor: "#bebebe",
											margin: "5px 0",
											height: "50px",
										}}
									>
										<option value={10}>September</option>
										<option value={20}>October</option>
										<option value={30}>November</option>
									</select>
								</span>
							</FormControl>
						</Grid>
						<Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
							<FormControl fullWidth>
								<label
									htmlFor="duration"
									aria-required="true"
									style={{ marginBottom: 10 }}
								>
									Duration
								</label>
								<span
									style={{
										display: "block",
										padding: "2rem 5px",
										background: "#e8eaed",
										border: "1px solid #bebebe",
									}}
								>
									{[
										{
											id: 1,
											year: 1,
										},
										{
											id: 2,
											year: 2,
										},
									].map((item) => (
										<span key={item} style={{ display: "flex" }}>
											<Input
												style={{
													border: "1px solid #bebebe !important",
													borderBottom: 0,
													paddingLeft: 15,
													background: "#fff",
													margin: 5,
													width: "-webkit-fill-available",
												}}
												disableUnderline
												placeholder={item.year + " Year"}
											/>
											<IconButton
												style={{
													borderRadius: 0,
													background: "#c2e5fc",
													margin: 5,
												}}
											>
												<Add style={{ color: "#3498db" }} />{" "}
											</IconButton>
											<IconButton
												style={{
													borderRadius: 0,
													background: "#f7c4be",
													margin: 5,
												}}
											>
												<Delete style={{ color: "#e74c3c" }} />
											</IconButton>
										</span>
									))}
								</span>
							</FormControl>
						</Grid>
						<Button
							variant="contained"
							color="primary"
							size="small"
							disableElevation
							startIcon={<Add />}
							style={{
								textTransform: "capitalize",
								borderRadius: 0,
								background: "#d1ddf0",
								color: "#1a4487",
								margin: "20px 0",
								fontWeight: 600,
							}}
						>
							Add Row
						</Button>
					</Grid>
					<Grid
						item
						xs={12}
						lg={12}
						style={{ borderBottom: "2px dashed #ebebeb", paddingBottom: 20 }}
					>
						<Grid
							container
							style={{
								justifyContent: "space-between",
							}}
						>
							<h4 style={{ fontWeight: 500, fontSize: 20, marginTop: 20 }}>
								Course Tag
							</h4>
							<Button
								variant="contained"
								color="primary"
								size="small"
								disableElevation
								startIcon={<Add />}
								style={{
									textTransform: "capitalize",
									borderRadius: 0,
									background: "#d1ddf0",
									color: "#1a4487",
									margin: "20px 0",
									fontWeight: 600,
								}}
							>
								New Course Tag
							</Button>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
								<FormControl fullWidth>
									<label htmlFor="tag" aria-required="true">
										Tag
									</label>
									<select
										native
										label="Select Tag"
										placeholder="Select Tag"
										inputProps={{
											name: "tag",
											id: "tag",
										}}
										style={{
											padding: 15,
											width: "100%",
											borderColor: "#bebebe",
											margin: "5px 0",
										}}
									>
										<option value={10}>Tag 1</option>
										<option value={20}>Tag 2</option>
										<option value={30}>Tag 3</option>
									</select>
								</FormControl>
							</Grid>
							<Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
								<FormControl fullWidth>
									<label htmlFor="description" aria-required="true">
										Description
									</label>
									<span style={{ display: "flex" }}>
										<Input
											style={{
												border: "1px solid #bebebe !important",
												borderBottom: 0,
												paddingLeft: 15,
												margin: "5px 5px 5px 0",
												width: "100%",
											}}
											disableUnderline
											placeholder="Enter Description"
										/>
										<IconButton
											style={{
												borderRadius: 0,
												background: "#f7c4be",
												margin: 5,
											}}
										>
											<Delete style={{ color: "#e74c3c" }} />
										</IconButton>
									</span>
								</FormControl>
							</Grid>
							<Button
								variant="contained"
								color="primary"
								size="small"
								disableElevation
								startIcon={<Add />}
								style={{
									textTransform: "capitalize",
									borderRadius: 0,
									background: "#d1ddf0",
									color: "#1a4487",
									margin: "20px 0",
									fontWeight: 600,
									margin: 5,
								}}
							>
								Add Row
							</Button>
						</Grid>
					</Grid>
					<Grid container style={{ justifyContent: "flex-end", marginTop: 20 }}>
						<Button
							variant="contained"
							color="primary"
							size="small"
							disableElevation
							startIcon={<ArrowLeft />}
							style={{
								textTransform: "capitalize",
								borderRadius: 0,
								background: "#fff",
								border: "1px solid #d1ddf0",
								color: "#1a4487",
								margin: "20px 0",
								fontWeight: 600,
								margin: 5,
							}}
						>
							Prev
						</Button>
						<Button
							variant="contained"
							color="primary"
							size="small"
							disableElevation
							endIcon={<ArrowRight />}
							style={{
								textTransform: "capitalize",
								borderRadius: 0,
								margin: "20px 0",
								fontWeight: 600,
								margin: 5,
							}}
						>
							Next
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Main;
