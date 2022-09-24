interface Props {
	name: string;
	season: string;
}
export const MemberCard = (props: Props) => {
	const randomInt = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const strPad = (str: number) => {
		return "000".slice(str.toString().length) + str;
	};

	const randomImageUrl = () => {
		const baseUrl = "https://ozgrozer.github.io/100k-faces/";
		const firstFolder = "0";
		const secondFolder = randomInt(0, 9);
		const randomFile = strPad(randomInt(0, 999));
		const filename = `00${secondFolder}${randomFile}`;
		const fullUrl = `${baseUrl}${firstFolder}/${secondFolder}/${filename}.jpg`;
		const result = {
			url: fullUrl,
		};
		return result.url;
	};

	return (
		<div>
			<img src={randomImageUrl()} />
			<p>{props.name}</p>
			<span>{props.season}</span>
		</div>
	);
};
export default MemberCard;
