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
                path: "static/videos/ai_video/WhatsApp Video 2026-10-01 at 1.27.59 PM.mp4"
            },
            {
                name: "WhatsApp Video 2026-10-01 at 1.28.06 PM.mp4",
                path: "static/videos/ai_video/WhatsApp Video 2026-10-01 at 1.28.06 PM.mp4"
            },
            {
                name: "WhatsApp Video 2026-10-01 at 1.28.21 PM (2).mp4",
                path: "static/videos/ai_video/WhatsApp Video 2026-10-01 at 1.28.21 PM (2).mp4"
            },
            {
                name: "WhatsApp Video 2026-10-01 at 1.28.21 PM.mp4",
                path: "static/videos/ai_video/WhatsApp Video 2026-10-01 at 1.28.21 PM.mp4"
            },
            {
                name: "WhatsApp Video 2026-10-01 at 1.29.49 PM.mp4",
                path: "static/videos/ai_video/WhatsApp Video 2026-10-01 at 1.29.49 PM.mp4"
            }
        ]
    },


    Motion_Graphics_video: {
        title: "Motion Graphics Video",
        files: [
            {
                name: "Agarwood Plantation.mp4",
                path: "static/videos/Motion_Graphics_video/Agarwood Plantation.mp4"
            },
            {
                name: "BFL  ATOM Video 1_ATOM overview.mp4",
                path: "static/videos/Motion_Graphics_video/BFL  ATOM Video 1_ATOM overview.mp4"
            },
            {
                name: "BFL MESE  Rural  Video 8_Introduction to MESE_mp4.mp4",
                path: "static/videos/Motion_Graphics_video/BFL MESE  Rural  Video 8_Introduction to MESE_mp4.mp4"
            },
            {
                name: "BFL OJT  Support  Finance - Know your Unit - PMO Insurance, GL Control Unit, IFC & TECH COE Unit_mp4.mp4",
                path: "static/videos/Motion_Graphics_video/BFL OJT  Support  Finance - Know your Unit - PMO Insurance, GL Control Unit, IFC & TECH COE Unit_mp4.mp4"
            },
            {
                name: "BFL_Flight to Success.mp4",
                path: "static/videos/Motion_Graphics_video/BFL_Flight to Success.mp4"
            },
            {
                name: "BFL_Tractor Finance.mp4",
                path: "static/videos/Motion_Graphics_video/BFL_Tractor Finance.mp4"
            },
            {
                name: "BFL-Account Aggregator Video Required_mp4.mp4",
                path: "static/videos/Motion_Graphics_video/BFL-Account Aggregator Video Required_mp4.mp4"
            },
            {
                name: "Royal Swad - 5.mp4",
                path: "static/videos/Motion_Graphics_video/Royal Swad - 5.mp4"
            }
        ]
    },


    podcast_video: {
        title: "Podcast Video",
        files: [
            {
                name: "BFL_Flight To Success.mp4",
                path: "static/videos/prodcast_video/BFL_Flight To Success.mp4"
            },
            {
                name: "Podcast .mp4",
                path: "static/videos/prodcast_video/Podcast .mp4"
            },
            {
                name: "podcast_sampple_2.mp4",
                path: "static/videos/prodcast_video/podcast_sampple_2.mp4"
            }
        ]
    },


    Reels: {
        title: "Reels",
        files: [
            {
                name: "Agarwood.mp4",
                path: "static/videos/Reels/Agarwood.mp4"
            },
            {
                name: "Busines Growth Prgram_3 (1).mp4",
                path: "static/videos/Reels/Busines Growth Prgram_3 (1).mp4"
            },
            {
                name: "Business Owner Growth Club_1.mp4",
                path: "static/videos/Reels/Business Owner Growth Club_1.mp4"
            },
            {
                name: "Business Owner Growth Club_2.mp4",
                path: "static/videos/Reels/Business Owner Growth Club_2.mp4"
            },
            {
                name: "Business System Health Audit .mp4",
                path: "static/videos/Reels/Business System Health Audit .mp4"
            },
            {
                name: "China Taiwan.mp4",
                path: "static/videos/Reels/China Taiwan.mp4"
            },
            {
                name: "Digital FD Interest Payout Options (Cumulative vs. Non-Cumulative).mp4",
                path: "static/videos/Reels/Digital FD Interest Payout Options (Cumulative vs. Non-Cumulative).mp4"
            },
            {
                name: "Green Grove_Ai Video.mp4",
                path: "static/videos/Reels/Green Grove_Ai Video.mp4"
            },
            {
                name: "Impact On Small Bussiness.mp4",
                path: "static/videos/Reels/Impact On Small Bussiness.mp4"
            },
            {
                name: "Royal Swad - 4.mp4",
                path: "static/videos/Reels/Royal Swad - 4.mp4"
            },
            {
                name: "Royal Swad_1.mp4",
                path: "static/videos/Reels/Royal Swad_1.mp4"
            },
            {
                name: "Royal Swad.mp4",
                path: "static/videos/Reels/Royal Swad.mp4"
            },
            {
                name: "Russia Oil Ban 01-04-2026.mp4",
                path: "static/videos/Reels/Russia Oil Ban 01-04-2026 (1).mp4"
            },
            {
                name: "VID-20251218-WA0009.mp4",
                path: "static/videos/Reels/VID-20251218-WA0009.mp4"
            }
        ]
    },


    Video_edit: {
        title: "Video Edit",
        files: [
            {
                name: "Agarwood Black Gold (1).mp4",
                path: "static/videos/video_edit/Agarwood Black Gold (1).mp4"
            },
            {
                name: "Business Add Video (1).mp4",
                path: "static/videos/video_edit/Business Add Video (1).mp4"
            },
            {
                name: "Money Laundering, Black Money and Hawala-1_.mp4",
                path: "static/videos/video_edit/Money Laundering, Black Money and Hawala-1_.mp4"
            },
            {
                name: "Narayana Academy_v22cb10ma0802.mp4",
                path: "static/videos/video_edit/Narayana Academy_v22cb10ma0802.mp4"
            },
            {
                name: "Study IQ Drug Trafficking .mp4",
                path: "static/videos/video_edit/Study IQ Drug Trafficking .mp4"
            },
            {
                name: "Study IQ_North East Insurgency part 2_.mp4",
                path: "static/videos/video_edit/Study IQ_North East Insurgency part 2_.mp4"
            },
        ]
    },


    white_board_animation: {
        title: "White Board Animation",
        files: [
            {
                name: "BFL  Conversation Toolkit  Learning video mp4.mp4",
                path: "static/videos/white_board_animation/BFL  Conversation Toolkit  Learning video mp4.mp4"
            }
        ]
    }

};


