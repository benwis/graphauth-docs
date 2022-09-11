---
id: getting-started
slug: /getting-started
title: Getting Started
sidebar_position: 2
---

1. Create an account, and configure your tenant settings. The "tenant" is your unique collection of users. Nobody can see users in other people's tenants or access anything outside their tenant.
2. Create a tenant admin, so that they can administer your auth instance. By default, you are an admin, and you can have more than one. They have the ability to create, view, and delete all user info.
3. At this point, you should be able to login to your account and get access and refresh tokens. If you don't have a GraphQL client, it can be tested in the free app [Insomnia](https://insomnia.rest/). Return and securely store your access and refresh tokens(NOT in localstorage).
4. Pass the access and refresh tokens as headers for any requests that require authentication. Only the access token is required, but if you include the refresh token and the access token expires, it will return new ones.
```json title="Headers"
{
    Authorization: Bearer <your-access-token>,
    graphauth_refresh: <your-refresh-token>
}
```
5. Test this by trying the below query! Don't forget to include your tokens in the header!
```graphql
query{
	hello{
        claims{
            iss
        }
            userId
    }
}
```
You should get a result similiar to this:
```json
	"data": {
		"hello": {
			"claims": {
				"iss": "Graphauth"
			},
			"userId": "46b832a1-f39a-4bc8-833e-cb478deb2e58"
		}
	}

```
Congratulations! You know have an auth system! You can setup a page for users to register and login with Graphauth. You'll want to store the user ID in your app, so that you can identify users in your app.



