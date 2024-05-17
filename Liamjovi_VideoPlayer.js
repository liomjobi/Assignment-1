module.exports = {
    // Video Library
    VideoLibrary:[
        {title:"Cats with zero brain activity", channel:"vapingcat065", category:["Entertainment"]},
        {title:"The Egg - A Short Story", channel:"kurtzgesagt", category:["Informative"]},
        {title:"history of the entire world, i guess", channel:"billwurtz", category:["Entertainment","Informative"]},
    ],

    //Add a video into the library
    addVideo(title, channel, category) {
        //Check if parameters are provided
        if (!title || !channel || !category) {
            console.log(`Please provide a suitable title, channel and category for this video.`)
        }
        else 
        {
        this.VideoLibrary.push({ title, channel, category });
        console.log(`Added a new video: ${title} by ${channel}`)
        }
    },

    //Remove a video from the library (Must be exact match)
    removeVideo(title) {
        const index = this.VideoLibrary.findIndex(video => video.title === title);
        //check if title exists
        if (index === -1) {
            console.log(`Error: Video with title "${title}" not found.`);
        }
        else {
        this.VideoLibrary.splice(index, 1);
        console.log(`Successfully removed: ${title}`) 
        }
    },

    //Update an existing video from the library
    updateVideo(title, newProperties) {
        const index = this.VideoLibrary.findIndex(video => video.title === title);
        //Check if video exists
        if (index === -1) {
            
            console.log(`Error: Video with title "${title}" not found.`);
        } else {
            this.VideoLibrary[index] = { ...this.VideoLibrary[index], ...newProperties };
            console.log(`Successfully updated video: ${title}`);
        }
    },

    //Search a video via title
    searchVideoByTitle(title) {
        const videoTitle = this.VideoLibrary.find(video => video.title.toLowerCase().includes(title.toLowerCase()))
        //check if title exists
        if (!videoTitle) {
            console.log(`No videos found for "${title}".`);
        } else {
        console.log(`Videos for "${title}" : \n`, videoTitle);
        }
        
    },

    //Search a video via category (Must be exact match)
  searchVideoByCategory(category) {
    const videosCategory = this.VideoLibrary.filter(video =>
        video.category.map(cat => cat.toLowerCase()).includes(category.toLowerCase())
    );
    //check if category exists
    if (videosCategory.length === 0) {
        console.log(`No videos found under the "${category}" category.`);
    } else {
    console.log(`Videos under the "${category}" category : \n`, videosCategory);
    }
    },

    //Search a video via channel from library
    searchVideoByChannel(channel) {
        const videoChannel = this.VideoLibrary.filter(video => video.channel.toLowerCase().includes(channel.toLowerCase()));
        //if no channel exists 
        if (videoChannel.length === 0) {
            console.log(`No channels found for "${channel}".`);
        } else {
        console.log(`Channels for "${channel}" : \n`, videoChannel);
        }
    },

    //List all videos in the library
    listAllVideos() {
        console.log(`There are a total of ${this.VideoLibrary.length} videos in the library:`);
        console.log('--------------------------');
        this.VideoLibrary.forEach(video => {
            console.log(video);
            console.log('--------------------------');
        });
    },

}