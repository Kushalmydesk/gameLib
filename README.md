<h1 align="center">Game-Collection Library</h1>

<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/120px-Node.js_logo.svg.png" alt="nodejs" >
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/64px-Typescript.svg.png" alt="TypeScript" height="50" width="">
<img src="https://expressjs.com/images/express-facebook-share.png" alt="Express" height="50">
<img src="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667" alt="Firebase" height="60" >
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" height="60">
</div>
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

- ### [tsconfig.json](/tsconfig.json)

  - `module`: Specifies the module code generation for TypeScript. In this case, it is set to `"NodeNext"`.

  - `moduleResolution`: Specifies how module dependencies are resolved. In this case, it is set to `"node"`, indicating that Node.js-style module resolution will be used.

  - `baseUrl`: Specifies the base directory for module resolution. In this case, it is set to `"src"`, indicating that module resolution will start from the `"src"` directory.

  - `outDir`: Specifies the output directory for the compiled TypeScript files. In this case, it is set to `"dist"`, indicating that the compiled JavaScript files will be placed in the `"dist"` directory.

  - `sourceMap`: Specifies whether to generate source map files (.map) for the compiled JavaScript files. In this case, it is set to `true`, indicating that source map files will be generated.

  - `noImplicitAny`: Specifies whether to raise an error on expressions and declarations with an implied `any` type. In this case, it is set to `true`, indicating that TypeScript will report an error if it cannot infer the type and no type annotation is specified.

  - `include`: Specifies the files or patterns to include in the TypeScript compilation. In this case, it includes all `.ts` files in the `"src"` directory and its subdirectories.

  - `exclude`: Specifies the files or patterns to exclude from the TypeScript compilation. In this case, it excludes the `"node_modules"` directory.

- ### [package.json](/package.json)

  - `scripts`: This section defines various scripts that can be run using `npm run [script-name]` command:

    - `start`: This script runs the compiled JavaScript files in the `dist` directory using the `node` command.
    - `build`: This script runs the TypeScript compiler (`tsc`) to compile the TypeScript files into JavaScript files.
    - `dev`: This script uses `nodemon` to monitor changes in the source files and automatically restart the server during development.
    - `test`: This script is a placeholder and currently only echoes an error message.

  - `devDependencies`: This section lists the development dependencies, which are packages required during development but not during production runtime. These dependencies include various TypeScript type definitions (`@types/...` packages) for improved TypeScript development, such as type definitions for Express, MongoDB, Mongoose, Multer, etc.

  - `dependencies`: This section lists the runtime dependencies, which are packages required for the application to run in production. These dependencies include packages like `express`, `dotenv`, `cors`, `mongoose`, `multer`, `firebase`, etc., which are used for server-side development, database operations, file handling, and Firebase integration.

## Folder Structure

