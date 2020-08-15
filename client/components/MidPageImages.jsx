/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const MidTable = styled.table`
  border-spacing: 0 5vw;
  width: 100%
`;

const RowTable = styled.table`
  height: 100%
`;

const BiggerDiv = styled.div`
  overflow: hidden;
  max-height: 300px;
  width: 40vw;
  max-width: 400px;
`;

const SmallerDiv = styled.div`
  height: 100%;
  width: 35vw;
  max-width: 350px;
  `;

const TextContainer = styled.div`
  font-family: 'Meticula';
  font-size: 15px;
  padding: 20% 15% 20% 15%;
`;

const SubtextOne = styled.div`
  font-family: 'Meticula-SemiBold';
  font-size: 15px;
  margin-bottom: 10px;
`;

const SubtextTwo = styled.div`
  font-family: 'Meticula-Bold';
  font-size: 20px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  img{
    display:block;
    height: 200%;
    width: 200%;
    margin: -50% -50%;
    transition: transform .5s ease;
  }
  img:hover{
    transform: scale(1.05);
  }
`;

function MidPageImages({ urls, descriptions }) {
  const rows = urls.map((url, index) => {
    if (index % 2 === 0) {
      return (
        <tr key={url}>
          <td>
            <RowTable>
              <tbody>
                <tr>
                  <td>
                    <SmallerDiv>
                      <TextContainer>
                        <SubtextOne>
                          {descriptions[index].subtext_one}
                        </SubtextOne>
                        <SubtextTwo>
                          {descriptions[index].subtext_two}
                        </SubtextTwo>
                        {descriptions[index].features}
                      </TextContainer>
                    </SmallerDiv>
                  </td>
                  <td>
                    <BiggerDiv>
                      <ImageContainer>
                        <img alt="sneakerpic" src={url} width="400px" height="350px" />
                      </ImageContainer>
                    </BiggerDiv>
                  </td>
                </tr>
              </tbody>
            </RowTable>
          </td>
        </tr>
      );
    }
    return (
      <tr key={url}>
        <td>
          <RowTable>
            <tbody>
              <tr>
                <td>
                  <BiggerDiv>
                    <ImageContainer>
                      <img alt="sneakerpic" src={url} width="400px" height="350px" />
                    </ImageContainer>
                  </BiggerDiv>
                </td>
                <td>
                  <SmallerDiv>
                    <TextContainer>
                      <SubtextOne>
                        {descriptions[index].subtext_one}
                      </SubtextOne>
                      <SubtextTwo>
                        {descriptions[index].subtext_two}
                      </SubtextTwo>
                      {descriptions[index].features}
                    </TextContainer>
                  </SmallerDiv>
                </td>
              </tr>
            </tbody>
          </RowTable>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <MidTable>
        <tbody>
          {rows}
        </tbody>
      </MidTable>
    </div>
  );
}

export default MidPageImages;
