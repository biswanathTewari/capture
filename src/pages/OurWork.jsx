import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//framer motion
import { motion } from "framer-motion";
import {
	pageAnimation,
	fade,
	photoAnim,
	lineAnim,
	slider,
	sliderHolder,
} from "../animation";

//custom hook for scroll animation
import useScroll from "../components/useScroll";

const OurWork = () => {
	const [element, controls] = useScroll();
	const [element2, controls2] = useScroll();
	const [element3, controls3] = useScroll();

	return (
		<Work
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<motion.div variants={sliderHolder}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>

			<Movie
				ref={element3}
				variants={fade}
				initial="hidden"
				animate={controls3}
			>
				<Link to="/work/the-athlete">
					<motion.h2 variants={fade}>The Athlete</motion.h2>
				</Link>

				<motion.div variants={lineAnim} className="line"></motion.div>

				<Hide>
					<motion.img variants={photoAnim} src={athlete} alt="athlete" />
				</Hide>
			</Movie>

			<Movie
				ref={element2}
				variants={fade}
				initial="hidden"
				animate={controls2}
			>
				<Link to="/work/the-racer">
					<motion.h2 variants={fade}>The Racer</motion.h2>
				</Link>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<Hide>
					<motion.img variants={photoAnim} src={theracer} alt="theracer" />
				</Hide>
			</Movie>

			<Movie
				ref={element}
				variants={fade}
				initial="hidden"
				animate={controls}
			>
				<Link to="/work/good-times">
					<motion.h2 variants={fade}>Good Times</motion.h2>
				</Link>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<Hide>
					<motion.img
						variants={photoAnim}
						src={goodtimes}
						alt="goodtimes"
					/>
				</Hide>
			</Movie>
		</Work>
	);
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	h2 {
		padding: 1rem 0rem;
	}
`;
const Movie = styled(motion.div)`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}

	a {
		text-decoration: none;
		position: relative;
		color: white;
	}

	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
		left: 0;
	}
`;

const Hide = styled(motion.div)`
	overflow: hidden;
`;

//frame animation

const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #fffebf;
	z-index: 2;
`;
const Frame2 = styled(Frame1)`
	background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
	background: #8effa0;
`;

export default OurWork;
