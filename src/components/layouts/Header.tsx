import { useEffect } from "preact/hooks";
export default function Header() {
	useEffect(() => {
		setTabTitle();

		function handleClickOutside() {
			const audio = new Audio(
				"https://mp3gaga.com/wp-content/uploads/2021/04/03-USA-FOR-AFRICA-WE-ARE-THE-WORLD.mp3"
			);
			audio.play();
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	function setTabTitle() {
		var text =
				"There comes a time when we heed a certain callWhen the world must come together as oneThere are people dyingOh, when it's time to lend a hand to lifeThe greatest gift of allWe can't go on pretending day by dayThat someone, somewhere will soon make a changeWe are all a part of God's great big familyAnd the truth, you knowLove is all we needWe are the world, we are the childrenWe are the ones who make a brighter daySo let's start givingThere's a choice we're makingWe're saving our own livesIt's true, we'll make a better dayJust you and meWell, send them your heart so they'll know that someone caresAnd their lives will be stronger and freeAs God has shown us by turning stone to breadAnd so we all must lend a helping handWe are the world, we are the childrenWe are the ones who make a brighter daySo let's start givingOh, there's a choice we're makingWe're saving our own livesIt's true, we'll make a better dayJust you and meWhen you're down and out, and there seems no hope at allBut if you just believe, there's no way we can fallWell, well, wellLet us realize, oh, that a change can only comeWhen we stand together as oneWe are the world, we are the childrenWe are the ones who make a brighter daySo let's start givingThere's a choice we're makingWe're saving our own livesIt's true, we'll make a better dayJust you and me",
			cur = 0;
		setInterval(function () {
			document.title = text.substr(cur, 80);
			cur = (cur + 1) % text.length;
		}, 120);
	}
	function playSound() {
		console.log("aaa");

		//   const audio = new Audio(url);
		//   audio.play();
	}
	return (
		<nav className="flex justify-center">
			<ul className="flex items-center justify-space">
				<li>
					<a href="/">
						<div
							className="flex flex-col justify-center items-center"
							onClick={playSound}
						>
							<img src="/gifs/globeanime.gif" />
						</div>
					</a>
				</li>
				{/* <li>
					<a href="/about/">
						<div className="flex flex-col justify-center items-center">
							<img src="/gifs/about.gif" />
						</div>
					</a>
				</li> */}
				<li>
					<a href="/members/">
						<div className="flex flex-col justify-center items-center">
							<img src="/gifs/members.gif" />
						</div>
					</a>
				</li>

				<li>
					<a href="/tour/">
						<div className="flex flex-col justify-center items-center">
							<img src="/gifs/tour.gif" />
						</div>
					</a>
				</li>
			</ul>
		</nav>
	);
}
