import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<PageWrapper>
				<Header />
				<MainSection />
				<Footer />
			</PageWrapper>
		</>
	);
}

const PageWrapper = styled.div`
	font-family: 'Arial', sans-serif;
	color: #333;
	line-height: 1.6;
	margin: 0 auto;
	max-width: 50rem;
	padding: 1rem 2rem 3rem 2rem;
`;

export default App;
