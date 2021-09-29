import styled from "styled-components";
import BUttonbg from "../../assets/images/bg-image.png";

export const FormParent = styled.div`
  position: fixed;
  top: ${({ popUpToggle }) => (popUpToggle == true ? 0 : "-100vh")};
  left: 0;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  .bgblur {
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    position: relative;
  }
`;

export const Form = styled.form`
  width: 400px;
  border: 3px solid #fff;
  padding: 20px;
  background-color: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  transition-duration: 0.3s;
  z-index: 1500;
  position: absolute;
  &:hover {
    background-color: rgb(255, 255, 255, 0.62);
  }
  input,
  textarea {
    padding: 10px;
    display: block;
    width: 100%;
    margin: 14px auto;
    border: 2px solid #fff;
    background-color: rgb(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    transition-duration: 0.2s;
    &:focus {
      background-color: #fff;
    }
  }
  button {
    width: 60%;
    height: 40px;
    font-size: 17px;
    background-color: rgb(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    transition-duration: 0.3s;
    margin: 20px auto;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 8px;
    font-weight: 900;
    &:hover {
      background-image: url(${BUttonbg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      color: white;
    }
  }
`;

export const Togglestate = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  svg {
    width: 38px;
    height: 38px;
  }
`;

export const Tablestyle = styled.table`
  width: 90%;
  margin: auto;
  border-collapse: collapse;
  background-color: rgb(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);
  word-wrap: break-word;
  color: white;
  line-height: 23px;
  margin-top: 50px;
  tr {
    padding: 0 10px;
    th,
    td {
      border-bottom: 2px solid #fff;
      text-align: center;
      padding: 14px 5px;
    }

    th {
      text-transform: capitalize;
      background-color: #009eef;
      padding: 15px 0;
      border: none;
      svg {
        width: 20px;
        height: 20px;
        margin: auto;
        fill: #fff;
      }
    }

    td {
      &:nth-child(1) {
        min-width: 40px;
      }
      &:nth-child(2) {
        min-width: 200px;
      }

      &:nth-child(3) {
        min-width: 120px;
      }
      &:last-child {
        width: 180px;
      }
    }
    .edit {
      height: 100%;
      display: flex;
      justify-content: space-between;
      .editbox {
        display: flex;
        align-items: center;
        transition-duration: 0.4s;
        background: linear-gradient(
          35deg,
          rgba(221, 214, 242, 1) 0%,
          rgba(235, 193, 206, 1) 38%,
          rgba(250, 172, 168, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
        margin-right: 12px;
        cursor: pointer;
        /* width: 30px; */
        svg {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        span {
          margin-left: auto;
        }
      }
    }
  }
`;

export const Fixed = styled.a`
  position: ${({ sticked }) => (sticked ? "fixed" : "relative")};
  display: flex;
  justify-content: center;
  align-items: center;
  top: auto;
  bottom: 30px;
  right: 40px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-image: url(${BUttonbg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  border: 2px solid #fff;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const AddProduct = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #bbb;
  background-color: rgb(0, 0, 0, 0.6);
  background-color: ${({ popUpToggle }) =>
    popUpToggle == true ? "rgb(255,255,255,0.7)" : "rgb(0,0,0,0.7)"};
  backdrop-filter: blur(5px);
  border-radius: 5px;
  cursor: pointer;
  svg {
    width: 45px;
    height: 45px;
  }
`;

export const DeleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: ${({ deleteValue }) => (deleteValue == true ? "0" : "-100vh")};
  left: 0;
  z-index: 2000;
  transition-duration: 0.4s;
  .bgblur {
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    position: relative;
  }
`;

export const DeleteConfirm = styled.div`
  width: 400px;
  height: fit-content;
  padding: 20px;
  border: 2px solid #fff;
  background-color: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  line-height: 30px;
  h1 {
    font-size: 25px;
    font-weight: bold;
  }
  button {
    width: 140px;
    height: 45px;
    border: 2px solid #fff;
    background: rgb(221, 214, 242);
    background: linear-gradient(
      35deg,
      rgba(221, 214, 242, 1) 0%,
      rgba(235, 193, 206, 1) 38%,
      rgba(250, 172, 168, 1) 100%
    );
    color: #555;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 17px;
    margin: 14px auto;
  }
`;
