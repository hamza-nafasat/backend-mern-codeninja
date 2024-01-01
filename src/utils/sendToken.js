const sendToken = (res, user, message = "", statusCode = 200) => {
	const token = user.getJwtToken();

	const options = {
		maxAge: 15 * 24 * 60 * 60 * 1000,
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "none",
	};
	res.status(statusCode).cookie("random", "random", options).cookie("token", token, options);
	res.json({
		success: true,
		message,
		user,
	});
};

export default sendToken;
