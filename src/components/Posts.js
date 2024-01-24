import React from "react";
import "./Post.css";
import Post from "./Post";
import cs1 from '../cv2.png';

import bd1 from '../cv3.png';



const Posts = () => {


    const blogPosts = [
        {
        title: "The Dark Side of Digital Age: Cyber Spying and Its Tools | January 23 2024",
        body: ` 

        In the labyrinthine world of digital technology, where data is the new gold and safeguarding it is akin to a modern-day crusade, cyber spying has emerged as a chilling reality. This shadowy practice isn't just confined to rogue hackers in dimly lit basements; even governments and security companies are implicated, using sophisticated tools that blur the line between protection and invasion.
        
        Imagine an invisible intruder slipping into your device, unnoticed like a phantom. This is no ordinary trespasser but a piece of malicious malware or spyware installed by cybercriminals or even state-sponsored actors. It's akin to finding out that your home has been bugged - only this time, it's your digital abode under surveillance.
        
        One such notorious toolset was revealed in the leaked 'Ant Catalog' from the National Security Agency (NSA) around 2008. This catalog reads like an Orwellian nightmare with devices that could be straight out of a James Bond movie. 
        
        Among these tools is something known as a passive RF (Radio Frequency), retro ultra-high frequency reflector - tiny electronic devices requiring only microamps of power. They sit silently without radiating any RF energy, waiting for their cue like sleeper agents in enemy territory.
        
        Then there are audio-based RF retro-reflectors that provide room audio from targeted spaces using radar and basic post-processing. Imagine having an unseen ear in your room listening to every word you utter! To make this work, someone needs to send a focused beam of radio frequency energy targeted at that retro-reflector from some distance away – much like shining a spotlight on an actor on stage while sitting hidden amidst the audience.
        
        The chilling efficiency of these tools underscores how our private spaces have become porous in this digital age where boundaries are increasingly blurred. But awareness can be our first line of defense against such intrusions.
        
        It’s essential to keep your devices updated with the latest security patches and be cautious about the apps you install. Be wary of unsolicited emails or messages containing links, as these could be phishing attempts to install spyware on your device.
        
        Remember, in this digital age, vigilance is not just a virtue but a necessity. The battle against cyber spying is an ongoing one, and every user needs to be an active participant. It's like being part of a neighborhood watch - only this time, the neighborhood is online.
        
        So if you are alone in your room thinking you're indeed alone, remember there might be unseen ears listening. This isn't meant to scare you but to make you aware because awareness is the first step towards prevention.
        
        Share your thoughts below on how we can better protect ourselves in this digital age from such intrusions. Let's learn from each other because together we stand stronger against such invisible threats!
        
        To your safety`
        
        ,
        author: "Lawrie Student CSU - Grad Cert in Cloud & Virtualisation",
        blogImg:
            cs1,
        },
        {
        title: "The Hidden Dangers of Backdoors in Computer Codes: A Deep Dive into Cybersecurity | January 24 2024",
        body: `

        Every so often, a chilling question reverberates through the hushed corridors of the digital world, "How much can we trust the operating systems and applications that we use?" This is not an idle query. It's a vital concern that demands our attention. After all, we're living in an era where our lives are intricately woven with technology.
        
        Let's embark on this journey by acknowledging a harsh reality - all software systems contain security vulnerabilities and bugs. Yes, every single one of them! These hidden backdoors in computer codes can be exploited by cybercriminals to gain unauthorized access or disrupt services. It's like leaving your front door unlocked while you sleep, inviting unwanted guests into your home.
        
        Now imagine if there was a way to build software without these vulnerabilities? Enter formal methods in software engineering - our knight in shining armor! Formal methods provide mathematical proof of correctness for a system. This means no matter what inputs the system receives; it will always compute the right value. Think of it as building an impenetrable fortress around your data, ensuring its safety from external threats.
        
        In the past, mathematicians painstakingly performed this process manually on programs containing about 50 lines of code. But today’s complex systems boast millions of lines – making manual verification akin to finding a needle in a haystack!
        
        Thankfully, modern technology has provided us with powerful tools – computers capable of performing these proofs for us! However, only the most critical software currently undergoes formal methods because of their time-consuming nature and high costs involved. Examples include air transportation systems or process control systems where even minor errors could lead to catastrophic consequences.
        
        So here lies our predicament: We must accept the risk of security vulnerabilities and bugs and take steps to mitigate them accordingly. One effective strategy is regular patching – updating your software frequently to fix known vulnerabilities. It's like reinforcing the locks on your doors and windows to keep burglars at bay.
        
        Another essential tip is to adopt a multi-layered defense strategy, also known as 'defense in depth.' This approach involves using many security measures to protect information. If one layer fails, others are still in place to thwart an attack.
        
         while we can't eliminate all risks associated with backdoors in computer codes, we can certainly minimize them through smart strategies and vigilance. Remember, cybersecurity isn't just about protecting systems; it's about safeguarding our way of life in this digital age.
        
        Feel free to share your thoughts or experiences dealing with software vulnerabilities below. I look forward to hearing your insights!
        
        To your online safety,
        `,
        author: "Lawrie Student CSU - Grad Cert in Cloud & Virtualisation",
        blogImg:
            bd1,
        },
        {
        title: "Algorithm",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        author: "Lawrie Student CSU - Grad Cert in Cloud & Virtualisation",
        blogImg:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
        },
        {
        title: "Computer Network",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        author: "Lawrie Student CSU - Grad Cert in Cloud & Virtualisation",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
        },
    ];
    return (
        <div className="posts-container">
        {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
        ))}
        </div>
    );
    };
    export default Posts;