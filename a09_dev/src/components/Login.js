const Login = () => (
	<div id="login">
		<div className="login-card">
			<div className="card-title">
				<h1>COMP 426 Login</h1>
			</div>

			<div className="content">
				<form id="login-form">
					<input id="email" type="email" name="email" title="email" placeholder="Email" required autoFocus />
					<input
						id="password"
						type="password"
						name="password"
						title="password"
						placeholder="Password"
						required
					/>

					<div className="field">
						<div className="control">
							<button type="submit" className="btn btn-primary">
								Login
							</button>
						</div>
					</div>

					<div className="field">
						<div className="control">
							<p id="message" />
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
);

export default Login;
