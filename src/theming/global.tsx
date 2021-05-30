import { normalize } from 'polished'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	${normalize()}
	${reset}

	body {
		font-family: sans-serif;
		font-weight: 400;
		line-height: 1.38;
		max-width: 100%;
		overflow-x: hidden;
		overflow-y: scroll;

		&.-hidden {
			overflow: hidden;
		}
	}

	b, strong {
    font-weight: bolder;
	}

	.animated {
		animation-duration: 0ms;
		animation-fill-mode: backwards;
		animation-iteration-count: infinite;
		animation-name: ticker;
		animation-play-state: running;
		animation-timing-function: linear;
		will-change: transform;
	}

	.animated--paused {
		animation-play-state: paused;
	}

	@keyframes ticker {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(calc(-250px * 7))
		}
	}

	.tippy-tooltip {
		padding: 0
	}

	* {
		box-sizing: border-box;
	}
`