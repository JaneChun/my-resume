import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {
	return (
		<PageWrapper>
			<Header />
			<MainSection />
			<Footer />
		</PageWrapper>
	);
}

const PageWrapper = styled.div`
	font-family: 'Arial', sans-serif;
	color: #333;
	line-height: 1.6;
	padding: 40px 20px;
	margin: 0 auto;
	max-width: 50rem;
	padding: 1rem 2rem 3rem 2rem;
`;

export default App;
