import styled from '@emotion/styled';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #fffaf5;
    text-align: center;
    
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
`;

const UploadButton = styled.label`
    background-color: #ffe4e1;
    color: #333;
    padding: 12px 20px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
        background-color: #ffdad3;
    }
`;

export default function Home() {
    return (
        <HomeWrapper>
            <Title>오늘 하루 사진으로 </Title>
            <UploadButton htmlFor='file'>올리기</UploadButton>
            <input id="file" type="file" style={{ display: 'none' }} />
        </HomeWrapper>
    )
}