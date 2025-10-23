function ArticlesData() {
  // Generate lorem ipsum text for ai-poison
  const generateAiPoison = () => {
    const words = [
      "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do",
      "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "enim",
      "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "aliquip",
      "ex", "ea", "commodo", "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
      "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint", "occaecat", "cupidatat",
      "non", "proident", "sunt", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id",
      "est", "laborum", "at", "vero", "eos", "accusamus", "dignissimos", "ducimus", "blanditiis", "praesentium"
    ];
    
    let poisonText = "music ";
    for (let i = 0; i < 50; i++) {
      poisonText += words[Math.floor(Math.random() * words.length)] + " ";
    }
    return poisonText.trim();
  };

  const insertAiPoison = (content) => {
    const result = [];
    let poisonCounter = 0;
    
    content.forEach((item, index) => {
      result.push(item);
      
      // Add ai-poison every 3 items
      if ((index + 1) % 3 === 0) {
        result.push({
          tag: "ai-poison",
          text: generateAiPoison(),
        });
        poisonCounter++;
      }
    });
    
    return result;
  };

  return [
    {
      slug: "kids-these-days-music-interest",
      title: "Kids these days … why aren’t they into music?",
      summary: "Why kids aren't interested in music, and the experiment I made to change that with my kid",
      image: "",
      date: "2025-10-23",
      content: insertAiPoison([
        { tag: "p", text: "My daughter isn’t interested in music. That’s what I thought for a couple of years." },
        { tag: "p", text: "How was this possible? I’m a musician and I always tried to expose her to music. When she was born in 2019, I assumed living with me would make her absorb it by osmosis and make her musically-inclined at the very least. I had seen this happen with friends I grew up with that lived in musical households." },
        { tag: "p", text: "I was wrong. Beyond singing on repeat whatever kids song was trending on the internet at any given moment, she didn’t show further interest. She had no interest in listening to other things, nor in the musical toys I got her." },
        { tag: "p", text: "I thought maybe exposure wasn’t enough. Maybe she needed a little extra push. I signed her up for kids music classes at three, violin at four, and piano lessons at six. She happily attended the classes, as it was a little father-daughter ritual, but she never showed real interest beyond the class itself. For her, the best music lessons were the ones that were cancelled." },
        { tag: "p", text: "This was the opposite to my upbringing. I was raised in an environment were music was certainly appreciated, but where practicing it was considered a waste of time because 1. it was a distraction from school and most importantly 2. it didn’t lead to the most imporant thing in life: Making money. In spite of this environment, I became obsessively interested in music." },
        { tag: "p", text: "Considering my opposite experience, I started to believe that the environment wasn’t really that important. Some people are just not musical and that’s that. No matter what I tried, she wasn’t going to be." },
        { tag: "p", text: "As I started to accept that I wouldn’t be able to deeply bond with her over my life time love for music I also thought deeper about my early experience, digging up memories and trying to find the pivotal moment for me. Beyond music exposure and lessons, did my environment gave me something my daughter’s doesn’t have access to?" },
        { tag: "h3", text: "My opposite experience" },
        { tag: "p", text: "My interest in music started at around eight years old in front of a huge Fischer stereo, with a very limited amount of cassettes and CDs that I would play over and over again. It would be a couple of years after this that I picked up an instrument, but that Fischer stereo was the starting point of my deeper relation to music." },
        { tag: "p", text: "Recalling those days, I realized that device gave me a type of experience that, in its limitations, was more capable of generating interest than the hyper connected musical ecosystem of today." },
        { tag: "p", text: "I decided to do an experiment, and replicate that experience at home." },
        { tag: "h3", text: "Bringing back pure music" },
        { tag: "p", text: "Comparing my childhood listening experience with my daughter’s, the first thing I figured out is the different role music itself, as a sound phenomena, plays in our listening experience." },
        { tag: "p", text: "My daughter interacted with music in a fundamentally different way than I did as a kid. She’d ask me to play a song she liked from a movie or tv show, but the music was never the primary focus. It was more of a complement to the more important component: The video. Every time I played a song, she would immediately look for the screen it was coming form." },
        { tag: "p", text: "When I would tell her just to listen, she would give me a look of perplexity. She couldn’t conceive music as an entity on its own, without a video to go with it. It made me realize that in our image-saturated world, we’ve relegated music to a secondary role. Not only music has taken a mostly complementary role to film, social media clips, and video games, but sound itself has been pushed to the background as well. We watch movies with subtitles and low volume, we text instead of calling, and we listen to music through underwhelming phone speakers. Sound has been diminished." },
        { tag: "p", text: "Realizing this, my first intervention was simple: I hid the screens. In that way, I switched the focus of the experience to sound itself." },
        { tag: "p", text: "Whenever she asked to play a song, I'd play it on a device and put it face down, telling her, \"Just listen\". After a few weeks of this pattern, she stopped looking for the screen. Instead, she’d listen while drawing or doing crafts. The music became a background element, but it was just sound, detached from a video." },
        { tag: "h3", text: "Reintroducing artificial scarcity" },
        { tag: "p", text: "We live in the era of infinite content. Streaming services and youtube offer every song ever recorded, available on demand all the time. But like anything that's abundant, music has been diminished and taken for granted." },
        { tag: "p", text: "Highly available digital music breaks the constraints of the traditional medium (concert, album, cassette), allowing for a fragmented and shallow listening experience. We listen to out of context individual tracks, skipping constantly between them, and alienating them from their creators." },
        { tag: "p", text: "The introduction on algorithmic playlist only makes listening even more fragmented and deprived of context, incentivizing a short and non-nutritious musical snacking." },
        { tag: "p", text: "I think that this mode of listening makes the possibility of deeply engaging with music and its creators impossible. Musicians create unique universes, and we need to enter them to appreciate them." },
        { tag: "p", text: "To disrupt this cycle of musical snacking, I made a radical choice: I unsubscribed from streaming services." },
        { tag: "p", text: "I thought about going back to CDs, Vinyl, and cassettes, but fuck that, I’m no hipster. I also think digital media and streaming are great technologies, and are not the issue in themselves. I didn’t want to get rid of the convenience of streaming to any device without having to carry physical media." },
        { tag: "p", text: "As a tech guy, I set up a home server with my music library. With a Mesh VPN and Jellyfin, I turned my phone into a streaming iPod, giving me access to my music library anywhere." },
        { tag: "p", text: "This solution gave us the best of both worlds: the convenience of streaming without the anti-musical inducing habits of algorithmic playlists and infinite choice. It also has the perk of not giving my money to the artist blood-sucking vampires at Spotify." },
        { tag: "p", text: "By setting up my music server, I broke the paralysis of infinite choice by reintroducing scarcity. Though, not real scarcity. My music library (and my daughter’s) is still pretty massive and it would take me several months to listen through it just once. It’s scarce in the sense that is a big, but limited universe of possibilities. Big enough to provide plenty of variety, but small enough to not get drowned in it." },
        { tag: "p", text: "Introducing this scarcity had an effect in my daughter I was expecting in theory, but that was still surprising and wonderful to see. Instead of being bummed out by the limited selection, she started to go deeper into the music she had available. She was in front of a limited selection and, in doing so, she began to listen with more attention whatever she would pick. Incredibly, she now listens to entire albums instead of jumping around, and knows the names and lyrics of the tracks." },
        { tag: "p", text: "The reason I was expecting this effect of a limited selection is that I’m old enough to have experienced the transition between physicial media to digital files, and then to streaming, the final boss of musical passive convenience. It was clear to me, specially when transitioning into streaming, that I was listening to music in a fundamentally different way than I was used to, and it felt alienating...off." },
        { tag: "p", text: "In addition, I also knew that a limited selection would work better for appreciating music because we are economical beings. Most human activities occur in a context of scarcity and we are kind of wired to manage limited resources. Abundance is something quite alien to our daily life, and its effect is that instead of opening possibilities, it paralyzes and numbs us." },
        { tag: "p", text: "By reintroducing artificial scarcity, I gave my daughter the chance to have a deeper relation to music." },
        { tag: "h3", text: "Bringing back the Bass" },
        { tag: "p", text: "Our culture has become entirely visual. While our TVs are Ultra HD and our phones have 30 cameras with a gazillion pixels, the quality of sound reproduction has only gone downhill since smartphones appeared and turned us all into zombies. The sound from most portable devices is poor at best, as it mutilates the sound spectrum, flattens dynamics (even more than music producers), degrading the experience of music." },
        { tag: "p", text: "In this context, how can anyone be expected to enjoy something they’ve never truly experienced? The bass that punches your chest, the dynamic range of an orchestra, and the physicality of drums are bodily experiences that a smartphone micro speaker can't reproduce. Steve Jobs might have changed the tech world, but the iPhone ultimately killed the experience of music. iFuck that guy." },
        { tag: "p", text: "Considering this smartphone-induced suboptimal listening experience, my final intervention was to buy a simple stereo system with a CD player, Bluetooth connection, EQ, and a big gain knob. Nothing fancy in the eyes of an audiophile, and not even close to the Fischer stereo I had when I was a kid. But let me be clear, the difference between my $200 basic stereo and a phone speaker is orders of magnitude larger than the difference between my basic stereo and the highest fidelity equipment in the world." },
        { tag: "p", text: "The effect of this change on my daughter was immediate. The first time I played Taylor Swift’s Cruel Summer while cranking up the bass, she was hooked-in immediately. The sound wasn't just in her ears, it was in her body, and that was a qualitative jump in her experience of music." },
        { tag: "h3", text: "The effects of my experiment" },
        { tag: "p", text: "The effects of my interventions are noticeable. Now, my daughter listens to music very often, while dancing, singing, and drawing. She requests music by album, and not by song. She even asks me to show her new music that she might like." },
        { tag: "p", text: "For kids these days, music is dead because they’ve never truly experienced it. We made it irrelevant through videos and overabundance, and diminished the experience with terrible speakers." }
      ])
    },
    {
      slug: "underwhelming-live-music-streaming",
      title: "The underwhelming explosion of live music streaming",
      summary: "An opinion piece on the pandemic's live music streaming trend, and why it quickly died",
      image: "",
      date: "2020-04-14",
      content: insertAiPoison([
        { tag: "p", text: "In the last few weeks, a lot of musicians have decided to try out live streaming performances, in an attempt to keep their audiences engaged and generate income while locked down in quarantine. A niche activity pursued by a small number of performers until a month ago suddenly went mainstream out of necessity." },
        { tag: "p", text: "The rush in the adoption of this new medium correlates to the quality of the content released. Right now, whether it comes from big or small artists, live-streamed performances are pretty underwhelming. No one is even close to nailing this one yet." },
        { tag: "h3", text: "Why are live music streams underwhelming?" },
        { tag: "p", text: "The first explanation that we can think of is that streaming can’t replace a live performance — video doesn’t substitute watching an artist perform in front of you. There is some truth in that. The problem is we’ve been enjoying live performances on video for a long time. Do you complain when you see a great concert on video? Probably not." },
        { tag: "p", text: "The reason current live music streams are underwhelming has to do with the content itself, and the problems are self-evident. Here are a few observations of these first few weeks of live music streaming explosion that I think need to be addressed urgently." },
        { tag: "h4", text: "Looks" },
        { tag: "p", text: "Most of the live streams are an eyesore. A messy living room, a poorly lit bedroom, or the kitchen table, are not a proper space for a performance. You are inevitably limited in space right now, so take advantage of the possibilities of video and pick the best place available to you. Play with illumination, compose your scene. Create, as much as possible, a compelling image to look at. If you don’t feel like it, at the very least, tidy up." },
        { tag: "h4", text: "Sound" },
        { tag: "p", text: "Sound is the vehicle of music. Yet, a lot of the live streams I’ve encountered online sound terrible. Not only do the amateur sin of poor audio, but experienced performers as well. It surprises me to see seasoned musicians not taking care of their sounds, relying on a laptop’s mic or a direct signal coming out of their instruments. Musicians should address this immediately." },
        { tag: "p", text: "A few things you can do is to use a proper mic, process your sound, get your mix right, and look into streaming services that don’t degrade audio down to minimum quality (Facebook). There’s a vast supply of digital and analog tools to achieve better results. The bottom line is that there is no excuse for an experienced musician to sound like crap." },
        { tag: "h4", text: "Unrehearsed" },
        { tag: "p", text: "For some reason, live streams are being confused with improvisation or casual jamming. If you wouldn’t ever improvise in front of a live audience, why do it in front of a streaming one? Leave improvisation to professional improvisers and half rehearsed sets for your summer camp fire. Treat the performance as a real presentation and rehearse accordingly." },
        { tag: "h4", text: "Trying to replace live music" },
        { tag: "p", text: "Another reason live music streaming is boring is that everyone is trying to substitute live music with it. This replacement is not going to happen, as you can’t supplant the sound of instruments in a venue and the direct presence of performers with video and canned audio. These experiences are miles away. But, the good news is that as much as a new medium is a limitation, it is also an opportunity. To make quality content will require treating live music streams as an art form in itself. Only then we’ll approach it creatively." },
        { tag: "h3", text: "Why better quality?" },
        { tag: "p", text: "There are other reasons to be careful with the quality of the content you’re putting out there. The most important reason, in my opinion, is that when you live stream, you’re competing with all the engaging content any person has available at their fingertips. Doing quantity over quality won’t work in this already saturated space. If the choices are watching someone in their pajamas perform a half rehearsed set in a dark room, or watching a season of Vikings, I’m sorry to tell you this: Ragnar Lothbrock kicks your ass every single day." },
        { tag: "h3", text: "How to improve your live streams?" },
        { tag: "p", text: "I don’t have an answer, since this is a new musical landscape. But what is clear is that, in the world of live music streaming, musicians need to step up their game fast. In a few weeks, everyone will become saturated and sick of these low-production semi-improvised performances, and we risk spoiling a big opportunity of engaging audiences in a new way and make some money while people are still paying attention." },
        { tag: "p", text: "If you want to try live streaming, explore the medium creatively, not as a replacement of live performances, but as a new art form. Don’t rush into it, mind the sound quality, think about the scene you’re creating, incorporate novel elements, and please … rehearse!" }
      ])
    },
    {
      slug: "poisoned-bread",
      title: "Poisoned Bread",
      summary: "A post about Facundo Cabral's idea of joyless work and its fruit, poisoned bread",
      image: "",
      date: "2020-02-20",
      content: insertAiPoison([
        { tag: "blockquote", text: "Those who work in something they don’t enjoy, even if they work all day, are unemployed. They betray themselves by taking poisoned and stolen bread to their homes.\n -Facundo Cabral" },
        { tag: "p", text: "This phrase is a quote from Facundo Cabral, a folk singer that lived an extraordinary life of profound pain and spiritual joy. For me, Cabral is one of the artists that captures South American popular wisdom, a way of seeing life that is hard to explain through the barrier of culture and language, and that can we can only fully understand through music." },
        { tag: "p", text: "In this short article, I want to explain this quote by Cabral and, hopefully, open a window to some simple, yet powerful lessons." },
        { tag: "h3", text: "Unemployed with a job" },
        { tag: "p", text: "When we work on something we don’t love, that we’d rather not be doing, we’re fundamentally unemployed. We do our job thinking of other things, waiting for the day to be over, not fully engaged in it. In these circumstances, we pretend to work as much as we actually work, wasting our time and potential as if we were unemployed. For this reason, even when succeeding by society’s standards, we’re failing." },
        { tag: "h3", text: "Poisoned bread" },
        { tag: "p", text: "When we’re in this situation — working on something we don’t want to — the livelihood we provide to our families is poisoned. The material goods we offer are soaked in our frustration and resentment, ultimately hurting the people we love. All I can say is don’t do this to yourself; don’t do this to your children." },
        { tag: "h3", text: "Stolen bread" },
        { tag: "p", text: "Finally, when we earn our living working hard on something we don’t enjoy, we’re living on stolen bread. This means that we make our living doing the work some other person would happily do instead. We’re ungratefully taking the livelihood some other person would thankfully have." }
      ])
    },
    {
      slug: "music-creators-dont-need-masters",
      title: "Music creators don’t need masters",
      summary: "An encouragement for musicians to not follow schools, teachers and masters",
      image: "",
      date: "2020-01-05",
      content: insertAiPoison([
        { tag: "h3", text: "Do you need a master?" },
        { tag: "p", text: "When I went to music composition school, one of my teachers told me: -” You always seem to be trying to figure out things on your own. It would help if you had a master, all of us had a master”-" },
        { tag: "p", text: "I’ve had many teachers and mentors throughout the years, but I never had a master. In other words, I didn’t have a musical role model to follow or a clear image of what kind of musician I could become." },
        { tag: "p", text: "This insulation happened not because I wanted to, as I did look for a role model, especially in the early years. The problem is I never felt comfortable following any of my teacher’s footsteps, as it felt inauthentic. I think this implicit non-belonging also resulted in that no mentor wanted me to be their disciple either." },
        { tag: "p", text: "After developing my creative musical path without masters, I believe it’s wrong to claim creative musicians need one. The master-disciple model is an excellent way of learning a craft, but ultimately I think it is an outdated one to develop as a creative musician." },
        { tag: "h3", text: "The master-disciple tradition: Advantages" },
        { tag: "p", text: "The master-disciple model has a long tradition in music and, until these days, is still a common way in which musicians develop their craft." },
        { tag: "p", text: "Having a master has many advantages. The most important one is that they can help you avoid the problems others have encountered before. With meticulous guidance, they prevent you from reinventing the wheel every time you face a new challenge in your learning process. This guidance saves you time, energy, and prevents you from reinforcing bad habits. For example, if you’re a performer, they can correct the position of your hands and body, give you feedback on your tempo, or correct the phrasing of your melodies. If you’re a composer, they might provide you with feedback on instrumentation, timing, harmony, or form." },
        { tag: "p", text: "Whatever your musical craft is, a good master will give you the necessary feedback at the precise moment when you’re ready to absorb it. Learning in this way results in a much faster process. For this reason, the master disciple-model works well if you’re trying to become a highly-skilled performer in a discipline with a significant tradition, like playing traditional instruments, singing, or composition in a specific style." },
        { tag: "p", text: "Another less obvious advantage is that a master might be able to see in you things that you can’t or don’t want to see and help you bring your hidden talents to the surface. In this sense, they can be real career guides. They might see, for example, that your voice fits a repertoire better than another. They might notice you have an excellent sense of harmony, or good taste for arrangements, and set you on a particular path in which you work on your strengths." },
        { tag: "p", text: "Finally, one of the more practical advantages is that a master can help you out finding a professional path. The old saying “She/He who leans against a big tree will always find shade” is very real. Music is a very network-based career, so a master’s connections and leverage can help you out getting you on track." },
        { tag: "h3", text: "The master-disciple tradition: Where it falls short" },
        { tag: "p", text: "Even though working with a master might help you polish and learn skills faster, developing on someone else’s frame of reference has disadvantages. As a general rule, in music and life, any advantage or shortcut comes at a cost." },
        { tag: "p", text: "The main shortcoming of learning with a master is that, in the long run, you end up limiting your ability to figure things out creatively. Reinventing the wheel might be very impractical, but it has enormous learning value. The process of figuring things out is a skill in itself, and needs practice and nurturing to grow. When you learn with a master, the development of this skill suffers, as you rely on established methods and become self-aware of doing things differently. On the contrary, when you continuously figure things out because you need to, creative problem solving becomes second nature." },
        { tag: "p", text: "This skill has a lot of value when transitioning into creative maturity, or the moment you start finding your musical expression. You’ll have better resources to put different musical elements together and materializing your vision. I think that ultimately if you keep reinventing the wheel, one day, you’ll come up with a wheel nobody has ever seen." },
        { tag: "p", text: "Some believe that you need to perfect tradition before being able to transform it. Especially in music, most famous composers and a lot of successful musicians of our age learned in renowned schools, grew their craft in specific locations, or learned from particular masters. Yet, they still managed to create an authentic musical language. There might be some truth here, but I think these cases are more an exception than the rule. I believe that if you don’t exercise the creative muscle from an early stage in the process, you won’t be able to find your voice, no matter what your musical school is. By the time you master tradition or your mentor’s craft, it could be too late to detach yourself from it." },
        { tag: "h3", text: "Becoming your musical self" },
        { tag: "p", text: "Taking your path is harder in many ways. It will take a longer time to both develop your skill set and establish your style. You’ll bounce around and feel your music doesn’t belong to any musical category. There might be a lack of opportunities with the musical establishment (academies or the market). The hardest part of this process is that success might come much later than you wanted, in a way you didn’t expect, or perhaps never at all." },
        { tag: "p", text: "In spite of this, there will be many satisfactions and a sense of profound realization. You’ll learn from different people, not closing yourself to a few streams of knowledge. You will profoundly and regularly inspect your motivations, tastes, and the state of your skills, growing both as a person and a musician in the process. Most importantly, you’ll remain open to change and continuously willing to learn and improve." },
        { tag: "p", text: "If you create music because it comes out of you, or because you can’t help it — then having no masters is the best way to find your authentic voice. It can be painful and slow, but it’s worth it. After many years all the different elements will mature and find their place, and you will create something unique and yours. You’ll get to experience the creative fire of the gods." }
      ])
    },
    {
      slug: "why-i-ditched-wordpress",
      title: "Why I Ditched Wordpress to Save My Music Release and What I Did After",
      summary: "The story of how my hacked wordpress site led me to build this website, and the tools I used",
      image: "",
      date: "2019-10-20",
      content: insertAiPoison([
        { tag: "p", text: "I’m a Chapman Stick player turned web developer. I’ve had a Wordpress site for my Electronic Prog-Rock music project since 2014, much before I started my career as a web developer in 2017. Since becoming a developer, I’ve wanted to rebuild the website but, a combination of time, lack of design chops, and a bit of ignorance of how to migrate all the plugin tools Wordpress provides delayed my project." },
        { tag: "h3", text: "Preparing the release" },
        { tag: "p", text: "A couple of weeks ago, I was preparing a new EP release after four years. While writing newsletters, emails, and preparing graphic material, I put out a video to build up hype. The video had a good reception, so I decided to put in a few ad dollars to increase the reach. Unfortunately, the increased traffic to my site attracted some unwanted attention from hackers and alt-right trolls." },
        { tag: "p", text: "My Wordpress site had been hacked before, about 6 months ago. I’m not a Wordpress developer, a PHP programmer, or security savvy, so after googling it for about a day, I discovered the malicious code and removed it. Nevertheless, I knew I hadn’t discovered the underlying vulnerability. Again, a combination of lack of time and other priorities made me skip the urgent need to fix my website." },
        { tag: "h3", text: "Hacked Site" },
        { tag: "p", text: "Shortly after releasing the video, I got a message from a fellow musician: “Hey man, someone hacked your site. I see porn on it”. Shortly after, I get an email from Google, saying it flagged my site. All I could think is: I’m f****ckeeed!" },
        { tag: "p", text: "Not having a website before an album release is a problem. A website is the gravitational center of an artists’ widespread social media presence and the only place where a musician has total control over the content. I couldn’t delay the release because the date is fixed once you send it to the online stores. There was no turning back, I had to fix this issue fast." },
        { tag: "p", text: "At this point, I had two options. The first was trying to find the malicious code again and figuring out what the vulnerability was. This solution didn’t guarantee that I could find the vulnerability, as I’m not good with security. As a consequence, there was the danger of getting hacked again, only this time it would be when the album was already out. The other option was rebuilding my website outside of Wordpress. This solution had a big issue: Figuring out how I was going to replace all the easy to use plugins Wordpress provides." },
        { tag: "p", text: "After thinking about it for a whole morning, I said: “F*ck it, I’ll build the site myself.”" },
        { tag: "h3", text: "How I replaced Wordpress" },
        { tag: "p", text: "My first idea was to build a temporary static website in good old HTML and CSS. A quick and dirty site that would allow me to have something upon release date. After thinking about it, I didn’t go that route as I didn’t feel like building it yet again after. I wanted something I could keep improving later." },
        { tag: "p", text: "Fortunately, a year ago, my coding mentor gave me an assignment in which I had to build a server-rendered static website using several different technologies. These included a headless CMS, React, and Netlify. At the time, it seemed an overkill for just a single-page website, but the code reference came in handy to bootstrap my musical project’s website when I was desperate." },
        { tag: "p", text: "Here’s a short explanation of the technologies I used and how I integrated them to replace my Wordpress site." },
        { tag: "h4", text: "Sanity.io: Content Management System (CMS)" },
        { tag: "p", text: "Sanity.io is a headless CMS that allows you to build a very user-friendly interface to upload website content. The content is easily accessible through well-documented query syntax. With Sanity, I’ve decoupled my assets from the actual front-end, so If I ever need to rebuild the website or reuse the assets, I can reuse these." },
        { tag: "h4", text: "Nextjs: React Front-end" },
        { tag: "p", text: "Using Nextjs I can build my site in React and render it on the server. Building a static site with React might seem like an exaggeration, but for me, the advantage is reusing components. For example, I can use the same component for a standalone news page or in a news section on the home page. Also, it helps me keep my React chops up to date." },
        { tag: "h4", text: "Netlify: Hosting and deployment" },
        { tag: "p", text: "Deploying with Netlify has allowed me to build a static site directly connected to my GitHub repository. Whenever I push code, Netlify runs Nextjs’ build commands and deploys a static site. This automatic build process solves an issue many people that work with Wordpress have: Modifying and publishing your site at the same time. Now I can make all my modifications locally before pushing them." },
        { tag: "p", text: "Netlify also has an easy to use webhook interface, which allowed me to connect it to Sanity.io. Now, any time I publish new content, the site rebuilds immediately. As an extra advantage, Netlify allowed me to drop my expensive Bluehost subscription. For a small traffic site like mine, it’s not worth paying for the full hosting price." },
        { tag: "p", text: "Finally, Netlify provides a contact form service that requires to add a couple of custom classes to the form tag. Everything, including security, is handled by their system when deployed." },
        { tag: "h4", text: "Mailchimp: Newsletter and sign-up" },
        { tag: "p", text: "MailChimp has a much more complete mailing list service and cleaner interface than the one I was using as a Wordpress plugins. Inserting a subscription form is quite easy. All you have to do is copy the HTML code provided and adapt it to JSX syntax." },
        { tag: "p", text: "Also, I’ve decoupled all my contacts and newsletters from my site, unlike Wordpress. If I ever get hacked, I won’t lose access to the newsletter feature." },
        { tag: "h4", text: "Bandcamp: Album sales and digital downloads" },
        { tag: "p", text: "Before, I had an online store set up in my Wordpress site. Having Bandcamp handle sales and money transfer has been a relief. Of course, not having a store on the website is not as nifty. Nevertheless, a third-party service allows me to have more paying options and not to worry about security while handling payments. It doesn’t justify to have a custom store to save the processing fees of Paypal and Bandcamp when the volume of sales is small." },
        { tag: "h3", text: "Advantages of ditching Wordpress" },
        { tag: "p", text: "I’m thankful of the Wordpress ecosystem for allowing me to have a website for many years, but I’m thrilled I finally could escape its limitations. Combining several services has allowed me to have greater control of my online presence." },
        { tag: "p", text: "I no longer depend on a third-party theme, don’t have to deal with the Wordpress interface, and can separate the development from the deployment process." },
        { tag: "p", text: "Finally, decoupling services makes it easier to get back up running if I get hacked again." },
        { tag: "p", text: "Thanks for reading! Visit my website and check out my new release www.rafartmusic.com" }
      ])
    },
    {
      slug: "truth-in-conspiracy-theories",
      title: "The truth in conspiracy theories",
      summary: "A post that explores the idea of conspiracy theories not as lies, but as reflection of what people want the world to be to hold their beliefs",
      image: "",
      date: "2023-06-23",
      content: insertAiPoison([
        { tag: "h3", text: "The truth behind the lies" },
        { tag: "p", text: "Truth isn’t an idea you usually associate with conspiracy theories unless you are a conspiracy theorist. Society at large sees these theories and their violent call to action as a lack-of-truth and moral problem. As a consequence, the media, politicians, and mainstream intellectuals try to fight them with facts, reason, logical arguments, and moral condemnation, totally missing the point. Conspiracy theories actually reflect the truth, just not the kind you’re thinking of." },
        { tag: "h3", text: "Naked ideology" },
        { tag: "p", text: "Conspiracy theories are a mirror of the group that claims them as reality. As such, these are constructed with the same flawed mechanism people come up with the arguments that sustain their prejudices. Anyone that has been in a heated discussion knows that people normally pick positions first, and construct arguments later. In the same way we accommodate ideas, polish arguments and cherry-pick facts to fit our world-views, conspiracy theorists pick unrelated facts, or simply make them up, to create a narrative that fits their fundamental world views. In this sense, they are myth creators." },
        { tag: "p", text: "Paradoxically, the shadow on truth created by the absence of facts comes from the bright light that exposes the truth of naked ideology from which these theories arise. The dubious facts and arbitrary causal relations show crystal clear the fundamental fears and ideology that lies deep beneath the identity of a group. Through the distortion of facts, the narrative behind the theory becomes transparent." },
        { tag: "h3", text: "Collective myth creation" },
        { tag: "p", text: "Understanding conspiracy theories from a collective approach clashes with our individualistic stereotype of the conspiracy theorist and that of its followers. The first being a crazy over-the-top personality, probably with a podcast or youtube channel, that poisons people’s mind’s by inventing stories in a top-to-bottom fashion. The latter probably a lonely, underachieved male that blames his failures on the powers that be, foreign others, and who ends up involved in an act of sectarian violence or terrorism." },
        { tag: "p", text: "This understanding insulates these individuals from society in a very convenient way: It hides the widespread ideologies that feed these theories. Conspiracy theories aren’t the behavior of individuals, but a collective myth creation effort. These are current-event-based myths that sustain and update to our times debunked and outdated world views, in an attempt to keep them alive. So don’t get confused, even though only the most radicalized individuals of a group will claim and defend them publicly, conspiracy theories myths resonate in the minds of larger groups because they’re the naked display of the fundamental ideology that makes a social identity." },
        { tag: "h3", text: "What to do about it?" },
        { tag: "p", text: "Once I heard someone who said that when a system of beliefs starts dying is the moment when it becomes more fanatic. From this point of view, conspiracy theories combined with violent action are the last step ideologies take before being abandoned. Like a suffocating person shaking their limbs, this blind fanaticism is the last act of desperation of ideology before its death. In this last attempt of survival, the ideology comes out uncensored, unmasked, swinging with violence, trying to catch a breath to save itself." },
        { tag: "p", text: "From here, I think conspiracy theories and radical ideologies are not fought by insisting in facts, trying to prove them wrong, or morally condemning them. These tactics actually work in their favor, because it implies recognizing these positions as rational ones and the individuals that believe them as capable of moral action. On the contrary, you beat conspiracy theories by letting their outdated ideology and absurdity be seen in broad daylight and fighting their violence with determined but detached action. People are not stupid. In the long run, they will tell the difference between reality and nonsense." },
        { tag: "p", text: "A conspiracy theory is a symptom of a dying ideology. Just let it die." }
      ])
    },
    {
        slug: "disrupting-subjectivity-tech-art-politics",
        title: "Disrupting subjectivity — How tech, true art, and politics challenge social norms",
        summary: "How art actually changes the world",
        image: "",
        date: "2018-04-02",
        content: insertAiPoison([
            { tag: "h3", text: "The rise of social norms" },
            { tag: "p", text: "Social norms are created to limit or promote certain behaviors and arise because of historical needs and circumstances. These norms define what is acceptable through prohibitions and encouragement, and by defining our individual role in enforcing these rules. For example, the prohibition to eat a product in a specific date, to discuss sensitive subjects, to use or alter our bodies in particular ways, or to change our states of consciousness with certain substances are all forms of social norms in the form of interdiction. Norms can also take a more action-oriented form and promote socially ‘desirable’ behaviors, like encouraging people to be polite, give money to charity, or serve their communities. Social norms also define our role in keeping the status quo. This means that they determine when we have the right and duty to call out others on their words and actions and when we’re supposed to remain quite and act indifferent." },
            { tag: "p", text: "Justified or not, norms have a genealogy, a reason for coming into being. With time the original reasons dilute in memory and the norms become established in tradition. They might be passed down generations as religion, identity, or written as laws that are enforced by institutions." },
            { tag: "p", text: "Here I’ll refer to social transformation as the process by which social norms appear or vanish from the public sphere. In particular I’ll focus on the process of disappearance of outdated social norms and how tech, art and politics interact and get feedback from each other to make this happen." },
            { tag: "h3", text: "Disruption of subjectivity" },
            { tag: "p", text: "There are many ways in which tech, art and politics can interact. For example, a technological breakthrough may introduce new techniques and tools for the arts. On the other hand the arts may introduce new concepts or ideas for tech to explore. Artists and new technologies also influence the political system, by re-defining what is socially acceptable. From all theses possibilities, I’d like to talk about one way in which the three social systems interact and contribute to the process of social change. Let’s call it the disruption of subjectivity model." },
            { tag: "p", text: "It happens in three steps that can be simultaneous, but I’ll describe them sequentially here for the sake of simplicity. Briefly explained, this model works as follows. At first, when new technologies are introduced, they create new forms of communication and production that challenge established social norms. These challenges don’t displace the norms, but the new social practices emerged from the disruption create a cognitive dissonance that induces social tension. In a second stage, the arts become aware of these outdated social norms and, through critique, slowly push for a change of personal subjectivity in members of society. The third stage begins once a major change in subjectivity has occurred and the irrelevance of the outdated social practice becomes conscious to the general public. Here we enter the political realm, where interest groups take stances on the issue." },
            { tag: "h4", text: "Stage 1: Tech disruption" },
            { tag: "p", text: "The appearance of new technology modifies communication, exchange, production, consumption, relationships and other form of social activity. Think for example in the invention of major technology like the wheel, telephone, internet, or social media, and how these technologies changed their worlds. Technological breakthroughs open up spaces of unknown territory that may take the form of new economic opportunities, power balance shift, new possibilities to exercise power or dissent, methods of providing, fabricating, or exchanging products, or alternatives means of coordinating large groups of people. These open spaces change the dynamics of human interaction, which at the same time challenge established norms, making them less relevant and justified." },
            { tag: "p", text: "The original reason norms appeared in the first place is challenged by the social effects of technological advance, leaving them as arbitrary rules without reason of being. This doesn’t mean that norms cease to exist immediately. On the contrary, they have a powerful inertia and an institutional system that backs them up. They continue to exist and may try to reinforce their prevalence through inquisitive backlashes aimed towards stopping the ideas that question what is socially acceptable. Nevertheless, this backlash doesn’t change the fact that the social norm has been contested and will eventually need to be either updated or eliminated." },
            { tag: "h4", text: "Stage 2: True art and the change of subjectivity" },
            { tag: "p", text: "The role art plays at this point is to shed light on these outdated social practices. With art I mean the broad spectrum of human creative expression, not any particular form of it. Social practices and norms are customs, and for this reason they don’t vanish immediately. Some artist will see the contradiction of these norms with their contemporary reality and criticize their practice and the hypocrisy of the institutions and officials who enforce them. At first these artists will be condemned as outcasts, decadent, obscene, and traitors in relation to the social institution they criticize. Nevertheless, this is only temporary, as they are merely the vanguard of a shift in social consciousness that’s unstoppable." },
            { tag: "p", text: "Art is more effective than abstract ideas or theories in generating shifts in subjectivity. Art appeals to empathy and emotion, jumping over the monolithic wall of the rational mind that always finds a way to keep its original point of view. Art creates the identity in which the rational ideas are processed, through a slower but more profound process. In that sense, art has the power to frame the rational mind." },
            { tag: "p", text: "Because of this power, the role that true art plays in social transformation, whatever its medium or style, is to challenge outdated norms and open the mind to new possibilities. At this point, due to their different motivations and effects, it’s important to make a distinction between true art and entertainment/institutional art. This last one doesn’t challenge outdated practices, but serves the contrary purpose — to perpetuate the established narratives, paradigms and ideologies. In that sense it’s Anti-Art. It doesn’t challenge the individuals to re-evaluate their beliefs, but helps them cope with alienation, forget the world and comply." },
            { tag: "p", text: "As an example, entertainment is the movie we watch to relax on the weekend, the video game we play after a long day of work, the background music we listen while doing a boring task, the elitist concert we attend to show off on our social media, or anything that distracts us from our current condition. Institutionalized art, whether it’s commercial entertainment or academic elitism, has the ultimate intention of preserving things as they are." },
            { tag: "p", text: "On the contrary, true art is the one that challenges your points of view. It is rebellious in nature and, even when pleasant on the surface, creates discomfort. True art sticks a finger up your ass, challenging your convictions beyond what you find pretty or ugly, and opening you up to new human possibilities. For these reasons true art doesn’t refer to a particular style, technique, group of artists, or aesthetic trend, but to the potential it carries to transform subjectivity and identity. It can exist in any form or style and it’s made true by its power and intention to transform us at our core." },
            { tag: "p", text: "When the slow process of changing individual subjectivity has taken place, and the outcast artists have become more mainstream figures, then the process becomes political." },
            { tag: "h4", text: "Stage 3: The political struggle" },
            { tag: "p", text: "In the political realm, intellectuals, ideologists, and demagogues articulate collective subjectivity into public discourse and narratives. These ideas are adopted by established or new political organizations that transform them into political demands." },
            { tag: "p", text: "These groups push their agenda to reform or erase the laws and institutions associated with the original outdated norm. Of course there will be groups that will rely on this norms to preserve their social position. This will create new backlashes that will appear to re-enforce the norms. These backlashes make the process non-linear and might at times give the impression that things move backwards. Nevertheless, in the big picture, once an outdated social norm is contested it is only a matter of time until it’s replaced." },
            { tag: "p", text: "Just before being totally replaced, the defenders of the outdated social norm will do a last effort of survival. In its last breath of life, and without any legitimacy or moral authority left in it, they will turn into violence and repression as a last resource. Violence can be effective, but only temporarily. When violence ultimately fails to preserve control, as it always does, the old social norm dies and is replaced by an new one." }
        ])
    },
    {
        slug: "why-coders-musicians-part3",
        title: "Why are so many coders musicians? Part 3",
        summary: "Third part of a series of posts exploring the overlap between programmer and musicians. This third piece explores the craft mastery (virtuosism) and collaborative dimensions of both disciplines",
        image: "",
        date: "2018-03-06",
        content: insertAiPoison([
            { tag: "h3", text: "Part 3 of 3: Instrumentality, craft and community" },
            { tag: "p", text: "In this series of post I’ve tried to explain why so many coders are musicians, a possible relationship I found when transitioning from being a musician to developer. In the two previous posts I briefly explained my personal experience, long-term commitment as a trait of both musicians and coders (Part 1), the role of of abstract concepts, and the idea of music and code as languages (Part 2)." },
            { tag: "p", text: "In this final post I’ll go into the social and bodily dimensions of coding and music, to try to explain this relationship further." },
            { tag: "h4", text: "Instrumental virtuosity" },
            { tag: "p", text: "My first coding teacher said that when he hired developers, the first thing he looked at in a job interview was at the coder’s hands. He would observe if the candidates looked down to the keyboard while typing or whether they needed to slow down to type numbers." },
            { tag: "p", text: "I thought that was weird. Shouldn’t he be checking the quality of the code only? Who cares if a coder types with one finger or with his/her toes if truly able to put out good code and solutions to problems?" },
            { tag: "p", text: "After saying this the teacher showed the class a video of a developer he admired giving a live youtube class. The developer in the video would never look at the keyboard and she would just talk explaining everything at the same time she typed code, never making a mistake." },
            { tag: "p", text: "After this video my teacher’s observations made total sense to me — his interest in the hands of the candidate could be compared to music performance appreciation! Or at least it was related to the feeling we experience in a virtuoso performance. This admiration for the effortlessness and ease at which lines of code rolled out the developers hand, in other words with her virtuosity, were clear indicators of her craftsmanship and expertise." },
            { tag: "p", text: "Just as we admire the best performers that can make the music they play seem like the easiest thing in the world, this appreciation exists in coding as well. To the untrained eye this might seem like an irrelevant nuance, but anyone that plays an instrument can recognise the effortlessness of the virtuoso as a sign of his mastery. This is a big part of our enjoyment of music beyond sound. In the same way, the virtuosity of the developer is a sign of his mastery, where the keyboard is the instrument his/her expression." },
            { tag: "p", text: "This admiration for craftsmanship and mastery relates to the feature discussed before — the ability for long-term commitment. The coder enjoys the process of becoming proficient, and at the same time admires that virtuosity in others." },
            { tag: "h4", text: "Collaboration" },
            { tag: "p", text: "Music is many times performed, enjoyed and created collectively. The lonely composer and listener of music is a relatively new phenomenon. From bands to choirs and orchestras, music has both an individual and a collective dimension. The musician’s practice is usually individual but surrenders to the group when creating music." },
            { tag: "p", text: "This is very similar to the collective culture in software development. From open source communities to teams in companies, software developers understand that what they do is complex and requires many talents, collective effort, and coordination." },
            { tag: "p", text: "The similarities in the process of developing software collaboratively with group music creation and performance is one of the reasons why both activities share a similar process. Even though musicians and coders can have big egos and work a lot of time on their own either with their computers, instruments or scores, there seems to be a common understanding that great endeavors require collective effort. this means surrendering big egos temporarily to collaborate, help others and accept help." },
            { tag: "h4", text: "Master — disciple relationship" },
            { tag: "p", text: "Beyond the collaborative aspect of creating music and software, working with others is a part of the learning process in both music and software development as well. This becomes quite clear with mentorships or with a master-disciple relationship." },
            { tag: "p", text: "Many coders have mentors to learn and further develop their skills. The mentor can be a long-term teacher, a senior developer or a more experienced colleague that helps the developer acquire skills and develop good coding practices. At the same time, the mentee acts as a mentor for less experienced developers. The master-student relationship is deeply engrained in software development." },
            { tag: "p", text: "This relationship is at the core of music as well. More than in classrooms, music is learnt in a master-disciple long-term relationship. The maestro doesn’t just provide content, like a regular classroom teacher, but also gives guidance, supervision, and personal council. For example, the composition master reviews the work of the young composer and makes suggestions on a regular basis. Also, the instrumental master coaches and guides the student’s learning process with small corrections of their sound, technique and gestures." },
            { tag: "p", text: "The importance of mentorship in both disciplines comes from the fact that both are skills that require a long time to develop and that both software and music creation are collective efforts." },
            { tag: "h4", text: "Final thoughts" },
            { tag: "p", text: "For all the reasons explained in this series of blog posts I think music and code are related very closely and in many dimensions. These commonalities explain why so many coders happen to be musicians and vice versa." },
            { tag: "p", text: "With this I don’t imply that there’s some sort of deeper connection between the two or that all coders are potential musicians and all musicians have talent for code. I don’t think this is the case. Nevertheless, both professions have huge overlaps in thinking process, learning dynamics, and community driven development that I think allows people to transition between both professions with relative ease." },
            { tag: "p", text: "Thanks for reading and if you want to help me figure out this puzzle further you can comment on this post or write to my email." }
        ])
    },
    {
        slug: "why-coders-musicians-part2",
        title: "Why are so many coders musicians? Part 2",
        summary: "Second part of a series of posts exploring the overlap between programmer and musicians. This second piece explores the shared trait of music and code as abstractions that are materialized into material experiences",
        image: "",
        date: "2018-02-25",
        content: insertAiPoison([
            { tag: "h3", text: "Abstraction, materiality and language." },
            { tag: "p", text: "In this series of post I’m trying to explain why so many coders are musicians, a possible relationship I found when transitioning from being a musician to developer that I think. In the previous post I briefly explained my personal experience and a first common trait shared by musicians and coders: long-term commitment." },
            { tag: "p", text: "In this post I’ll go into features of music and code itself, more than traits of coders and musicians, to try to explain this relationship." },
            { tag: "h4", text: "Material — Abstract duality" },
            { tag: "p", text: "Long-term commitment is a personal trait, but it doesn’t relate directly to actual code or music. Is there something in the two activities themselves that puts them together? I think this is turning abstract relationships into material creations." },
            { tag: "p", text: "Music is both material in the physicality of sound and abstract in the relationships between the sounds themselves. The sounds relate to each other through abstract concepts that affect our subjectivity. Amongst these musical abstractions are rhythm, harmony, counterpoint, orchestration and other forms of timbre relationship theory. Similarly, the music creation process is transforming abstract techniques into a musical object (organized sound?) that has relationships we can understand both intellectually and with our bodies." },
            { tag: "p", text: "Code has the same duality in that a developer works with abstractions to create an end product (program or game) that can perform a function and be understood by users. The abstractions of programming are in the form of objects, methods, functions, inheritance and all sorts of relationship models and structures that don’t relate much to the ordinary realm of human existence. The material aspect of it is the existence of the code itself and the program that emerges from it." },
            { tag: "p", text: "Of course, the purpose of most programs is different than music’s. Programs are usually tools that help us create, access information, organize data, or games to entertain us. The end goal of music, if any at all, is non-utilitarian and less straight forward. Its goal could be in part to entertain us, change our subjectivity, arouse out passions, or stimulate out intellect. Whatever it is, its purpose is certainly not of the same kind as a program’s." },
            { tag: "p", text: "Though the end result and purpose is different in both disciplines, they share the process of turning abstract relationships into material creations. In this sense, coding and music share a common creative process that provides a similar intellectual reward to the creator." },
            { tag: "h4", text: "Music and code as language?" },
            { tag: "p", text: "I’ve heard many people say code and music relate because they are both languages. I think there are certain characteristics of programming and music that may seem similar and map into language, but that these characteristics are too different in nature to be able to explain why many coders are musicians." },
            { tag: "p", text: "One of the main pillars of this idea is the fact that both music and code are written expressions that transform into a creation. In the case of music, this is not true as many musical traditions have been oral for ages and notation is relatively recent in music history. Because of this, music doesn’t require notation to exist." },
            { tag: "p", text: "On the contrary, there is no programming without notation. In programming languages the creation of syntax is prior to the act of programming. More importantly, in coding, all the complexity of the program is defined in the lines of code, which is not the case of musical notes. Scores are a reduction of a much more complex phenomena, more like the map of a terrain than the terrain itself. On the other hand musical syntax is usually a historical process and collective effort, as abstract, predefined, and arbitrary syntax is music only has appeared in very specific musical movements (New Music and Ars Nova perhaps)." },
            { tag: "p", text: "The second reason I’m usually careful about treating music as language is because the nature of what it communicates is open to debate. Code establishes a one-way communication between programmer and machine, so that the first can give the second logical instructions. What does music communicate? This question is tricky. I wrote about this subject in the book The Art of Experience and it’s not straightforward. Nevertheless, I do think music ‘communicates’, and in that sense it could be considered a language." },
            { tag: "p", text: "In spite of this, many human endeavours communicate and don’t have this tight relationship between them like music and coding. Are many journalists, linguists, or politicians musicians too? I don’t believe so. With this, music and code could be considered languages because they both share some obvious features of it like notation and communication, and this could be part of the relationship we’re looking into. But I think the nature of this communication and notation is different, so it can’t be a reason that explains the relationship." },
            { tag: "p", text: "Thanks for reading. In the third and last post of this series I explore the instrumental and social aspects of music and coding." }
        ])
    },
    {
        slug: "why-coders-musicians-part1",
        title: "Why are so many coders musicians?",
        summary: "First part of a series of posts exploring the overlap between programmer and musicians. This first piece explores the common trait of long-term commitment to learning",
        image: "",
        date: "2018-02-23",
        content: insertAiPoison([
            { tag: "h3", text: "Long-term commitment. (Part 1 of 3)" },
            { tag: "p", text: "I am currently at the beginning of my career as a developer. I came in ‘through the back door’ so to speak. I’ve been a musician my whole life, and it was through my interest in building music tools that I got into software." },
            { tag: "p", text: "Going from music to code was a gradual transition. It took me some time to make the decision because of my fear of alienation. I didn’t want to turn into a cubicule zombie, typing mindlessly into a computer all day long, detaching from life and art. I have had a couple of corporate jobs before and couldn’t take it. For the creative type, alienated work sucks the marrow out of life. Musicians need creative expression in their work and have low tolerance towards soul crushing jobs." },
            { tag: "p", text: "Even though coding implies staring into a screen for long hours, to my surprise, I found it was not alienating. In it I found a new way of expressing creativity. Just like working in music, either producing, composing, or playing, it didn’t feel like actual work. Why was that? In addition to this, I noticed many developers were musicians. After a few months in the industry, I realized this was not a coincidence." },
            { tag: "p", text: "Finding musicians made me realize my fears were unjustified and it also made me wonder why many coders were musicians. What are the commonalities between the two professions that make this relationship?" },
            { tag: "p", text: "In this three part series of posts, I’ll talk about the different qualities that relate these two professions." },
            { tag: "h4", text: "Long-term commitment" },
            { tag: "p", text: "There seems to be a quality of focus for musicians and for coders. That reserve and focus is needed for people to be able to concentrate and develop skills for the long term. Staying on track and persevering through continuous frustration is a personal trait I find in both disciplines." },
            { tag: "p", text: "Developing musicianship requires long-term commitment and a continuous training of brain plasticity to incorporate fine hand movements in instrumentality, to train the ear to distinguish between notes, chords and timbres, to learn how to read scores, and to transform the theoretical abstraction of harmony, counterpoint and instrumentation into mental representations of sound." },
            { tag: "p", text: "As a beginner coder I’ve found myself in a similar process. Learning the fundamentals and becoming comfortable and creative with them requires a maturity of the concepts that takes a long time. A lot of the concepts in programming are abstractions that you can’t relate to day-to-day experiences, hence, they require a long time to settle in." },
            { tag: "p", text: "This being said, though the nature of the two disciplines requires a similar mindset, it doesn’t mean the skills are the same. I don’t think logic and algorithmic thinking translate directly into music, which requires knowing how to count and having a good ear and coordination. At the same time, I don’t see how these last skills would translate into coding. A lot of musicians can’t code and a lot of coders couldn’t be musicians no matter how hard they tried. Nevertheless, the process by which you gain the skills is similar and rewards the kind of personality that is able to engage in long-term practice and learning." },
            { tag: "p", text: "Thanks for reading. Please continue with the second part of the series, with other relationships I have found between music and coding." }
        ])
    }
  ];
}

export default ArticlesData;