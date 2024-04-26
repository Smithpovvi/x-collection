import { gql } from 'apollo-angular';

export default gql`
    mutation googleSignIn($googleSignInArgs: GoogleSignInInput!) {
        googleSignIn(googleSignInArgs: $googleSignInArgs) {
            token
        }
    }
`;