function openFolder(folderName) {

    const folder = files[folderName];

    const fileArea = document.getElementById("file-area");
    const fileList = document.getElementById("file-list");
    const folderTitle = document.getElementById("folder-title");

    folderTitle.textContent = folder.title;

    fileList.innerHTML = "";

    folder.files.forEach(file => {

        const fileCard = document.createElement("div");

        fileCard.className = "file-card";

        fileCard.innerHTML = `
                 <div class="file-icon">🎬</div>
                 <h4>${file.name}</h4>
                 <p>Click to watch video</p>
        `;

        fileCard.addEventListener("click", () => {
           openVideo(file.path, file.name);
        });

        fileList.appendChild(fileCard);
    });

    fileArea.classList.add("active");

    fileArea.scrollIntoView({
        behavior: "smooth"
    });
}

function openVideo(videoPath, videoName) {

    const videoWindow = window.open("", "_blank");

    videoWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>

            <title>${videoName}</title>

            <style>
                body {
                    margin: 0;
                    background: #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }

                video {
                    width: 90%;
                    max-width: 1100px;
                    max-height: 90vh;
                }
            </style>

        </head>

        <body oncontextmenu="return false">

            <video
                controls
                controlsList="nodownload"
                disablePictureInPicture
                autoplay>

                <source src="${videoPath}" type="video/mp4">

            </video>

        </body>
        </html>
    `);

    videoWindow.document.close();
}


function closeFolder() {

    const fileArea = document.getElementById("file-area");

    fileArea.classList.remove("active");

}