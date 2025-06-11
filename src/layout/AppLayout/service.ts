import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      telegramId
      telegramUsername
      referrerId
      avatar
      email
    }
  }
`;

export const LOGIN_WITH_EMAIL_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    loginWithEmail(email: $email, password: $password)
  }
`;
