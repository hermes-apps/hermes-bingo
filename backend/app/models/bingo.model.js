module.exports = mongoose => {
	const Bingo = mongoose.model(
		"bingo",
		mongoose.Schema(
			{
				title: String,
				tiles: Array,
				code: String
			},
			{ timestamps: true }
		)
	);

	return Bingo;
};
