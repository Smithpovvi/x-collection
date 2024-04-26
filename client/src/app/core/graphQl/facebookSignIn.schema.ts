import { gql } from 'apollo-angular';

export default gql`
    mutation facebookSignIn($facebookSignInArgs: FacebookSignInInput!) {
        facebookSignIn(facebookSignInArgs: $facebookSignInArgs) {
            token
        }
    }
`;
