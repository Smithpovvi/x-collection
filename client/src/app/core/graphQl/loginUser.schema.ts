import { gql } from 'apollo-angular';

export default gql`mutation loginUser($loginUserArgs: LoginUserInput!) {
  loginUser(loginUserArgs: $loginUserArgs) {
    token
  }
}`;
