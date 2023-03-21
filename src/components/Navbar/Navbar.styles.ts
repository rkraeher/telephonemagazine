import styled from 'styled-components';
import { Navbar, NavItem } from 'react-materialize';

export const Home = styled.a`
  // only need margin for large view, not mobile
  margin-left: 10px;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
`;

export const Link = styled(NavItem)`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin-left: 15px;

  &:hover {
    color: #c3c3c3;
    /* only want the text color to change, not the whole button */
  }
`;

export const Container = styled(Navbar)`
    /* background-color: #3D4849; */
    background: linear-gradient(to right, #434343 0%, black 100%);
`;

