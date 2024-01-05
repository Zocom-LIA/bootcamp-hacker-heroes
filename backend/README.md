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

SendOrder: currently in design, but preminiralily it will be a structure with a primary key of User#UUID with a sortkey of either order#timestamp or profile. This is so in the future if there is a login feature all the orders will be stored under the users uuid collection.
