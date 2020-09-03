import styled from 'styled-components';

export const HamStyl = styled.div`
  .hamburger-container {
    display: none;
  }

  @media screen and (max-width: 487px) {
    .hamburger-container {
      position: relative; 
      display: initial;
    }
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  .bm-menu {
    position: absolute; 
    width: 240px; 
    background: white;
    margin-top: 9px;
    padding: 1em 1em 0 2em;
    font-size: 1.15em;
    z-index: 10000; 
  }

  /* Wrapper for item list */
  .bm-item-list {
    margin-top: 0;
    color: #3c3b3b;
    padding: 0;
    font-family: 'Raleway', Helvetica, sans-serif;
  }

  .open-menu {
    position: fixed;
    right: 0;
    border: none;
  }

  .close-menu {
    position: fixed;
    right: 0;
    border-left: 0;
  }

  .menu-hover {
    margin-right: 1em;
  }

  .hamburger-ul {
    display: block;

    li a h3 {
      border: 0;
      border-top: dotted 1px rgba(160, 160, 160, 0.3);
      margin: 1.5em 0 0 0;
      padding: 1.5em 0 0 0;
    }

    li a:hover {
      color: dodgerblue;
    }

    li {
      display: block !important;
    }

    h3 {
      font-size: 0.7em;
    }

    .index-li {
      border-top: none;
    }
  }
`;
