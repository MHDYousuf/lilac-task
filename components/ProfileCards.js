import React from "react";
import {
	Container,
	Grid,
	Paper,
	Badge,
	Avatar,
	IconButton,
	Button,
	Typography,
} from "@material-ui/core";
import {
	AttachFile,
	Call,
	Check,
	Edit,
	Mail,
	School,
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import avatarIMG from "../assets/avatar.png";
import noAvatarIMG from "../assets/no-avatar.png";

const SmallAvatar = withStyles((theme) => ({
	root: {
		width: 22,
		height: 22,
		border: `2px solid ${theme.palette.background.paper}`,
	},
}))(IconButton);

function ProfileCards({ data }) {
	const renderStatus = (currentState) => {
		switch (currentState) {
			case 0:
				return "Add your Rest Documents";
				break;
			case 1:
				return "Applied";
				break;
			case 2:
				return "Verified";
				break;
			default:
				return;
		}
	};

	return (
		<Grid item xs={12} lg={4}>
			<Paper key={data.id} elevation={3} style={{ padding: "15px 10px" }}>
				<Grid
					container
					justify="space-between"
					alignItems="center"
					style={{
						padding: "15px 10px",
						borderBottom: "1px solid #efefef",
						marginBottom: 15,
					}}
				>
					<Grid item style={{ display: "flex" }}>
						<Badge
							overlap="circle"
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							badgeContent={
								!data.isPicAdded ? (
									<></>
								) : (
									<IconButton
										style={{
											width: 15,
											height: 15,
											background: "#efefef",
										}}
									>
										<Check style={{ fontSize: 14, color: "#2ecc71" }} />
									</IconButton>
								)
							}
						>
							<Avatar
								alt="profile"
								src={data.isPicAdded ? avatarIMG : noAvatarIMG}
							/>
						</Badge>
						<Grid style={{ marginLeft: 15 }}>
							<h4
								style={{
									color: "#888",
									fontWeight: 600,
									marginBottom: 5,
								}}
							>
								Charlotte Rosalie
							</h4>
							<p
								style={{
									color: "#909191",
									fontSize: 12,
									fontWeight: 600,
								}}
							>
								EDU-IND-5566778
							</p>
						</Grid>
					</Grid>
					<IconButton
						style={
							data.newUser
								? {
										background: "#a2ebad",
										width: 50,
										height: 30,
										borderRadius: 15,
								  }
								: { background: "#cdd9f7", width: 35, height: 35 }
						}
					>
						{data.newUser ? (
							<Typography
								variant="subtitle2"
								style={{
									color: "#48a156",
									fontSize: 12,
									fontWeight: 600,
								}}
							>
								New
							</Typography>
						) : (
							<Edit style={{ color: "#3857a6", fontSize: 16 }} />
						)}
					</IconButton>
				</Grid>
				{[
					{
						icon: <Call style={{ color: "#777" }} />,
						text: "+91 9531253420",
					},
					{
						icon: <Mail style={{ color: "#777" }} />,
						text: "dummyemail@email.com",
					},
					{
						icon: <School style={{ color: "#777" }} />,
						text: "MSc Business with International Management",
					},
				].map((item) => (
					<Grid key={item.text} container style={{ padding: 10 }}>
						{item.icon}
						<p
							style={{
								marginLeft: 15,
								maxWidth: "75%",
								fontWeight: 500,
								fontSize: 14,
								color: "#555",
							}}
						>
							{item.text}
						</p>
					</Grid>
				))}
				<Grid
					container
					justify="space-between"
					style={{ marginTop: 15, padding: 10 }}
				>
					<Button
						style={{
							textTransform: "capitalize",
							fontSize: 13,
							background: "#cdd9f7",
							borderRadius: 20,
							padding: "5px 15px",
							fontWeight: 600,
							color: "#567ee3",
							letterSpacing: 0,
						}}
					>
						{renderStatus(data.status)}
					</Button>
					<IconButton
						style={{
							border: "1px solid #dedede",
							width: 30,
							height: 30,
						}}
					>
						<AttachFile style={{ fontSize: 16 }} />
					</IconButton>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default ProfileCards;
