![alt text](https://github.com/nhkcm/casino-test/diagrama.png)

api tasks:
```http://localhost:3000/api```

api users:
```http://localhost:3001/api```

levantar el cluster de kafka
```docker-compose -f kafka-2-cluster.yml up -d```

levantar tasks:
```
cd /task
npm run start
```

levantar users:
```
cd /users
npm run start
```

postmant collection:
```
{
	"info": {
		"_postman_id": "5b9d6ab0-45ed-4060-97b7-2150b7f3410d",
		"name": "test casino",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "787783"
	},
	"item": [
		{
			"name": "get users",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3001/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "create users",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"username\": \"jose\",\r\n    \"password\": \"1234\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/users/create-user",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"users",
						"create-user"
					]
				}
			},
			"response": []
		},
		{
			"name": "authenticate",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"username\": \"test-user\",\r\n    \"password\": \"secret123\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/users/authenticate",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"users",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "authenticate New User",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"username\": \"jose\",\r\n    \"password\": \"1234\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/users/authenticate",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"users",
						"authenticate"
					]
				}
			},
			"response": []
		},
		{
			"name": "get task",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjA1NTcwLCJleHAiOjE3MDQyMDg1NzB9.jbGPynv9kwzG_pXr04em_1HleK3OhA_MwnCQP8WT-oA",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"name": "authorization",
						"sortOrder": 0,
						"infoTitle": "This header was automatically added",
						"info": "This header is added because of the authorization method used for this request.\n\nThe value of this header is tentative. You can find the exact value in the console once the request is sent.\n\nUse the authorization tab to remove authorization or to change the value of this header.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to authorization",
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjAzMjQyLCJleHAiOjE3MDQyMDM1NDJ9.oh5z5xi3Mo7KzBWcm4kUd0Rfe3Ny5XHavrp_6_4hIcQ",
						"system": true,
						"auth": true,
						"type": "text"
					},
					{
						"name": "cache-control",
						"sortOrder": 2,
						"infoTitle": "We recommend using this header",
						"info": "Postman added \"Cache-Control: no-cache\" as a precautionary measure to prevent the server from returning stale response when one makes repeated requests.\n\nYou can remove this header in the app settings or enter a new one with a different value.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to settings",
						"key": "Cache-Control",
						"value": "no-cache",
						"system": true,
						"type": "text"
					},
					{
						"name": "postman-token",
						"sortOrder": 3,
						"infoTitle": "We recommend using this header",
						"info": "The Postman-Token header appends a random UUID to every outgoing request. Postman adds this header for API developers to better debug requests sent and to ensure separate requests appear distinct to the receiving server.\n\nYou can remove this header in the app settings.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to settings",
						"key": "Postman-Token",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "content-type",
						"sortOrder": 4,
						"infoTitle": "This header was automatically added",
						"info": "The Content-Type header is added to help the server identify the media type of the request body that is present in this request.\n\nUse the request body tab to control the value or to remove this header.",
						"allowedToToggle": true,
						"disableEdit": true,
						"previewSettingsLink": "Go to body",
						"key": "Content-Type",
						"value": "application/json",
						"system": true,
						"type": "text"
					},
					{
						"name": "content-length",
						"sortOrder": 5,
						"infoTitle": "This header was automatically added",
						"info": "The Content-Length header was added to indicate to the server the size of the request body that is added to this request. Server uses this value to parse the request body accurately.\n\nYou can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"previewSettingsLink": "Go to body",
						"key": "Content-Length",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "host",
						"sortOrder": 6,
						"infoTitle": "We recommend using this header",
						"info": "The Host header is added to identify the domain name for which a request is being sent to the server. This header is implicitly sent by every HTTP client.\n\nYou can remove the header or enter a new one with a different value. It is most likely that without this header, your request will return an HTTP 400 error.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Host",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "user-agent",
						"sortOrder": 7,
						"infoTitle": "We recommend using this header",
						"info": "The User-Agent header is added to help the server identify Postman as the HTTP requesting application or client.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "User-Agent",
						"value": "PostmanRuntime/7.32.1",
						"system": true,
						"type": "text"
					},
					{
						"name": "accept",
						"sortOrder": 8,
						"infoTitle": "We recommend using this header",
						"info": "The \"Accept: */*\" header is added to tell the server that Postman can understand and process all forms of response content types.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Accept",
						"value": "*/*",
						"system": true,
						"type": "text"
					},
					{
						"name": "accept-encoding",
						"sortOrder": 9,
						"infoTitle": "We recommend using this header",
						"info": "The Accept-Encoding header is added to indicate to the server that Postman HTTP client supports a defined list of content-encoding or compression algorithms as response.\n\nYou can remove the header or enter a new one with a different value. Doing that may not accurately render the response within the app.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Accept-Encoding",
						"value": "gzip, deflate, br",
						"system": true,
						"type": "text"
					},
					{
						"name": "connection",
						"sortOrder": 10,
						"infoTitle": "We recommend using this header",
						"info": "Postman added the Connection header to indicate the server to keep the underlying network connection open once the current response is received. This allows Postman to reuse the same connection for faster response times in subsequent requests to the same server.\n\nYou can remove this header or enter a new one with a different value, such as `Connection: Close` to control this behaviour.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Connection",
						"value": "keep-alive",
						"system": true,
						"type": "text"
					},
					{
						"key": "authorization",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjAzMjQyLCJleHAiOjE3MDQyMDM1NDJ9.oh5z5xi3Mo7KzBWcm4kUd0Rfe3Ny5XHavrp_6_4hIcQ",
						"type": "text",
						"id": 0,
						"disabled": true
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"username\": \"test-user\",\r\n    \"password\": \"secret123\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/task/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"task",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "create task",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjA1NTcwLCJleHAiOjE3MDQyMDg1NzB9.jbGPynv9kwzG_pXr04em_1HleK3OhA_MwnCQP8WT-oA",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"name": "authorization",
						"sortOrder": 0,
						"infoTitle": "This header was automatically added",
						"info": "This header is added because of the authorization method used for this request.\n\nThe value of this header is tentative. You can find the exact value in the console once the request is sent.\n\nUse the authorization tab to remove authorization or to change the value of this header.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to authorization",
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjAzMjQyLCJleHAiOjE3MDQyMDM1NDJ9.oh5z5xi3Mo7KzBWcm4kUd0Rfe3Ny5XHavrp_6_4hIcQ",
						"system": true,
						"auth": true,
						"type": "text"
					},
					{
						"name": "cache-control",
						"sortOrder": 2,
						"infoTitle": "We recommend using this header",
						"info": "Postman added \"Cache-Control: no-cache\" as a precautionary measure to prevent the server from returning stale response when one makes repeated requests.\n\nYou can remove this header in the app settings or enter a new one with a different value.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to settings",
						"key": "Cache-Control",
						"value": "no-cache",
						"system": true,
						"type": "text"
					},
					{
						"name": "postman-token",
						"sortOrder": 3,
						"infoTitle": "We recommend using this header",
						"info": "The Postman-Token header appends a random UUID to every outgoing request. Postman adds this header for API developers to better debug requests sent and to ensure separate requests appear distinct to the receiving server.\n\nYou can remove this header in the app settings.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to settings",
						"key": "Postman-Token",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "content-type",
						"sortOrder": 4,
						"infoTitle": "This header was automatically added",
						"info": "The Content-Type header is added to help the server identify the media type of the request body that is present in this request.\n\nUse the request body tab to control the value or to remove this header.",
						"allowedToToggle": true,
						"disableEdit": true,
						"previewSettingsLink": "Go to body",
						"key": "Content-Type",
						"value": "application/json",
						"system": true,
						"type": "text"
					},
					{
						"name": "content-length",
						"sortOrder": 5,
						"infoTitle": "This header was automatically added",
						"info": "The Content-Length header was added to indicate to the server the size of the request body that is added to this request. Server uses this value to parse the request body accurately.\n\nYou can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"previewSettingsLink": "Go to body",
						"key": "Content-Length",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "host",
						"sortOrder": 6,
						"infoTitle": "We recommend using this header",
						"info": "The Host header is added to identify the domain name for which a request is being sent to the server. This header is implicitly sent by every HTTP client.\n\nYou can remove the header or enter a new one with a different value. It is most likely that without this header, your request will return an HTTP 400 error.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Host",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "user-agent",
						"sortOrder": 7,
						"infoTitle": "We recommend using this header",
						"info": "The User-Agent header is added to help the server identify Postman as the HTTP requesting application or client.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "User-Agent",
						"value": "PostmanRuntime/7.32.1",
						"system": true,
						"type": "text"
					},
					{
						"name": "accept",
						"sortOrder": 8,
						"infoTitle": "We recommend using this header",
						"info": "The \"Accept: */*\" header is added to tell the server that Postman can understand and process all forms of response content types.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Accept",
						"value": "*/*",
						"system": true,
						"type": "text"
					},
					{
						"name": "accept-encoding",
						"sortOrder": 9,
						"infoTitle": "We recommend using this header",
						"info": "The Accept-Encoding header is added to indicate to the server that Postman HTTP client supports a defined list of content-encoding or compression algorithms as response.\n\nYou can remove the header or enter a new one with a different value. Doing that may not accurately render the response within the app.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Accept-Encoding",
						"value": "gzip, deflate, br",
						"system": true,
						"type": "text"
					},
					{
						"name": "connection",
						"sortOrder": 10,
						"infoTitle": "We recommend using this header",
						"info": "Postman added the Connection header to indicate the server to keep the underlying network connection open once the current response is received. This allows Postman to reuse the same connection for faster response times in subsequent requests to the same server.\n\nYou can remove this header or enter a new one with a different value, such as `Connection: Close` to control this behaviour.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Connection",
						"value": "keep-alive",
						"system": true,
						"type": "text"
					},
					{
						"key": "authorization",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjAzMjQyLCJleHAiOjE3MDQyMDM1NDJ9.oh5z5xi3Mo7KzBWcm4kUd0Rfe3Ny5XHavrp_6_4hIcQ",
						"type": "text",
						"id": 0,
						"disabled": true
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"test-create-task\",\r\n    \"start_date\": \"2012-04-23T18:25:43.511Z\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/task/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"task",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "update task",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjA1NTcwLCJleHAiOjE3MDQyMDg1NzB9.jbGPynv9kwzG_pXr04em_1HleK3OhA_MwnCQP8WT-oA",
							"type": "string"
						}
					]
				},
				"method": "PUT",
				"header": [
					{
						"name": "authorization",
						"sortOrder": 0,
						"infoTitle": "This header was automatically added",
						"info": "This header is added because of the authorization method used for this request.\n\nThe value of this header is tentative. You can find the exact value in the console once the request is sent.\n\nUse the authorization tab to remove authorization or to change the value of this header.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to authorization",
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjAzMjQyLCJleHAiOjE3MDQyMDM1NDJ9.oh5z5xi3Mo7KzBWcm4kUd0Rfe3Ny5XHavrp_6_4hIcQ",
						"system": true,
						"auth": true,
						"type": "text"
					},
					{
						"name": "cache-control",
						"sortOrder": 2,
						"infoTitle": "We recommend using this header",
						"info": "Postman added \"Cache-Control: no-cache\" as a precautionary measure to prevent the server from returning stale response when one makes repeated requests.\n\nYou can remove this header in the app settings or enter a new one with a different value.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to settings",
						"key": "Cache-Control",
						"value": "no-cache",
						"system": true,
						"type": "text"
					},
					{
						"name": "postman-token",
						"sortOrder": 3,
						"infoTitle": "We recommend using this header",
						"info": "The Postman-Token header appends a random UUID to every outgoing request. Postman adds this header for API developers to better debug requests sent and to ensure separate requests appear distinct to the receiving server.\n\nYou can remove this header in the app settings.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to settings",
						"key": "Postman-Token",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "content-type",
						"sortOrder": 4,
						"infoTitle": "This header was automatically added",
						"info": "The Content-Type header is added to help the server identify the media type of the request body that is present in this request.\n\nUse the request body tab to control the value or to remove this header.",
						"allowedToToggle": true,
						"disableEdit": true,
						"previewSettingsLink": "Go to body",
						"key": "Content-Type",
						"value": "application/json",
						"system": true,
						"type": "text"
					},
					{
						"name": "content-length",
						"sortOrder": 5,
						"infoTitle": "This header was automatically added",
						"info": "The Content-Length header was added to indicate to the server the size of the request body that is added to this request. Server uses this value to parse the request body accurately.\n\nYou can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"previewSettingsLink": "Go to body",
						"key": "Content-Length",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "host",
						"sortOrder": 6,
						"infoTitle": "We recommend using this header",
						"info": "The Host header is added to identify the domain name for which a request is being sent to the server. This header is implicitly sent by every HTTP client.\n\nYou can remove the header or enter a new one with a different value. It is most likely that without this header, your request will return an HTTP 400 error.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Host",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "user-agent",
						"sortOrder": 7,
						"infoTitle": "We recommend using this header",
						"info": "The User-Agent header is added to help the server identify Postman as the HTTP requesting application or client.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "User-Agent",
						"value": "PostmanRuntime/7.32.1",
						"system": true,
						"type": "text"
					},
					{
						"name": "accept",
						"sortOrder": 8,
						"infoTitle": "We recommend using this header",
						"info": "The \"Accept: */*\" header is added to tell the server that Postman can understand and process all forms of response content types.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Accept",
						"value": "*/*",
						"system": true,
						"type": "text"
					},
					{
						"name": "accept-encoding",
						"sortOrder": 9,
						"infoTitle": "We recommend using this header",
						"info": "The Accept-Encoding header is added to indicate to the server that Postman HTTP client supports a defined list of content-encoding or compression algorithms as response.\n\nYou can remove the header or enter a new one with a different value. Doing that may not accurately render the response within the app.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Accept-Encoding",
						"value": "gzip, deflate, br",
						"system": true,
						"type": "text"
					},
					{
						"name": "connection",
						"sortOrder": 10,
						"infoTitle": "We recommend using this header",
						"info": "Postman added the Connection header to indicate the server to keep the underlying network connection open once the current response is received. This allows Postman to reuse the same connection for faster response times in subsequent requests to the same server.\n\nYou can remove this header or enter a new one with a different value, such as `Connection: Close` to control this behaviour.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Connection",
						"value": "keep-alive",
						"system": true,
						"type": "text"
					},
					{
						"key": "authorization",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjAzMjQyLCJleHAiOjE3MDQyMDM1NDJ9.oh5z5xi3Mo7KzBWcm4kUd0Rfe3Ny5XHavrp_6_4hIcQ",
						"type": "text",
						"id": 0,
						"disabled": true
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"username\": \"test-user\",\r\n    \"password\": \"secret123\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/task/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"task",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "delete task",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjA1NTcwLCJleHAiOjE3MDQyMDg1NzB9.jbGPynv9kwzG_pXr04em_1HleK3OhA_MwnCQP8WT-oA",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"name": "authorization",
						"sortOrder": 0,
						"infoTitle": "This header was automatically added",
						"info": "This header is added because of the authorization method used for this request.\n\nThe value of this header is tentative. You can find the exact value in the console once the request is sent.\n\nUse the authorization tab to remove authorization or to change the value of this header.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to authorization",
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjAzMjQyLCJleHAiOjE3MDQyMDM1NDJ9.oh5z5xi3Mo7KzBWcm4kUd0Rfe3Ny5XHavrp_6_4hIcQ",
						"system": true,
						"auth": true,
						"type": "text"
					},
					{
						"name": "cache-control",
						"sortOrder": 2,
						"infoTitle": "We recommend using this header",
						"info": "Postman added \"Cache-Control: no-cache\" as a precautionary measure to prevent the server from returning stale response when one makes repeated requests.\n\nYou can remove this header in the app settings or enter a new one with a different value.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to settings",
						"key": "Cache-Control",
						"value": "no-cache",
						"system": true,
						"type": "text"
					},
					{
						"name": "postman-token",
						"sortOrder": 3,
						"infoTitle": "We recommend using this header",
						"info": "The Postman-Token header appends a random UUID to every outgoing request. Postman adds this header for API developers to better debug requests sent and to ensure separate requests appear distinct to the receiving server.\n\nYou can remove this header in the app settings.",
						"allowedToToggle": false,
						"disableEdit": true,
						"previewSettingsLink": "Go to settings",
						"key": "Postman-Token",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "content-type",
						"sortOrder": 4,
						"infoTitle": "This header was automatically added",
						"info": "The Content-Type header is added to help the server identify the media type of the request body that is present in this request.\n\nUse the request body tab to control the value or to remove this header.",
						"allowedToToggle": true,
						"disableEdit": true,
						"previewSettingsLink": "Go to body",
						"key": "Content-Type",
						"value": "application/json",
						"system": true,
						"type": "text"
					},
					{
						"name": "content-length",
						"sortOrder": 5,
						"infoTitle": "This header was automatically added",
						"info": "The Content-Length header was added to indicate to the server the size of the request body that is added to this request. Server uses this value to parse the request body accurately.\n\nYou can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"previewSettingsLink": "Go to body",
						"key": "Content-Length",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "host",
						"sortOrder": 6,
						"infoTitle": "We recommend using this header",
						"info": "The Host header is added to identify the domain name for which a request is being sent to the server. This header is implicitly sent by every HTTP client.\n\nYou can remove the header or enter a new one with a different value. It is most likely that without this header, your request will return an HTTP 400 error.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Host",
						"value": "<calculated when request is sent>",
						"system": true,
						"type": "text"
					},
					{
						"name": "user-agent",
						"sortOrder": 7,
						"infoTitle": "We recommend using this header",
						"info": "The User-Agent header is added to help the server identify Postman as the HTTP requesting application or client.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "User-Agent",
						"value": "PostmanRuntime/7.32.1",
						"system": true,
						"type": "text"
					},
					{
						"name": "accept",
						"sortOrder": 8,
						"infoTitle": "We recommend using this header",
						"info": "The \"Accept: */*\" header is added to tell the server that Postman can understand and process all forms of response content types.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Accept",
						"value": "*/*",
						"system": true,
						"type": "text"
					},
					{
						"name": "accept-encoding",
						"sortOrder": 9,
						"infoTitle": "We recommend using this header",
						"info": "The Accept-Encoding header is added to indicate to the server that Postman HTTP client supports a defined list of content-encoding or compression algorithms as response.\n\nYou can remove the header or enter a new one with a different value. Doing that may not accurately render the response within the app.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Accept-Encoding",
						"value": "gzip, deflate, br",
						"system": true,
						"type": "text"
					},
					{
						"name": "connection",
						"sortOrder": 10,
						"infoTitle": "We recommend using this header",
						"info": "Postman added the Connection header to indicate the server to keep the underlying network connection open once the current response is received. This allows Postman to reuse the same connection for faster response times in subsequent requests to the same server.\n\nYou can remove this header or enter a new one with a different value, such as `Connection: Close` to control this behaviour.",
						"allowedToToggle": true,
						"disableEdit": true,
						"key": "Connection",
						"value": "keep-alive",
						"system": true,
						"type": "text"
					},
					{
						"key": "authorization",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiaWF0IjoxNzA0MjAzMjQyLCJleHAiOjE3MDQyMDM1NDJ9.oh5z5xi3Mo7KzBWcm4kUd0Rfe3Ny5XHavrp_6_4hIcQ",
						"type": "text",
						"id": 0,
						"disabled": true
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"username\": \"test-user\",\r\n    \"password\": \"secret123\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/task/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"task",
						""
					]
				}
			},
			"response": []
		}
	]
}
```