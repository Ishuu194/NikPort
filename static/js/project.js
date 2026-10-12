/* ============================================================
   project.js
   Project cards and project interactions
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       Project Cards
    ========================= */

    const projectCards = document.querySelectorAll(".project-card");

    if (!projectCards.length) {
        return;
    }


    /* =========================
       Project Card Hover Effect
    ========================= */

    projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("is-hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("is-hovered");
        });

    });


    /* =========================
       Project Links
    ========================= */

    const projectLinks = document.querySelectorAll(
        ".project-link"
    );

    projectLinks.forEach(link => {

        link.addEventListener("click", () => {

            link.classList.add("is-clicked");

            setTimeout(() => {
                link.classList.remove("is-clicked");
            }, 300);

        });

    });

});

const files = {

    ai_video: {
        title: "AI Video",
        files: [
            {
                name: "WhatsApp Video 2026-10-01 at 1.27.59 PM.mp4",
                path: "https://drive.google.com/file/d/1zGwe3lrMxOIOXMzCTQhzcYQ683R1SjeZ/view?usp=sharing"
            },
            {
                name: "WhatsApp Video 2026-10-01 at 1.28.06 PM.mp4",
                path: "https://drive.google.com/file/d/1nSQ5rd8uXbXzJvGqMDmFEq4yhTRqbUeR/view?usp=sharing"
            },
            {
                name: "WhatsApp Video 2026-10-01 at 1.28.21 PM (2).mp4",
                path: "https://drive.google.com/file/d/1ytfhQEMKwSsZ6FBMWB9DeisZrwYY6mfB/view?usp=sharing"
            },
            {
                name: "WhatsApp Video 2026-10-01 at 1.28.21 PM.mp4",
                path: "https://drive.google.com/file/d/1j6OJiTZBJmwgos2KsBr0wp4-wLbjM9ql/view?usp=sharing"
            },
            {
                name: "WhatsApp Video 2026-10-01 at 1.29.49 PM.mp4",
                path: "https://drive.google.com/file/d/1NM-_3qiZFB5S_P279Jc3UrnL5c2nIBC6/view?usp=sharing"
            }
        ]
    },


    Motion_Graphics_video: {
        title: "Motion Graphics Video",
        files: [
            {
                name: "Agarwood Plantation.mp4",
                path: "https://drive.google.com/file/d/1rKoNpi7JrOiLKnJpCWKa7tKJ6EiIGuSl/view?usp=sharing"
            },
            {
                name: "BFL  ATOM Video 1_ATOM overview.mp4",
                path: "https://drive.google.com/file/d/1mxt01_XxiHEVB_yYrGud_9azj8D-vqpl/view?usp=sharing"
            },
            {
                name: "BFL MESE  Rural  Video 8_Introduction to MESE_mp4.mp4",
                path: "https://drive.google.com/file/d/1FYz5DLYXgPgoas86acqs4sns0yNdjOrY/view?usp=sharing"
            },
            {
                name: "BFL OJT  Support  Finance - Know your Unit - PMO Insurance, GL Control Unit, IFC & TECH COE Unit_mp4.mp4",
                path: "https://drive.google.com/file/d/18Kalx_CnTYrzx93R6DgycLI6fWeoAQ_6/view?usp=drive_link"
            },
            {
                name: "BFL_Flight to Success.mp4",
                path: "https://drive.google.com/file/d/12-ilQRM69al2HCyj_aGiCIz9aMBP-jhb/view?usp=sharing"
            },
            {
                name: "BFL_Tractor Finance.mp4",
                path: "https://drive.google.com/file/d/1YUHa0Nn16fViNyhOELocUMYMjow4LBhk/view?usp=sharing"
            },
            {
                name: "BFL-Account Aggregator Video Required_mp4.mp4",
                path: "https://drive.google.com/file/d/1Gzw6QOszi9XL-EblClL9Rajw5pS3ZgCX/view?usp=sharing"
            },
            {
                name: "Royal Swad - 5.mp4",
                path: "https://drive.google.com/file/d/1EQANkOlSVC5O0jVKX28PGlYgNkDvn4Up/view?usp=sharing"
            }
        ]
    },


    podcast_video: {
        title: "Podcast Video",
        files: [
            {
                name: "BFL_Flight To Success.mp4",
                path: "https://drive.google.com/file/d/1_Iw4aLb2L1n5h-txCN_B_jwatSDB-EC-/view?usp=sharing"
            },
            {
                name: "Podcast .mp4",
                path: "https://drive.google.com/file/d/1Ne7VscrV_OwgoWxxMm8w4wtGEWQEMlNn/view?usp=sharing"
            },
            {
                name: "podcast_sampple_2.mp4",
                path: "https://drive.google.com/file/d/1L6dyh2z-oKZ5lr86Hy8HakyZX1sy9HbC/view?usp=sharing"
            }
        ]
    },


    Reels: {
        title: "Reels",
        files: [
            {
                name: "Agarwood.mp4",
                path: "https://drive.google.com/file/d/1Xu-Isn0U8LBbixtyoTSbwq-3CXWBwxle/view?usp=sharing"
            },
            {
                name: "Busines Growth Prgram_3 (1).mp4",
                path: "https://drive.google.com/file/d/1TdYLufLLLShb3M1su_KLFJg7_4Zf9Dpu/view?usp=sharing"
            },
            {
                name: "Business Owner Growth Club_1.mp4",
                path: "https://drive.google.com/file/d/1MdXOAoyNfeiL_06Ow1criA9Q9hXMT7CY/view?usp=sharing"
            },
            {
                name: "Business Owner Growth Club_2.mp4",
                path: "https://drive.google.com/file/d/1XxYpaUnwTgMdh1bXA7ygg7KeD0PfmoKo/view?usp=sharing"
            },
            {
                name: "Business System Health Audit .mp4",
                path: "https://drive.google.com/file/d/1N9JVxLEND4rBu_tkDq6VX3RySDUzIdSi/view?usp=sharing"
            },
            {
                name: "China Taiwan.mp4",
                path: "https://drive.google.com/file/d/1kGqlfyqn1FUC7Zt-cf1z1_Fszlw7ehyF/view?usp=sharing"
            },
            {
                name: "Digital FD Interest Payout Options (Cumulative vs. Non-Cumulative).mp4",
                path: "https://drive.google.com/file/d/1qrdT2UH3os1MQQVBg4Bn397IyZdArTXS/view?usp=sharing"
            },
            {
                name: "Green Grove_Ai Video.mp4",
                path: "https://drive.google.com/file/d/1yyZYoszbWt2DxM-JAEz7ar9SQCJkkKE0/view?usp=sharing"
            },
            {
                name: "Impact On Small Bussiness.mp4",
                path: "https://drive.google.com/file/d/1tOMEaK4yMneczxLZwKi0yOZDC1SLIIbE/view?usp=sharing"
            },
            {
                name: "Royal Swad - 4.mp4",
                path: "https://drive.google.com/file/d/1rf2A3Q51Ou4RsPqlng4jZkxBsSfG-a25/view?usp=sharing"
            },
            {
                name: "Royal Swad_1.mp4",
                path: "https://drive.google.com/file/d/1syEow59kRUVWinOAUq5yyQOrlyHgPHzB/view?usp=sharing"
            },
            {
                name: "Royal Swad.mp4",
                path: "https://drive.google.com/file/d/11VzY7ojAgxBPKoHoGfsOyt2pY0CvDMn-/view?usp=sharing"
            },
            {
                name: "Russia Oil Ban 01-04-2026.mp4",
                path: "https://drive.google.com/file/d/1ghYoGR-97LXhxPzXSWmZ9so6T1l037kc/view?usp=sharing"
            },
            {
                name: "VID-20251218-WA0009.mp4",
                path: "https://drive.google.com/file/d/19_-d-W0cJzc2MekMrOkcWM12teI03OqP/view?usp=sharing"
            }
        ]
    },


    Video_edit: {
        title: "Video Edit",
        files: [
            {
                name: "Agarwood Black Gold (1).mp4",
                path: "https://drive.google.com/file/d/12Sv6pXTC9nEX1_qkbRrhZUCtYfkplLy6/view?usp=sharing"
            },
            {
                name: "Business Add Video (1).mp4",
                path: "https://drive.google.com/file/d/1CGstAHR4yhk0RkJ_ofWZfqJSbx6z_Lo3/view?usp=sharing"
            },
            {
                name: "Money Laundering, Black Money and Hawala-1_.mp4",
                path: "https://drive.google.com/file/d/1WiTmIZ634KlRMJrqktEYYfSlIyBirmHa/view?usp=sharing"
            },
            {
                name: "Narayana Academy_v22cb10ma0802.mp4",
                path: "https://drive.google.com/file/d/1fMrPKZ1vhKHvfsQwbl2ydt7temW3MDj5/view?usp=sharing"
            },
            {
                name: "Study IQ Drug Trafficking .mp4",
                path: "https://drive.google.com/file/d/1Vfc7-C5jSEv6RhRii9YkxiVYr_nCur6-/view?usp=sharing"
            },
            {
                name: "Study IQ_North East Insurgency part 2_.mp4",
                path: "https://drive.google.com/file/d/1tq7OWnoqlF-4AnpgEInw4w0bA98dt2JG/view?usp=sharing"
            },
        ]
    },


    white_board_animation: {
        title: "White Board Animation",
        files: [
            {
                name: "BFL  Conversation Toolkit  Learning video mp4.mp4",
                path: "https://drive.google.com/file/d/1lBfXb0m4Ak3-4qE_q4kcMvJbBl_PcSz4/view?usp=sharing"
            }
        ]
    }

};


