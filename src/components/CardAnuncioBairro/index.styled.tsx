import styled from 'styled-components';
import { globalColors } from '../../styles/global.style';

export const BodyStyled = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  /* height: 150px; */
  border: 1px solid #A7A7A7;
  background-color: #FFFFFF;
  border-radius: 5px;
`;

export const ImageAndDescriptionStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionStyled = styled.div`
  margin: 7px 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ValorAntigoStyled = styled.span`
  font-size: 13px;
  color: ${globalColors.red};
`;

export const ValorNovoStyled = styled.span`
  font-size: 16px;
  color: ${globalColors.silverLight};
`;
