const CONFIG = {
    valentineName: "Elisabeth",

    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'], 
        bears: ['🐝', '🌹','🌺']                      
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    loveMessages: {
        extreme: "WOOOW You love me that much?? I'm so happy, honey! 🥰💝",  
        high: "I love you more, honey! 💝",             
        normal: "Awh, I love you! 🥰"                           
    },

    celebration: {
        title: "I am glad you said yes, honey. I love you! 🎉💝💖💝💓",
        message: "Now come get a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  
    },

    colors: {
        backgroundStart: "#B185A7",      
        backgroundEnd: "#CD8987",        
        buttonBackground: "#EBAFD4",     
        buttonHover: "#EFCFE3",          
        textColor: "#C98CA7"             
    },

    animations: {
        floatDuration: "15s",          
        floatDistance: "50px",         
        bounceSpeed: "0.5s",            
        heartExplosionSize: 1.5         
    },
    
    music: {
        enabled: true,                     
        autoplay: true,                    
        musicUrl: "https://res.cloudinary.com/deszwman9/video/upload/v1770930771/Hozier_-_Do_I_Wanna_Know_BBC_Live_Version__mp3.pm_hjhoi5.mp3", 
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",         
        volume: 0.75                        
    }
};

window.VALENTINE_CONFIG = CONFIG; 
