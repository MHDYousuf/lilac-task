import React from "react";
import Link from "next/link";
import { Card, Grid, Container } from "@material-ui/core";

function Main() {
	return (
		<Container>
			<Grid container spacing={3} style={{ padding: 10 }}>
				<Link href="/task1">
					<Grid item xs={12} lg={6}>
						<Card
							className="card"
							style={{
								minHeight: 300,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								background: "#c7d7f0",
							}}
						>
							TASK 1
						</Card>
					</Grid>
				</Link>
				<Link href="/task2">
					<Grid item xs={12} lg={6}>
						<Card
							className="card"
							style={{
								minHeight: 300,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								background: "#c7d7f0",
							}}
						>
							TASK 2
						</Card>
					</Grid>
				</Link>
			</Grid>
		</Container>
	);
}

export default Main;