// function openVideo(videoPath, videoName) {

//     // Google Drive video
//     if (videoPath.includes("drive.google.com")) {

//         const videoWindow = window.open("", "_blank");

//         if (!videoWindow) {
//             alert("Please allow pop-ups for this website.");
//             return;
//         }

//         videoWindow.document.write(`
//             <!DOCTYPE html>
//             <html>
//             <head>
//                 <title>${videoName}</title>
//                 <meta name="viewport" content="width=device-width, initial-scale=1">
//                 <style>
//                     body {
//                         margin: 0;
//                         background: #000;
//                         display: flex;
//                         justify-content: center;
//                         align-items: center;
//                         min-height: 100vh;
//                     }

//                     iframe {
//                         width: 90%;
//                         height: 80vh;
//                         border: 0;
//                     }
//                 </style>
//             </head>
//             <body>
//                 <iframe
//                     src="${videoPath}"
//                     allow="autoplay; fullscreen"
//                     allowfullscreen>
//                 </iframe>
//             </body>
//             </html>
//         `);

//         videoWindow.document.close();
//         return;
//     }

//     // Local video
//     const videoWindow = window.open("", "_blank");

//     if (!videoWindow) {
//         alert("Please allow pop-ups for this website.");
//         return;
//     }

//     videoWindow.document.write(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>${videoName}</title>
//             <style>
//                 body {
//                     margin: 0;
//                     background: #000;
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     min-height: 100vh;
//                 }

