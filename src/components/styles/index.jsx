import styled from "styled-components";
import {Circle, Cross} from "@styled-icons/entypo";
import PropTypes from "prop-types";

// common
export const MainWrapper = styled.div`
	position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const Button = styled.button`
	border: none;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    padding: 20px;
    transition: all 0.2s;
	
	&:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
	
	&:active {
		background-color: lightgrey;
		transform: scale(1);
	}
	
	&:focus {
		outline: none;
	}
`;

export const StyledBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${({height}) => height};
`;
StyledBlock.propTypes = {
	height: PropTypes.string
};
StyledBlock.defaultProps = {
	height: "auto"
};

// Cell
export const ButtonCell = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	width: 100px;
	margin: 10px;
	padding: 0;
	
	:disabled {
		color: initial;
	}
`;

export const CrossStyled = styled(Cross)`
	height: 100px;
`;

export const CircleStyled = styled(Circle)`
	height: 60px;
`

// Field
export const WrapperField = styled.div`
	display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: max-content;
`;

// GamesList
export const WrapperGamesList = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	margin: 0 auto;
`;

// GamesListItem
export const WrapperGamesListItem = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-bottom: 30px;
`;
