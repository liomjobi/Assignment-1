 # Video Streamer/Player service

## Description
This module is based on managing a typical video streaming/player that provides functionalities as an **Administrator**.

The module has typical functionalities such as,
- Adding, removing or updating videos.
- Searching via titles, channels or categories.
- Listing all videos in the library.


## Setting up
1. Clone this repository to your repository.
2. Create another .js file ("main.js","app.js" etc) in order to test the code.
    Ensure that your created .js file is within the same file directory as Liamjovi_Videoplayer.js


## Code sample.
```
const myLibrary = require("./Liamjovi_VideoPlayer.js");


//Adding a video
    /* Successful Case */
myLibrary.addVideo("Generic Title!!","GenericChannel", ["Generic"]);
console.log(`\n`);

    /* Unsuccessful Case - missing 1 parameter */
myLibrary.addVideo("Generic Title!!", ["Generic"]);
console.log(`\n`);

//Removing a video
    /* Successful Case */
myLibrary.removeVideo("Generic Title!!");
console.log(`\n`);
    /* Unsuccessful Case - should return error if video was successfully removed from previous code above ^^. */
myLibrary.removeVideo("Generic Title!!");
console.log(`\n`);

//Updating a video
 //Updating a video's category
 myLibrary.updateVideo("Cats with zero brain activity", { category: ["Entertainment", "Cute"] });
 console.log(`\n`);

 //Updating a video's title         
 myLibrary.updateVideo("Cats with zero brain activity", { title: "Cats with 0 brain activity" });
 console.log(`\n`);

 //Updating a video's channel name

//Searching via title
    /* Successful Case */
myLibrary.searchVideoByTitle("cats");
console.log(`\n`);
    /* Unsuccessful Case - no video titled "123" found*/
myLibrary.searchVideoByTitle("123");
console.log(`\n`);

//Searching via Category

    /* Successful Case - Must be exact match */
myLibrary.searchVideoByCategory("Informative");
console.log(`\n`);
    /* Unsuccessful Case - no category "Mystery" */
myLibrary.searchVideoByCategory("Mystery");
console.log(`\n`);

//Searching via Channel name
     /* Successful Case - Search should include matches with query */
 myLibrary.searchVideoByChannel("bill");
 console.log(`\n`);
    /* Unsuccessful Case - no channel found */
    myLibrary.searchVideoByChannel("1");
    console.log(`\n`);

//List all videos
myLibrary.listAllVideos();
```

## Functions:
- **addVideo()** : Add a video to the library
- **removeVideo()** : Remove a video from the library
- **updateVideo()** : Update an existing video from the library
- **searchVideoByTitle()** : Search for video titles that match the user's query
- **searchVideoByCategory()** : Search for video categories that exactly matches the user's query
    > Queries must match existing categories already in the library.
- **searchVideoByChannel()**: Search for channels that match the user's query
- **listAllVideos()** : List all the videos inside the library




