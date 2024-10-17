import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<StyledFooter>
			<p>
				저와 연락하려면 <a href='mailto:your.email@example.com'>이메일</a>을 보내주세요.
			</p>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	margin-top: 100px;
	font-size: 0.9rem;
	color: #a0aec0;

	a {
		color: #718096;
		text-decoration: none;

		&:hover {
			color: #4a5568;
		}
	}
`;

export default Footer;
