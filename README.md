<h1 align="center">Game-Collection Library</h1>

<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/120px-Node.js_logo.svg.png" alt="nodejs" >
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/64px-Typescript.svg.png" alt="TypeScript" height="50" width="">
<img src="https://expressjs.com/images/express-facebook-share.png" alt="Express" height="50">
<img src="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667" alt="Firebase" height="60" >
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" height="60">
</div>
<hr>
This GitHub repository contains the source code for a Game-library application backend built with node.js & Typescript mainly.

### Prerequisites

Before getting started with the Weather App repository, ensure that you have the following prerequisites installed:

1.  Node.js: Make sure you have Node.js installed on your system. You can download it from the official Node.js website: [https://nodejs.org](https://nodejs.org)

## Installation Guide

1.  Clone the repository:

```console
  git clone https://github.com/Kushalmydesk/game_lib.git
```

2.  Navigate to the project directory:

```console
    cd root_folder
```

3.  Install the dependencies:

```console
    npm install
```

3.  Run on Local Server:

```console
    npm run dev
```

## Configurations

- ### [nodemon.json](/nodemon.json)

  **Nodemon** is a development tool that improves the development workflow by automatically restarting the Node.js application whenever changes are made to the watched files. It eliminates the need for manually stopping and restarting the application during development, providing a faster and more efficient development experience. The nodemon.json file configures Nodemon with the directories to watch, the file extensions to consider, and the command to execute when changes are detected.

  - `watch`: Specifies the directories or files that Nodemon should watch for changes. In this case, it is set to watch the `"src"` directory, indicating that any changes to files within that directory will trigger a restart of the application.

  - `ext`: Specifies the file extensions that Nodemon should consider when watching for changes. In this case, it is set to `".ts,.js"`, indicating that Nodemon will watch for changes in both TypeScript (`.ts`) and JavaScript (`.js`) files.

  - `exec`: Specifies the command that Nodemon should execute when a change is detected. In this case, it is set to `"ts-node ./src/index.ts"`, indicating that Nodemon should execute the TypeScript files (`index.ts`) using the `ts-node` command. This allows for automatic compilation and execution of TypeScript files without the need for manual compilation steps.
  <hr>

- ### [tsconfig.json](/tsconfig.json)

  - `module`: Specifies the module code generation for TypeScript. In this case, it is set to `"NodeNext"`.

  - `moduleResolution`: Specifies how module dependencies are resolved. In this case, it is set to `"node"`, indicating that Node.js-style module resolution will be used.

  - `baseUrl`: Specifies the base directory for module resolution. In this case, it is set to `"src"`, indicating that module resolution will start from the `"src"` directory.

  - `outDir`: Specifies the output directory for the compiled TypeScript files. In this case, it is set to `"dist"`, indicating that the compiled JavaScript files will be placed in the `"dist"` directory.

  - `sourceMap`: Specifies whether to generate source map files (.map) for the compiled JavaScript files. In this case, it is set to `true`, indicating that source map files will be generated.

  - `noImplicitAny`: Specifies whether to raise an error on expressions and declarations with an implied `any` type. In this case, it is set to `true`, indicating that TypeScript will report an error if it cannot infer the type and no type annotation is specified.

  - `include`: Specifies the files or patterns to include in the TypeScript compilation. In this case, it includes all `.ts` files in the `"src"` directory and its subdirectories.

  - `exclude`: Specifies the files or patterns to exclude from the TypeScript compilation. In this case, it excludes the `"node_modules"` directory.
  <hr>

- ### [package.json](/package.json)

  - `scripts`: This section defines various scripts that can be run using `npm run [script-name]` command:

    - `start`: This script runs the compiled JavaScript files in the `dist` directory using the `node` command.
    - `build`: This script runs the TypeScript compiler (`tsc`) to compile the TypeScript files into JavaScript files.
    - `dev`: This script uses `nodemon` to monitor changes in the source files and automatically restart the server during development.
    - `test`: This script is a placeholder and currently only echoes an error message.

  - `devDependencies`: This section lists the development dependencies, which are packages required during development but not during production runtime. These dependencies include various TypeScript type definitions (`@types/...` packages) for improved TypeScript development, such as type definitions for Express, MongoDB, Mongoose, Multer, etc.

  - `dependencies`: This section lists the runtime dependencies, which are packages required for the application to run in production. These dependencies include packages like `express`, `dotenv`, `cors`, `mongoose`, `multer`, `firebase`, etc., which are used for server-side development, database operations, file handling, and Firebase integration.

  <hr>

## Folder Structure

- src

  - [controllers](#controllers)
    - game.controller.ts
    - series.controller.ts
  - [models](#models)
    - game.model.ts
    - series.model.ts
  - [routes](#routes)
    - game.route.ts
    - series.route.ts
  - [services](#services)
    - firebase.service.ts
    - mongodb.service.ts
  - [index.ts](#indexts)

  <hr>

## Services

- ### [firebase.service.ts](/src/services/firebase.service.ts)

  - Dependencies: The code imports necessary dependencies from the Firebase SDK, including `initializeApp`, `getApp`, `getApps` from `"firebase/app"` and various storage-related functions from `"firebase/storage"`. It also imports the `dotenv` package for environment variable configuration.

  - Environment Configuration: The code uses `dotenv.config()` to load environment variables from a `.env` file.

  - Firebase App Initialization: The code defines a function `getFirebaseApp()` that returns the Firebase app instance. If no app exists, it initializes a new app using `initializeApp()` with the provided configuration from the environment variables. If an app already exists, it retrieves the app using `getApp()`.

  - Firebase Storage Initialization: The code initializes the Firebase storage instance using `getStorage()` with the Firebase app instance.

  - Export: The code exports the `getFirebaseApp()` function and the `upload_Img` function.

  - `upload_Img` Function: This function handles the upload of an image file to Firebase Storage. It takes the `file` and `name` as parameters, creates a storage reference using `ref()` with the provided file name and a timestamp, and prepares the metadata for the file. It then uploads the file to Firebase Storage using `uploadBytes()` with the storage reference, file buffer, and metadata. The function returns the download URL of the uploaded image using `getDownloadURL()`.
  <hr>

- ### [mongodb.service.ts](/src/services/mongodb.service.ts)

  - Dependencies: The code imports necessary dependencies from Mongoose, including `mongoose`, `ConnectOptions`, and `Error`. It also imports the `dotenv` package for environment variable configuration.

  - `connectToDB` Function: This function is responsible for connecting to the MongoDB database. It first loads environment variables from a `.env` file using `dotenv.config()`.

  - Database Connection: The function attempts to establish a connection to the MongoDB database using `mongoose.connect()`. It uses the `DB_CONN_STRING` environment variable for the connection string and the `DB_NAME` environment variable for the database name. It provides additional options for the connection, including `useNewUrlParser: true` to use the new URL parser and `useUnifiedTopology: true` to use the new server discovery and monitoring engine.

  - Connection Status: If the connection is successful, a success message is logged indicating the database name. If an error occurs during the connection process, an error message is logged.

  - Error Handling: The function wraps the database connection process in a `try-catch` block to catch and log any errors that occur.

  - Export: The code exports the `connectToDB` function to be used in other parts of the application.

  <hr>

## Models

[to Folder_Structure](#folder-structure)

- ### [game.model.ts](/src/models/game.model.ts)

  - Dependencies: The code imports necessary dependencies from the Mongoose library, including `Schema`, `Document`, `models`, `model`, and `Model`.

  - Interface: The code declares an interface named `IGame` that extends the `Document` interface from Mongoose. It defines the structure and types of the properties that a "Game" document should have.

  - Schema Definition: The code creates a new schema named `gameSchema` using the `Schema` class from Mongoose. The schema defines the fields and their types for a "Game" document. These fields include `title`, `genre`, `platform`, `releaseYear`, `developer`, `publisher`, `description`, `image`, `rating`, `tagArray`, `langArray`, `multiplayer`, `platformArray`, and `seriesId`.

  - Schema Options: The schema is configured with some options:

    - `timestamps: false` - Disables the automatic generation of `createdAt` and `updatedAt` timestamps for the documents.
    - `versionKey: false` - Disables the versioning feature of Mongoose.

  - Export: The code exports a Mongoose model named "Games". It checks if the model already exists (`models.Games`) and returns it if it does. Otherwise, it creates a new model using `model<IGame>("Games", gameSchema)` and exports it.
  <hr>

- ### [series.model.ts](/src/models/series.model.ts)

  - Dependencies: The code imports necessary dependencies from the Mongoose library, including `Schema`, `Document`, `models`, `model`, and `Model`. It also imports the `IGame` interface from the `game.model` file.

  - Interface: The code declares an interface named `ISeries` that extends the `Document` interface from Mongoose. It defines the structure and types of the properties that a "Series" document should have. The properties include `title` (string) and `games` (an array of `IGame['_id']`).

  - Schema Definition: The code creates a new schema named `seriesSchema` using the `Schema` class from Mongoose. The schema defines the fields and their types for a "Series" document. These fields include `title` (required string) and `games` (an array of `Schema.Types.ObjectId` referencing the "Game" model).

  - Schema Options: The schema is configured with some options:

    - `timestamps: false` - Disables the automatic generation of `createdAt` and `updatedAt` timestamps for the documents.
    - `versionKey: false` - Disables the versioning feature of Mongoose.

  - Export: The code exports a Mongoose model named "Series". It checks if the model already exists (`models.Series`) and returns it if it does. Otherwise, it creates a new model using `model<ISeries>("Series", seriesSchema)` and exports it.
  <hr>

## Controllers

[to Folder_Structure](#folder-structure)

- ### [game.controller.ts](/src/controllers/game.controller.ts)

  - `getGames`: This function retrieves all games from the database by calling `Game.find({})`. The retrieved games are then sent as a response with a status code of 200.

  - `getGamesById`: This function retrieves a game by its ID. It extracts the game ID from the request parameters and uses `Game.findById` to find the game. The retrieved game is then sent as a response with a status code of 200.

  - `createGame`: This function is responsible for creating a new game. It extracts the necessary game information from the request body, including the title, genre, platform, release year, developer, publisher, description, rating, tags, languages, multiplayer, platforms, and series name.

    - It first checks if an image file is included in the request (`!req.file`). If not, it returns a response with a status code of 400 and a message indicating that the file is not found.

    - It then uploads the image to Firebase storage by calling `upload_Img` function and passing the file and title as arguments. The function returns the downloadable image URL, which is stored in the `imageUrl` variable.

    - It retrieves the `seriesId` by querying the `Series` collection based on the provided `seriesName`.

    - It splits the tags, languages, and platforms into arrays by using the `split` method and mapping over the resulting strings.

    - It creates a new instance of the `Game` model with all the extracted information and saves it to the database.

    - It updates the `games` array of the corresponding series by calling `Series.findByIdAndUpdate` and using the `$push` operator to add the newly created game's ID.

    - Finally, it sends a response with a status code of 201 and the saved game object.

  - `deleteGame`: This function deletes a game by its ID. It extracts the game ID from the request parameters and uses `Game.findByIdAndDelete` to delete the game from the database. If the game is successfully deleted, it checks if the corresponding series exists and updates the `games` array of the series by using `Series.findByIdAndUpdate` and the `$pop` operator to remove the game's ID. Finally, it sends a response with a status code of 200 and a success message.

  <hr>

- ### [series.controller.ts](/src/controllers/series.controller.ts)

  - `getSeries`: This function retrieves all series from the database by calling `Series.find({})`. The retrieved series are then sent as a response with a status code of 200.

  - `getGamesBySeries`: This function retrieves all games associated with a specific series. It extracts the `seriesId` from the request parameters and uses `Series.findById` to find the series. If the series does not exist, it returns a response with a status code of 404 and a message indicating that no series is found.

    - If the series is found, it retrieves the `games` array from the series and uses the `$in` operator in a query to find all games whose IDs match the ones in the `games` array. The retrieved games are sorted by their release year in ascending order.

    - It sends a response with a status code of 200 and includes the series name, a success message, and the retrieved games.

  - `createSeries`: This function creates a new series. It extracts the `title` from the request body and creates a new instance of the `Series` model with the provided title. The new series is then saved to the database, and a response with a status code of 201 and the saved series object is sent.

  <hr>

## Routes

[to Folder_Structure](#folder-structure)

- ### [game.route.ts](/src/routes/game.route.ts)

  - `upload`: This is the multer configuration that specifies the storage options and limits for file uploads. It uses `multer.memoryStorage()` to store the uploaded file in memory and sets a limit of 10MB for the file size.

  - `router.post("/game", [upload.single("image")], createGame)`: This route is used for creating games. It uses the `[upload.single("image")]` middleware to handle the image upload. The `single()` function specifies that only a single file with the field name "image" should be uploaded. The uploaded file can be accessed in the `createGame` controller function via `req.file`.

  - `router.get("/game", getGames)`: This route is used for retrieving all games. It calls the `getGames` controller function when a GET request is made to this endpoint.

  - `router.get("/game/:id", getGamesById)`: This route is used for retrieving a specific game by its ID. It calls the `getGamesById` controller function when a GET request with a game ID is made to this endpoint.

  - `router.delete("/game/:id", deleteGame)`: This route is used for deleting a specific game by its ID. It calls the `deleteGame` controller function when a DELETE request with a game ID is made to this endpoint.

  <hr>

- ### [series.route.ts](/src/routes/series.route.ts)

  - Dependencies: The code imports necessary dependencies from Express, including `express` and `Router`. It also imports the series-related controller functions (`getSeries`, `createSeries`, `getGamesBySeries`) from the `series.controller` file.

  - Router Initialization: The code creates a new router instance using `express.Router()` and assigns it to the `router` variable.

  - Route Definitions:

    - `GET /series`: This route is responsible for retrieving all series. It maps to the `getSeries` controller function defined in the series controller file.
    - `POST /series`: This route is responsible for creating a new series. It maps to the `createSeries` controller function defined in the series controller file.
    - `GET /series/:seriesId`: This route is responsible for retrieving games belonging to a specific series. It expects the `seriesId` parameter in the request (`req.params.seriesId`). It maps to the `getGamesBySeries` controller function defined in the series controller file.

  - Export: The code exports the router instance to be used in other parts of the application.
    <hr>

## [index.ts](/src/index.ts)

[to Folder_Structure](#folder-structure)

- Dependencies: The code imports necessary dependencies from various packages, including `express`, `body-parser`, `cookie-parser`, `compression`, `cors`, `dotenv`, and `Error` from Mongoose. It also imports the `connectToDB` function from the `mongodb.service` file, as well as the route handlers from the respective route files (`game.route`, `image.route`, `series.route`).

- Environment Configuration: The code loads environment variables from a `.env` file using `dotenv.config()`.

- Server Setup: The code initializes an Express application by calling `express()` and assigns it to the `app` variable.

- Middleware Setup:

  - `cors`: The code enables Cross-Origin Resource Sharing (CORS) by using the `cors` middleware. It allows requests from different origins and includes credentials.
  - `compression`: The code uses the `compression` middleware to enable response compression for better performance.
  - `cookie-parser`: The code uses the `cookie-parser` middleware to parse cookie headers from incoming requests.
  - `body-parser`: The code uses the `body-parser` middleware to parse request bodies in JSON format.

- Port Configuration: The code retrieves the port number from the `PORT` environment variable.

- Route Setup: The code sets up the API routes for game services, image services, and series services. It prefixes these routes with `/api` using `app.use("/api", ...)`.

- Database Connection: The code calls the `connectToDB` function to establish a connection to the MongoDB database using Mongoose. If the connection is successful, it starts the server by calling `app.listen()` and logs a success message with the server URL. If there's an error during the connection, it logs an error message and exits the process.
<hr>
