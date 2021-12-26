import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > img {
    height: 28px;
    margin: 32px 0;
  }

  .messageList {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    flex: 1;
    margin-top: -100px;

    .message {
      max-width: 440px;

      p {
        font-size: 20px;
        line-height: 28px;
      }

      .messageUser {
        margin-top: 16px;
        display: flex;
        align-items: center;

        .userImage {
          padding: 2px;
          background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);
          border-radius: 50%;
          line-height: 0;

          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;

            border: 4px solid #121214;
          }
        }

        span {
          font-size: 16px;
          margin-left: 12px;
        }
      }

    }
  }
`;