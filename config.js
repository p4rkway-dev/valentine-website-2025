const CONFIG = {
    valentineName: "Elisabeth",

    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'], 
        bees: ['🐝', '🌹','🌺']                      
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
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#B185A7",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#8D6B94",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#EBAFD4",     // Button color (should stand out against the background)
        buttonHover: "#EFCFE3",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",          
        floatDistance: "50px",         
        bounceSpeed: "0.5s",            
        heartExplosionSize: 1.5         
    },

};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