//                 video {
//                     width: 90%;
//                     max-width: 1100px;
//                     max-height: 90vh;
//                 }
//             </style>
//         </head>
//         <body>
//             <video controls autoplay playsinline>
//                 <source src="${videoPath}" type="video/mp4">
//             </video>
//         </body>
//         </html>
//     `);

//     videoWindow.document.close();
// }



/* Open selected project folder */
function openFolder(folderKey) {
    const folder = files[folderKey];

    if (!folder) {
        alert("Folder not found!");
        return;
    }

    const fileArea = document.getElementById("file-area");
    const fileList = document.getElementById("file-list");
    const folderTitle = document.getElementById("folder-title");

    folderTitle.textContent = folder.title;
    fileList.innerHTML = "";

    folder.files.forEach(file => {
        const item = document.createElement("div");
        item.className = "project-file";

        const name = document.createElement("span");
        name.textContent = file.name;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "project-link";
        button.textContent = "▶ Watch Video";

        button.addEventListener("click", () => {
            openVideo(file.path, file.name);
        });

        item.appendChild(name);
        item.appendChild(button);
        fileList.appendChild(item);
    });

    fileArea.classList.add("active");
    fileArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* Open video */
function openVideo(videoPath, videoName) {
    if (videoPath.includes("drive.google.com")) {
        const match = videoPath.match(/\/file\/d\/([^/]+)/);

        if (!match) {
            alert("Google Drive link is incorrect.");
            return;
        }

        const videoId = match[1];
        const previewUrl =
            `https://drive.google.com/file/d/${videoId}/preview`;

        window.open(previewUrl, "_blank");
        return;
    }

    window.open(videoPath, "_blank");
}


/* Close folder */
function closeFolder() {
    const fileArea = document.getElementById("file-area");

    if (fileArea) {
        fileArea.classList.remove("active");
    }
}
