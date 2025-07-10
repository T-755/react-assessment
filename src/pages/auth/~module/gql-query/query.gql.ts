import { gql } from '@/lib/api-client';

export const Registration_User_Mutation = gql`
	mutation SignUp($input: CreateUserInput!) {
		signUp(input: $input) {
			_id
			accessToken
		}
	}
`;

export const Magic_Login_User_Mutation = gql`
	mutation SignIn($input: CreateUserInput!) {
		signIn(input: $input) {
			_id
			accessToken
		}
	}
`;
export const Verify_Magic_Login_Mutation = gql`
	mutation VerifyMagicLink($payload: VerifyMagicLinkInput!) {
		verifyMagicLink(payload: $payload) {
			isSuccess
			message
			data
		}
	}
`;

export const Login_User_Details_Query = gql`
	query User($input: CommonMatchInput!) {
		user(input: $input) {
			_id
			name
			email
			phone
			avatar
			role
		}
	}
`;

export const Login_User_Details_In_Employee_List_Query = gql`
	query Employee($input: CommonMatchInput!) {
		Employee(input: $input) {
			_id
		}
	}
`;

/**
 * organizations query
 * */

export const Organizations_List_Query = gql`
	query MyOrganizations($id: String!) {
		myOrganizations(_id: $id) {
			nodes {
				_id
				name
				tagline
				orgUID
				businessEmail
				businessPhone
				address
				cover {
					bucket
					region
					key
					externalUrl
				}
				Logo {
					bucket
					region
					key
					externalUrl
				}
				employees {
					_id
					employeeDetails {
						_id
						name
						email
						phone
						avatar
						role
					}
					organizations {
						organization {
							_id
							name
							tagline
							orgUID
							businessEmail
							businessPhone
							address
							createdAt
							updatedAt
						}
						role
						salary
					}
				}
				owner {
					_id
				}
				createdAt
				updatedAt
			}
			meta {
				totalCount
				currentPage
				hasNextPage
				totalPages
			}
		}
	}
`;
