import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
}

body {
	font-family: ${({ theme }) => theme.font.primary};
	font-size:  ${({ theme }) => theme.font.size};
	font-weight: ${({ theme }) => theme.font.normal};
	color: ${({ theme }) => theme.color.black};

	margin: 0;
	padding: 0;
}

h1, h2, h3, h4, h5, h6 {
	font-family: ${({ theme }) => theme.font.secondary}
}
p {
	line-height: 1.6;
}

ul {
	list-style: none;
}
a {
	color: currentColor;
	text-decoration: none;
}

.appContainer {
	max-width: 1920px;
	margin: auto;
}

.prof_header {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.prof_header > h1 {
	color: aquamarine;;
}

.prof_header > ul {
	line-height: 4rem;
}

.colorSub {
	color: #dd3232;
}


`;
