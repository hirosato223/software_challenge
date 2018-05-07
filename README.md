# software_challenge

1.  Clone project repository
2.  Navigate to root directory
3.  Launch terminal
4.  Install dependencies => npm install
5.  Launch postgresql => sudo psql -U [USERNAME] postgres
6.  Create database => CREATE DATABASE primarydb;
7.  Exit postgresql => ctrl + D
8.  Initialize database and tables => npm run db:setup
9.  Start server => npm run start
10. Start webpack => npm run build
11. Open web browser at localhost:1337

Discussion:

-Overall approach-  
Data is loaded into two relational tables using PostgreSQL. The users table contains users' names and codes, while the friends table stores the friend relationships between users. The client makes calls to the API to query the databases and render the appropriate list of existing users/friends.

-Challenges-  
The main challenge I encountered was storing data from multiple data/relationship types when reading the sample data. Given the timeframe of the project, I opted to specifically focus on storing user and friend relationship data in the database. This repository's sample data has been simplified to only resemble user/friend data.

-Optimizations/enhancements-  
Additional data types:  
An immediate next step would involve modifying the data to store additional data beyond users/friends. This would involve modifying the conditions and queries when accessing each of the databases. The structure of the databases would also need to be expanded to include property and relationship types (ex: friend, user, model, etc).

Additional data files:  
To enhance scalability, I would also implement a CLI method to load additional data files into the databases. Currently, the database initialization script only loads the two included files (sampleFriends.txt and sampleUsers.txt) into the database. A separate CLI would allow the user to specify the type and path of a new file to load.

Testing:  
I would utilize the Jest testing framework for validating the API's functionality. With a built in assertion and mocking library, Jest requires less setup/customization; this would allow for increased test development/coverage. In particular, I would use Jest to implement unit tests to validate that the controller functions return the expected users/friends when invoked. Jest would also be beneficial for front end testing; as additional functionality is added, Jest's snapshot testing can be leveraged to detect unforeseen UI changes.

-Overall impressions-  
I overall enjoyed designing building the project from the ground up, and feel satisfied with the current progress. In the future, I would like to explore additional ways to store/model the relationship data, particularly with graphs.
