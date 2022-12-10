import styled from "styled-components";

export const ContainerList = styled.div`
  width: 49.5rem;
  height: 11rem;
  background: #27272A;
  border: 1px solid #9d4b00;
  border-radius: 0.5rem;
  display: flex;
  margin: auto;
  

  ul {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    margin: 0.5rem 3rem;
    align-items: flex-start;
    flex-wrap: wrap;

    li {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.87);
      margin: 0.5rem 3rem;
    }
  }`