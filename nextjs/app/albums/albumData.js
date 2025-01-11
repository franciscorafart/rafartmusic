import { v4 as uuidv4 } from "uuid";
const S3 = "https://franc-cloud.s3.us-east-2.amazonaws.com/Audio/";
const S3Img = "https://franc-cloud.s3.us-east-2.amazonaws.com/img/"

function AlbumsData() {
  return {
    handbook: {
        title: "The Handbook of the Acid Rider",
        type: "LP",
        year: 2013,
        cover: `${S3Img}acid.jpg`,
        tracks: [
            {
                name: "Axis Mundi",
                artist: "Rafart & Nuño",
                audio: `${S3}AxisMundi.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: true,
            },
            {
                name: "Drum n Space",
                artist: "Rafart",
                audio: `${S3}DrumNSpace.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Blauen",
                artist: "Rafart",
                audio: `${S3}Blauen.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Pepperoni Atmosphere",
                artist: "Rafart & Nuño",
                audio: `${S3}PepperoniAtmosphere.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Chironex Fleckeri",
                artist: "Rafart",
                audio: `${S3}Chironex.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Mozarella",
                artist: "Rafart",
                audio: `${S3}Mozarella.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Space Rat",
                artist: "Rafart & Nuño",
                audio: `${S3}SpaceRat.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Masacre",
                artist: "Rafart",
                audio: `${S3}Masacre.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Escombrock",
                artist: "Rafart",
                audio: `${S3}Escombrock.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Sake & Mote",
                artist: "Rafart",
                audio: `${S3}SakeMote.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Alpha",
                artist: "Rafart",
                audio: `${S3}Alpha.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
        ],
        description: [
            "Rafart´s debut Chapman Stick album. 10 tracks of Stick, drums and guitar trio. A mix of progressive rock and electronic music, making the Chapman Stick an integral part of a band. Distributed by Mylodon Records and available for purchase in this website.",
            "Released June 24, 2013 \n Recorded and mixed by Rodrigo Morel at Estudio Machete, Santiago de Chile, 2013. \n Drums recorded by Eduardo Demangel and Dante González at Alba Road Studios, Santiago, Chile. \n Mastered by Mike Tholen at Rax Trax Recording, Chicago, IL. \n Composition in 1, 5 & 7: Francisco Rafart & Pat Nuño \n Drums in 1, 5, 7 & 10: Pablo Martínez. \n Guitars in 1, 5 & 7: Fernando Daza \n Guitars in 2, 4 & 8: Rodrigo Morel & Francisco Rafart \n Stick & composition in all tracks: Francisco Rafart."
        ]
    },
    "dark-night": {
        title: "The Dark Night of the Soul",
        type: 'EP',
        year: 2015,
        cover: `${S3Img}dark.jpg`,
        tracks: [
            {
                name: "Descent",
                artist: "Rafart",
                audio: `${S3}Descent.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: true,
            },
            {
                name: "Awakening",
                artist: "Rafart",
                audio: `${S3}Awakening.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Vortex",
                artist: "Rafart",
                audio: `${S3}Vortex.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Union",
                artist: "Rafart",
                audio: `${S3}Union.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            
        ], 
    description: [
        "The Dark Night of the Soul is a stylistic continuation of The Handbook of the Acid Rider. Every track in this album features a special guest musician: Pat Nuño in classical guitars, the jazz vibraphone player Mauricio Gallardo and the electric guitar virtuoso, winner of the Steve Vai Scholarship, Benjamín Lechuga.",
        "This album is inspired in the poem by Saint John of the Cross. In it, he describes the dark and meaningless period of life which individuals go through to achieve a union with god.",
        "Album recorded and mixed by Rodrigo Morel at Estudios Machete (Santiago de Chile) \n Mastered by Luke Dennis at Berklee College of Music (Valencia, Spain) \n Acoustic guitars: Pat Nuño. \n Drums: Andrés Rojas Ferrari. \n Vibraphone: Mauricio Gallardo. \n Electric Guitar: Benjamín Lechuga, Rodrigo Morel, Francisco Rafart. \n Bass: Rodrigo Morel \n Stick: Francisco Rafart. \n All tracks composed and arranged by Rafart."
    ]
    },
    "zappateada-2": {
        title: "Zappateada II",
        type: 'Single',
        year: 2022,  
        cover: `${S3Img}zappa.png`,
        tracks: [{
            name: "Zappateada II",
            artist: "Rafart",
            audio: `${S3}ZappateadaII.mp3`,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: true,
        }],
        description: ["Zappateada II is a piece for Jazz Ensemble composed in 2010. The piece is an extended and improved version of Zappateada (I), a score performed in 2009 at the Prismas festival in Santiago de Chile. The instrumentation and progressive music style evokes for me the music of Frank Zappa. On the other hand, \"zapatear\" (to tap your feet) is a part of the Chilean dance cueca. Even though there are no musical references to cueca in this piece, the fact that I'm Chilean made me merge these two ideas into the title Zappateada.",
            "Virtual orchestration(brass, sax, piano): Guido Arcella \n Fretless Bass: Tomás Díaz \n Electric Guitar: Francisco Rafart \n Drums (programming): Francisco Rafart \n Mix and Master: Francisco Rafart",
            
        ]
    },
    "magic-concepts": {
        title: "Magic Concepts",
        type: 'Single',
        year: 2016,
        cover: `${S3Img}magic.jpg`,
        tracks: [{
            name: "Magic Concepts",
            artist: "Rafart, Ramya Simaravakrishnan, David Rios",
            audio: `${S3}MagicConcepts.mp3`,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: true,
        }],
        description: [
            "Magic Concepts is a collaboration with female Indian singer Ramya Sivaramakrishnan and Puerto Rican guitarist David Rios. It is a unique musical creation made with musicians around the world, that mixes electronic music, indian classical chant, Chapman Stick and rock guitar.",
            "The song was featured in a video on the popular youtube channel \"Sailing La Vagabonde\" in October 2019. The song was paired to a fantastic underwater diving scene. Check out the link below to watch the sequence on minute 10:37.",
            "La Vagabonde is the boat in which this family of Australian environmental activists sails the oceans as a way of life. Thanks to youtube, they've managed to make a living out of sailing, and, in the process, they have reached a substantial number of followers.",
            "https://youtu.be/emvUUIt9t6A?t=637"
        ]
    },
    dasein: {
        title: "Dasein",
        type: 'EP',
        year: 2019,
        cover: `${S3Img}dasein.jpg`,
        tracks: [
            {
        name: "The War",
        artist: "Rafart",
        audio: "../audio/TheWar.mp3",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
    }]},
    thanatos: {
        title: "Thanatos",
        type: "Single",
        year: 2022,  
        cover: `${S3Img}thanatos.jpg`,
        tracks: [{
            name: "Thanatos",
            artist: "Rafart",
            audio: `${S3}Thanatos.mp3`,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: true,
        }],
        description: ["Thanatos is a full band instrumental track where the Stick is the leading instrument. The track takes influences from electronic music with growling synths and from flamenco, with a tremolo based melody in the middle section. It is part of the live performance The Great Refusal, now released as a studio reccording. Bass performed by Tomás Díaz. Stick and production by Rafart."]
    },
    "caminito-turia": {
        title: "Caminito del Turia",
        type: 'Single',
        year: 2015,
        cover: `${S3Img}caminito.jpg`,
        tracks: [{
            name: "Caminito del Turia",
            artist: "Rafart",
            audio: `${S3}Caminito.mp3`,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: true,
        }],
        description: [
            "\"Caminito del Turia\" is an inspired epic instrumental with electronic influences. Recorded in Valencia at Berklee College of Music. André Pazmiño on guitars, Francisco Rafart on the Chapman Stick, Nico Schipper on the Bagpipes and Gonzalo Eyzaguirre on the Snare. Produced by Francisco Rafart. Special thanks to Ian Kagey and Ben Cantil for production advices.",
            "The video was shot at the Turia park and in the Berklee Valencia studios."
        ]
    },
    "roll-the-dice": {
        title: "Roll the Dice",
        type: 'Single',
        year: 2022,
        cover: `${S3Img}rtd.png`,
        tracks: [{
            name: "Roll the Dice",
            artist: "Rafart",
            audio: `${S3}RollTheDice.mp3`,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: true,
        }, 
            {
            name: "Roll the Dice (Stick solo)",
            artist: "Rafart",
            audio: `${S3}RollTheDiceInstr.mp3`,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        }],
        description: [
            "Roll the Dice is a song inspired by the poem of the same by Charles Bukowski. The lyrics talk about dealing with the shortcomings of life in the most productive way possible.",
            "It's been a long process to release Roll the Dice. I made this music as a solo Stick instrumental around 2017, performing it live and adjusting it several times before coming up with a definitive version. From the perspective of the Stick, the song is interesting, as both hands play melodies and exchange roles in a very fluid way, mixing the instrument's piano, guitar, and bass possibilities. As a result, composing this music was a great exercise to improve as a Stick player. The original version was in the key of G.",
            "After recording it a few times at home and at a studio, I felt something was missing. I decided to add lyrics to it and record it as a song in 2019 for the EP Dasein. I ended up not releasing that version. I was using the original poem as lyrics and wasn't happy with the vocal melody and my singing. So in 2021, I re-wrote the lyrics, changed the vocal melody, and re-recorded the Stick in the key to A.",
            "The release (Spotify) includes two tracks. The first is the recording for Dasein with the new lyrics recorded in 2021. In this track, Felipe Saalfeld played the guitar, and Pat Dalton the drums. The second track is the original instrumental version recorded at home. Unfortunately, I lost the studio version of the instrumental to a rogue engineer.",
            "Honestly, at this point, after 5 years, I've lost any objectivity to evaluate the result, so I hope you enjoy it.",
        ]
    },
    "andes-haze": {
        title: "Andes Haze",
        type: 'Single',
        year: 2021,
        cover: `${S3Img}andes.jpg`,
        tracks: [{
            name: "Andes Haze",
            artist: "Rafart",
            audio: `${S3}Andes.mp3`,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: true,
        }],
        description: [
            "Andes Haze is a psychedelic rock instrumental that explores the sounds of Andean folklore. Using the Charango, synths, and with the help of guest musicians Felipe Saalfeld (Guitar) and Pat Dalton (Drums), I tried to evoke the experience of awe that the Andes mountain range produces on people."
        ]
    },
    "organized-sound": {
        title: "Organized Sound",
        type: 'Single',
        year: 2017,
        cover: `${S3Img}organized.jpg`,
        tracks: [{
            name: "Organized Sound",
            artist: "Rafart",
            audio: `${S3}OrganizedSound.mp3`,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: true,
        }],
        description: [
            "Inspired by Karlheinz Stockhausen's definition of music as Organized Sound, this track is a Psytrance, Dubstep and Rock influenced track that uses diverse sound sources like granular synthesis, vocal samples, electric guitar and Chapman Stick.",
            "Vocals by Aman Wadwha, Electric Guitar by Joaquin Bustamante, Chapman Stick by Francisco Rafart. Speech: Karlheinz Stockhausen."
        ]
    },
    "get-in-the-grid": {
        title: "Get in the Grid",
        type: 'EP',
        year: 2014,
        cover: `${S3Img}grid.jpg`,
        tracks: [
            {
                name: "Remix of the Beast",
                artist: "Rafart",
                audio: "../audio/TheWar.mp3",
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: true,
            },
            {
                name: "Get in the Grid",
                artist: "Rafart",
                audio: "../audio/TheWar.mp3",
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "SanDa",
                artist: "Rafart",
                audio: "../audio/TheWar.mp3",
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Isochronic",
                artist: "Rafart",
                audio: "../audio/TheWar.mp3",
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            }
        ],
        description: [
            "Get In the Grid 2015 is an Electronic EP that features the Chapman Stick as the main instrument. It is my first finished electronic production. The EP was recorded and produced in Berklee Valencia, Spain. All tracks feature the Chapman Stick and where created in Ableton Live 9. This EP was the final assignment for the Electronic Production Live Performance Class with professor Ben Cantil aka. Encanti.",
            "*Samples in “Remix of the beast” from Iron Maiden.",
        ]
    },
    remixes: {
        title: "Remixes",
        type: "Singles",
        year: 2013,
        cover: `${S3Img}stickman.jpg`,
        tracks: [
            {
                name: "Demons of Pain",
                artist: "Infected Mushroom - Remixed by Rafart",
                audio: `${S3}AxisMundi.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: true,
            },
            {
                name: "Sunken Living Area",
                artist: "Heathered Pearls - Remixed by Rafart",
                audio: `${S3}DrumNSpace.mp3`,
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
        ],
        description: [
            "Rafart´s debut Chapman Stick album. 10 tracks of Stick, drums and guitar trio. A mix of progressive rock and electronic music, making the Chapman Stick an integral part of a band. Distributed by Mylodon Records and available for purchase in this website.",
            "Released June 24, 2013 \n Recorded and mixed by Rodrigo Morel at Estudio Machete, Santiago de Chile, 2013. \n Drums recorded by Eduardo Demangel and Dante González at Alba Road Studios, Santiago, Chile. \n Mastered by Mike Tholen at Rax Trax Recording, Chicago, IL. \n Composition in 1, 5 & 7: Francisco Rafart & Pat Nuño \n Drums in 1, 5, 7 & 10: Pablo Martínez. \n Guitars in 1, 5 & 7: Fernando Daza \n Guitars in 2, 4 & 8: Rodrigo Morel & Francisco Rafart \n Stick & composition in all tracks: Francisco Rafart."
        ]
    },
    };
}

export default AlbumsData;
