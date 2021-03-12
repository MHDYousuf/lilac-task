import { Avatar, Container, Grid, Typography } from "@material-ui/core";
import React from "react";

function Task2() {
	return (
		<Container style={{ padding: "2rem", background: "#f0f3f7" }}>
			{[1, 2, 3, 4, 5, 6].map((item) => (
				<Grid
					key={item}
					container
					style={
						item > 2
							? { padding: 20, background: "#fff", alignItems: "center" }
							: { padding: 20, background: "#c7d7f0", alignItems: "center" }
					}
				>
					<Avatar
						alt="Remy Sharp"
						src="https://picsum.photos/200"
						style={{ margin: "0px 15px", width: 50, height: 50 }}
					/>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
						nesciunt!
						<Typography variant="subtitle2" style={{ margin: "5px 0px" }}>
							1 hr ago
						</Typography>
					</span>
				</Grid>
			))}
		</Container>
	);
}

export default Task2;
