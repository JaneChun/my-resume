import React from 'react';
import styled from 'styled-components';

function MainSection() {
	return (
		<StyledMain>
			<MainTitle>Work Experiences</MainTitle>
			<TitleWrapper>
				<Title>(주) 그렉터</Title>
				<SubTitle>기업부설연구소</SubTitle>
			</TitleWrapper>

			<Row>
				<Label>Period</Label>
				<Value>2023.09.01 - 2024.10.31</Value>
			</Row>
			<Row>
				<Label>Position</Label>
				<Value>연구원</Value>
			</Row>
			<Row>
				<Label>Projects</Label>
				<Value>노후위험시설 안전관리 시스템</Value>
			</Row>

			<DescriptionTitle>주요 업무</DescriptionTitle>
			<DescriptionText>기존 기능 고도화 및 유지보수, 신규 기능 개발</DescriptionText>

			<DescriptionTitle>주요 기여</DescriptionTitle>
			<DescriptionList>
				<DescriptionItem>프론트엔드 개발 및 유지보수:</DescriptionItem>
				<NestedList>
					<NestedItem>데이터 조회를 위한 검색 필터 및 그리드 사용에 능숙</NestedItem>
					<NestedItem>Apache ECharts를 활용한 데이터 시각화 경험</NestedItem>
					<NestedItem>FullCalendar를 활용한 캘린더 기반 일정 관리 및 유지보수 프로세스 구현</NestedItem>
					<NestedItem>MapTiler를 활용한 지도 기능 구현 경험</NestedItem>
				</NestedList>

				<DescriptionItem>서비스 배포 및 운영:</DescriptionItem>
				<NestedList>
					<NestedItem>System daemon을 활용한 백그라운드 서비스 배포 및 운영 관리</NestedItem>
				</NestedList>

				<DescriptionItem>업무 자동화 도입:</DescriptionItem>
				<NestedList>
					<NestedItem>Playwright를 통한 스크린샷 자동화로 보고서 작성 프로세스를 자동화</NestedItem>
					<NestedItem>Node.js로 보고서에 필요한 데이터를 Excel 파일로 자동 다운로드하는 프로그램 개발하여 운영 지원</NestedItem>
					<NestedItem>Cron과 Slackbot으로 일일 이벤트 모니터링 및 자동 보고서 전송을 통해 운영 효율성 증대</NestedItem>
				</NestedList>
			</DescriptionList>

			<DescriptionTitle>기술 스택</DescriptionTitle>
			<DescriptionText>
				<DescriptionList>
					<DescriptionItem>Frontend: </DescriptionItem>
					<NestedList>
						<NestedItem>
							Vue.js, Sass, Bootstrap, EasyUI, Apache ECharts, FullCalendar, MapLibre GL JS, Mapbox GL Draw, Carbone, exceljs, pdfmake
						</NestedItem>
					</NestedList>
					<DescriptionItem>Etc:</DescriptionItem>
					<NestedList>
						<NestedItem>Linux, Node.js, Git, Slack, Playwright</NestedItem>
					</NestedList>
				</DescriptionList>
			</DescriptionText>

			<MainTitle>Education</MainTitle>
			<TitleWrapper>
				<Title>한양대학교(ERICA)</Title>
				<SubTitle>영미언어문화학과</SubTitle>
			</TitleWrapper>

			<Row>
				<Label>Period</Label>
				<Value>2017.03 ~ 2022.08</Value>
			</Row>
			<Row className='last'>
				<Label>GPA</Label>
				<Value>3.8 / 4.5</Value>
			</Row>

			<TitleWrapper>
				<Title>코드스테이츠(Code States)</Title>
				<SubTitle>프론트엔드 부트캠프 41기</SubTitle>
			</TitleWrapper>

			<Row>
				<Label>Period</Label>
				<Value>2022.08 ~ 2023.02</Value>
			</Row>
			<Row className='last'>
				<Label>GPA</Label>
				<Value>3.8 / 4.5</Value>
			</Row>

			<MainTitle>Certicates</MainTitle>
			<DescriptionList>
				<DescriptionItem>
					<ItemLabel>AWS Certified SAA</ItemLabel>
					<ItemValue>2024.12.__</ItemValue>
				</DescriptionItem>
				<DescriptionItem>
					<ItemLabel>정보처리기사</ItemLabel>
					<ItemValue>2024.06.18</ItemValue>
				</DescriptionItem>
				<DescriptionItem>
					<ItemLabel>OPIC IH(Intermediate High)</ItemLabel>
					<ItemValue>2022.03.30</ItemValue>
				</DescriptionItem>
				<DescriptionItem>
					<ItemLabel>TOEIC 965</ItemLabel>
					<ItemValue>2020.10.25</ItemValue>
				</DescriptionItem>
			</DescriptionList>
		</StyledMain>
	);
}

const StyledMain = styled.main``;

const MainTitle = styled.h2`
	font-size: 2.5rem;
	margin-bottom: 0;
	margin-top: 50px;
	font-weight: 800;
`;

const TitleWrapper = styled.div`
	margin: 30px 0 20px 0;
	display: flex;
	align-items: end;
`;

const Title = styled.h3`
	margin: 0;
	margin-right: 0.8rem;
	font-size: 2rem;
	font-weight: 700;
`;

const SubTitle = styled.p`
	margin: 0;
	margin-bottom: 0.3rem;
	font-size: 1.4rem;
	color: #4a5568;
`;

const Row = styled.div`
	font-size: 1.5rem;
	border-bottom: 1px solid lightgray;
	padding: 1rem 0;
	display: flex;

	&.last {
		margin-bottom: 40px;
	}
`;

const Label = styled.span`
	width: 30%;
	font-weight: 600;
`;

const Value = styled.span`
	color: #4a5568;
`;

const DescriptionTitle = styled.div`
	font-size: 1.8rem;
	font-weight: 600;
	margin: 20px 0;
`;

const DescriptionText = styled.p`
	font-size: 1.4rem;
	color: #4a5568;
`;

const DescriptionList = styled.ul`
	padding-left: 20px;
`;

const DescriptionItem = styled.li`
	font-size: 1.5rem;
	color: #4a5568;
	margin-top: 20px;
`;

const NestedList = styled.ul`
	margin-top: 5px;
	padding-left: 20px;
	list-style-type: circle;
`;

const NestedItem = styled.li`
	font-size: 1.4rem;
	color: #718096;
	margin-bottom: 10px;
`;

const ItemLabel = styled.span`
	display: inline-block;
	width: 84%;
`;
const ItemValue = styled.span``;

const GitHubLink = styled.a`
	color: #3182ce;
	text-decoration: none;
	border-bottom: 2px solid #3182ce;
	transition: 0.3s ease;

	&:hover {
		color: #2b6cb0;
		border-bottom-color: #2b6cb0;
	}
`;

export default MainSection;