- src

  - [controllers](#controllers)
    - game.controller.ts
    - image.controller.ts
    - series.controller.ts
  - [models](#models)
    - game.model.ts
    - image.model.ts
    - series.model.ts
  - [routes](#routes)
    - game.route.ts
    - image.route.ts
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

  - Schema Definition: The code creates a new schema named `gameSchema` using the `Schema` class from Mongoose. The schema defines the fields and their types for a "Game" document. These fields include `title`, `genre`, `platform`, `releaseYear`, `developer`, `publisher`, `description`, `image`, `rating`, `tags`, `languages`, `multiplayer`, `platforms`, and `seriesId`.

  - Schema Options: The schema is configured with some options:

    - `timestamps: false` - Disables the automatic generation of `createdAt` and `updatedAt` timestamps for the documents.
    - `versionKey: false` - Disables the versioning feature of Mongoose.

  - Export: The code exports a Mongoose model named "Games". It checks if the model already exists (`models.Games`) and returns it if it does. Otherwise, it creates a new model using `model<IGame>("Games", gameSchema)` and exports it.
  <hr>

- ### [image.model.ts](/src/models/image.model.ts)

  - This code defines a Mongoose schema and model for an "Image" entity. Here's an explanation of the code using keywords:

  - Dependencies: The code imports necessary dependencies from the Mongoose library, including `Schema`, `models`, `model`, `Model`, and `Document`.

  - Interface: The code declares an interface named `IImage` that extends the `Document` interface from Mongoose. It defines the structure and types of the properties that an "Image" document should have.

  - Schema Definition: The code creates a new schema named `imageSchema` using the `Schema` class from Mongoose. The schema defines the fields and their types for an "Image" document. These fields include `name`, `imageUrl`, and `gameId`.

  - Schema Options: The schema is configured with some options:

    - `timestamps: true` - Enables the automatic generation of `createdAt` and `updatedAt` timestamps for the documents.
    - `versionKey: false` - Disables the versioning feature of Mongoose.

  - Export: The code exports a Mongoose model named "Image". It checks if the model already exists (`models.Image`) and returns it if it does. Otherwise, it creates a new model using `model<IImage>("Image", imageSchema)` and exports it.
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

  - Dependencies: The code imports necessary dependencies from Express and the required models (`Game` and `Series`).

  - `getGames` Function: This function handles the retrieval of all games. It uses `Game.find({})` to fetch all game documents from the database and sends the response with a 200 status code and the retrieved games.

  - `getGamesById` Function: This function retrieves a specific game based on the provided `id` parameter. It uses `Game.findById(gameId)` to find the game by its ID and sends the response with a 200 status code and the retrieved game.

  - `createGame` Function: This function handles the creation of a new game. It extracts the necessary game data from the request body, creates a new `Game` instance, and saves it to the database using `newGame.save()`. It also updates the associated series by adding the new game's ID to its `games` array. The function sends a response with a 201 status code and the saved game.

  - `deleteGame` Function: This function deletes a game based on the provided `id` parameter. It uses `Game.findByIdAndDelete(gameId)` to delete the game from the database. If the game is successfully deleted, it checks if the associated series exists. If it does, it removes the game's ID from the series' `games` array using `Series.findByIdAndUpdate(seriesId, { $pop: { games: 1 } })`. The function sends a response with a 200 status code and a success message if the game deletion and series update are successful. Otherwise, it sends an appropriate error response.
  <hr>

- ### [image.controller.ts](/src/controllers/image.controller.ts)

  - Dependencies: The code imports necessary dependencies from Express and the required models (`Image` and `Game`). It also imports the `upload_Img` function from the `firebase.service` file.

  - `uploadImage` Function: This function handles the image upload process. It expects a file to be present in the request (`req.file`) and also requires `name` and `gameId` properties in the request body (`req.body`).

  - File Validation: The function checks if a file exists in the request (`!req.file`). If no file is found, it sends a response with a 400 status code and a message indicating that the file was not found.

  - Image Upload: The function proceeds with the image upload process. It calls the `upload_Img` function (presumably a custom implementation) and passes the file and name to it. This function is responsible for uploading the image file to a storage service (e.g., Firebase Storage) and returning the URL of the uploaded image (`imageUrl`).

  - Creating Image Document: After the image is uploaded, the function creates a new `Image` instance using the `name`, `imageUrl`, and `gameId` obtained from the request.

  - Saving Image and Updating Game: The function saves the new `image` document to the database using `image.save()`. It then finds the associated game document by its `gameId` and updates its `image` field with the newly created image's ID using `Game.findByIdAndUpdate(gameId, { $set: { image: image._id } })`.

  - Response: The function sends a response with a 201 status code and a success message, along with information about the uploaded image such as `imageUrl`, `name`, and `type` (obtained from the file).

  - Error Handling: If any error occurs during the process, it is caught and logged. The function sends a response with a 500 status code and an error message indicating the failure to upload the image.
  <hr>

- ### [series.controller.ts](/src/controllers/series.controller.ts)

  - Dependencies: The code imports necessary dependencies from Express and the required models (`Series` and `Game`).

  - `getSeries` Function: This function handles the retrieval of all series. It uses `Series.find({})` to fetch all series documents from the database and sends the response with a 200 status code and the retrieved series.

  - `getGamesBySeries` Function: This function retrieves all games belonging to a specific series. It expects the `seriesId` parameter in the request (`req.params.seriesId`). It first finds the series document by its ID using `Series.findById(seriesId)`. If the series document is not found, it sends a response with a 404 status code and a message indicating that no series was found. If the series is found, it extracts the `games` array from the series document and uses it to find the corresponding game documents using `Game.find({ _id: { $in: gameIds } })`. The function sends a response with a 200 status code and the retrieved games, sorted by their `releaseYear`.

  - `createSeries` Function: This function handles the creation of a new series. It expects the `title` property in the request body (`req.body`). It creates a new `Series` instance with the provided title and saves it to the database using `newSeries.save()`. The function sends a response with a 201 status code and the saved series.
  <hr>

## Routes

[to Folder_Structure](#folder-structure)

- ### [game.route.ts](/src/routes/game.route.ts)

  - Dependencies: The code imports necessary dependencies from Express, including `express` and `Router`. It also imports the game-related controller functions (`createGame`, `deleteGame`, `getGames`, `getGamesById`) from the `game.controller` file.

  - Router Initialization: The code creates a new router instance using `express.Router()` and assigns it to the `router` variable.

  - Route Definitions:

    - `POST /game`: This route is responsible for creating games. It maps to the `createGame` controller function defined in the game controller file.
    - `GET /game`: This route is responsible for retrieving all games. It maps to the `getGames` controller function defined in the game controller file.
    - `GET /game/:id`: This route is responsible for retrieving a specific game by its ID. It maps to the `getGamesById` controller function defined in the game controller file.
    - `DELETE /game/:id`: This route is responsible for deleting a game by its ID. It maps to the `deleteGame` controller function defined in the game controller file.

  - Export: The code exports the router instance to be used in other parts of the application.
  <hr>

- ### [image.route.ts](/src/routes/image.route.ts)

  - Dependencies: The code imports necessary dependencies from Express, including `express` and `Router`. It also imports the `multer` middleware for handling file uploads and the `uploadImage` controller function from the `image.controller` file.

  - Multer Configuration: The code includes commented out code that defines the storage and filename logic for saving uploaded files to the disk. This code is not currently used in the router.

  - Multer Upload Middleware: The code configures the `multer` middleware using `multer({ storage, fileFilter })`. In this case, it uses `multer.memoryStorage()` as the storage engine, which stores the uploaded file in memory as a buffer. It also sets a limit of 10MB for the file size.

  - Router Initialization: The code creates a new router instance using `express.Router()` and assigns it to the `router` variable.

  - Route Definition:

    - `POST /upload`: This route is responsible for uploading an image file. It uses the `upload` middleware to handle the file upload. The `upload.single("image")` specifies that it expects a single file with the field name "image". It then maps to the `uploadImage` controller function defined in the image controller file.

  - Export: The code exports the router instance to be used in other parts of the application.
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

```

```
