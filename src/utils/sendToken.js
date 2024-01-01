const sendToken = (res, user, message = "", statusCode = 200) => {
	const token = user.getJwtToken();

	const options = {
		maxAge: 15 * 24 * 60 * 60 * 1000,
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "none",
	};
	res.cookie("website", "codeninja mernstack site");
	res.status(statusCode).cookie("token", token, options).json({
		success: true,
		message,
		user,
	});
};

export default sendToken;
