import styled from 'styled-components';

// old color: #030b16;
const BannerWrapper = styled.section`
  position: relative;
  background-color: #000205;
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export default BannerWrapper;
