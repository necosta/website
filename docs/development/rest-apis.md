---
sidebar_position: 4
---

# REST APIs

## Key Principles

- Client-Server Architecture - The client (frontend) and server (backend) are separate, allowing for scalability and independent evolution
- Statelessness - Each request from the client to the server must contain all the information needed to process it
- Uniform Interface
  - Resources are identified using URLs
  - Actions use HTTP methods (GET, POST, PUT, PATCH, DELETE)
  - Representation is returned in a structured format (JSON, XML, etc.)

## Standard response codes

| Code                      | Meaning	                  | Description                                         | 
|---------------------------|---------------------------|-----------------------------------------------------|
| 200 OK 	                  | Success                   | The request was successful                          |
| 201 Created	              | Resource Created	         | A new resource was successfully created             |
| 204 No Content	           | Success (No Data)	        | The request was successful, but no data is returned |
| 400 Bad Request           | 	Client Error	            | The request is malformed or invalid                 |
| 401 Unauthorized          | 	Authentication Required	 | The client must authenticate                        |
| 403 Forbidden	            | No Permission	            | The client is authenticated but lacks permission    |
| 404 Not Found             | 	Resource Missing	        | The requested resource does not exist               |
| 500 Internal Server Error | 	Server Issue	            | A general error on the server side                  |

## Authentication Methods

- API Key (sent in headers)
- OAuth 2.0 (token-based authentication)
- JWT (JSON Web Token) (stateless and secure authentication)

## Other

- Rate limiting
- RBAC (role-based access control)
- API versioning
- Load balancing
- Caching
- Webhooks
- Encryption (HTTPS)
- Pagination, Filtering, and Sorting
