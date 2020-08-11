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
  border: 1px solid red;
  max-height: 300px;
  width: 40vw;
  max-width: 400px;
`;

const SmallerDiv = styled.div`
  border: 1px solid blue;
  height: 100%;
  width: 35vw;
  max-width: 350px;
  `;

const TextContainer = styled.div`
  font-family: 'Meticula';
  padding: 20%;
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

function MidPageImages({ urls }) {
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
                        This is the sample text in a font
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
                      This is the sample text in a font
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
