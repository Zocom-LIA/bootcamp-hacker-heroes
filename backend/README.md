<!-- Backend documentation for Hacker Heroes. -->

DB single table design, one of the main resourses used while learning: https://www.alexdebrie.com/posts/dynamodb-single-table/

As you use the serverless deploy command (sls deploy depending on OS) you'll get your api paths generated, below is a short guide on how to use each.

<!-- Features -->

GetMenu:

Currently there is support for two ways to use the GetMenu, these are the following.

1. Have your path end with api/menu/ which will return every item in the database under the meny primary key. It is very important that menu has the / after. 

2. Have your path end with api/menu/wontons or api/menu/dip , this will return either all wontons or all dips depending on which path end is used.

We will be using one of these two methods to render the menu, the approach we don't end up using will be removed.

PostMenu:

A post call to api/menu. The json structure is the following.


{
  "PK": "Meny",
	"SK": "wontons#Karlstad",
	"name": "Karlstad",
	"desc": "En god friterad wonton med smaker från de värmländska skogarna.",
	"ingredients": [
				"kantarell",
				"scharlottenlök",
				"morot",
				"bladpersilja"
			],
	"price": 9
}

Items are added one by one, so the first setup will be a bit menial, but in the future if the kitchen want to add more recipes they'll be adding them one by one from their own feature. In SK replace wontons for dip if adding a dip, for example dips#bearnaise

SendOrder: 
The concept is that each order is made by an user whom have their own userId, and then stored under the users collection with order#timestamp, guests have random uuid.

missing features right now are combining price in the backend, will have the userId generated in the backend since no login feature and timestamp made in backwnd as well.

json example

{
	"orderItems": [{
		"name": "testing",
		"desc": "wow description",
		"ingredients": [
				"kantarell",
				"scharlottenlök",
				"morot",
				"bladpersilja"
		],
		"price": 10
	}],
	"customerName": "Hello"
}

UpdateOrder: 

Simple function that changes status from active to finished when sent. The idea is that when you press the button in the kitchen view it changes status.
To expand on this we can have a sort that only checks the datestamp of the current day to get relevant orders.

{
	"userId": "82929-929292-929292",
	"orderId": "2024-08-08:1245"
}

GetKitchenOrder:

Under construction but the concept is that it will get all the orders that have been placed, by using date as SK we can filter so that only the orders of the current day is displayed.

GetOrderKvitto:

Eta can maybe be handled here, where based on the amount of active orders a minute is added per order.