module.exports = mongoose => {
	const Bingo = mongoose.model(
		"bingo",
		mongoose.Schema(
			{
				title: String,
				tiles: Array
			},
			{ timestamps: true }
		)
	);

	return Bingo;
};
