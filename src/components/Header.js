import React from 'react';
import styled from 'styled-components';

function Header() {
	return (
		<>
			<StyledHeader>
				<HeaderTitle>천지은</HeaderTitle>
				<HeaderSubtitle>안녕하세요, ...</HeaderSubtitle>
			</StyledHeader>

			<SubHeader>
				<Row>
					<Label>Github</Label>
					<Value>
						<Link href='https://github.com/JaneChun'>https://github.com/JaneChun</Link>
					</Value>
				</Row>
				<Row>
					<Label>Blog</Label>
					<ValueColumn>
						<Link href='https://velog.io/@wlwl99'>https://velog.io/@wlwl99</Link>
						<Link href='https://janechun.tistory.com/'>https://janechun.tistory.com</Link>
					</ValueColumn>
				</Row>
				<Row>
					<Label>Email</Label>
					<Value>janechun22@gmail.com</Value>
				</Row>
				<Row>
					<Label>Mobile</Label>
					<Value>010-2833-7073</Value>
				</Row>
			</SubHeader>
		</>
	);
}

const StyledHeader = styled.header`
	margin-bottom: 50px;
`;

const HeaderTitle = styled.h1`
	font-size: 4rem;
	font-weight: 800;
	margin-bottom: 20px;
	color: #1a202c;
`;

const HeaderSubtitle = styled.p`
	font-size: 1.5rem;
	color: #718096;
`;

const SubHeader = styled.div`
	margin-bottom: 50px;
`;

const Row = styled.div`
	font-size: 1.5rem;
	border-bottom: 1px solid lightgray;
	padding: 1rem 0;
	display: flex;
`;

const Label = styled.span`
	width: 30%;
	font-weight: 600;
`;

const Value = styled.span`
	color: #4a5568;
`;

const ValueColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const Link = styled.a`
	color: #0687f0;
	text-decoration: none;
	transition: 0.3s ease;

	&:hover {
		color: #0366d6;
	}
`;

export default Header;
