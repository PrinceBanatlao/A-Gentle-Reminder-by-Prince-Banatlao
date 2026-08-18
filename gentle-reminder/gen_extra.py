import json
import os

pages = [
    # Chapter I Additions
    { "type": "content", "chapter_target": "Chapter I", "header": "The Resistance", "text": ["Your brain is wired to protect you from pain. And right now, looking at yourself is painful.", "You will feel a strong pull to close this book, to scroll on your phone, to distract yourself with anything else.", "Acknowledge the resistance.", "Say to yourself, 'I am uncomfortable right now, and that is okay.'", "Growth only happens in the places that make us want to run away."] },
    { "type": "content", "chapter_target": "Chapter I", "header": "No More 'Buts'", "text": ["The word 'but' is the eraser of accountability.", "When you say, 'I'm sorry I yelled, but you were ignoring me,' you have erased the apology.", "You have shifted the blame back to them.", "Practice ending your sentences at the apology.", "'I am sorry I yelled. It was wrong of me.' Full stop.", "If there is an issue with them ignoring you, address it later, calmly. Do not use it as a shield."] },

    # Chapter II Additions
    { "type": "content", "chapter_target": "Chapter II", "header": "The Root of Insecurity", "text": ["Insecurity is a quiet voice that says, 'If they truly knew me, they wouldn't stay.'", "So, you try to control the narrative.", "You try to appear stronger, smarter, or more detached.", "But true connection requires vulnerability.", "You cannot be fully loved until you are fully known. And you cannot be fully known if you are always wearing armor."] },
    { "type": "reflection", "chapter_target": "Chapter II", "prompt": "What am I most afraid they will find out about me?" },
    { "type": "content", "chapter_target": "Chapter II", "header": "Self-Awareness vs. Self-Correction", "text": ["Many people mistake self-awareness for self-correction.", "Knowing that you have a bad temper does not make you a better person.", "It just makes you an observant angry person.", "The awareness is only step one. The correction—the active, difficult choice to act differently—is step two.", "Do not pat yourself on the back just for knowing your flaws."] },

    # Chapter III Additions
    { "type": "content", "chapter_target": "Chapter III", "header": "The Anatomy of Deflection", "text": ["Deflection happens when the spotlight of accountability gets too hot.", "You suddenly bring up a mistake they made three months ago.", "This is a survival tactic.", "It is your ego throwing a smoke bomb.", "Recognize when you are reaching for the smoke bomb, and choose to stay in the heat instead."] },
    { "type": "reflection", "chapter_target": "Chapter III", "prompt": "What is my favorite 'smoke bomb' to throw when I am caught in a mistake?" },

    # Chapter IV Additions
    { "type": "content", "chapter_target": "Chapter IV", "header": "Letting Go of the Guilt-Loop", "text": ["You are not required to bleed forever.", "If you have taken responsibility, if you have made amends, if you have changed the behavior... then continuing to punish yourself is just a form of self-indulgence.", "It keeps the focus on you and your pain, rather than on the relationship.", "Stop making them reassure you that you aren't terrible.", "Be good, and let that be enough."] },
    { "type": "special", "chapter_target": "Chapter IV", "header": "Read This When You Feel Ashamed", "text": ["Shame thrives in silence.", "It tells you that you are uniquely broken and that no one could possibly understand.", "But human history is built on people making terrible mistakes and learning from them.", "You are not a monster. You are a person who made a bad choice.", "Speak it out loud. Strip it of its power."] },

    # Chapter V Additions
    { "type": "content", "chapter_target": "Chapter V", "header": "The Stories We Tell Ourselves", "text": ["We don't react to what actually happened; we react to the story we tell ourselves about what happened.", "If they don't text back, the story might be: 'They don't care about me.'", "You get angry at the story, not the reality.", "Before you react, ask yourself: 'What is the story I am telling myself right now? And is it actually true?'"] },
    { "type": "reflection", "chapter_target": "Chapter V", "prompt": "What is a negative story I constantly tell myself about my relationship?" },

    # Chapter VI Additions
    { "type": "content", "chapter_target": "Chapter VI", "header": "Noticing the Quiet Love", "text": ["Loud love is easy to see.", "It is the gifts, the grand declarations, the passionate arguments.", "But quiet love is what sustains a life.", "It is the glass of water on your nightstand. It is them listening to you vent about work.", "Do not become so addicted to loud love that you ignore the quiet ways they are choosing you every day."] },
    { "type": "special", "chapter_target": "Chapter VI", "header": "Read This When You Want to Show Appreciation", "text": ["Do not wait for a special occasion.", "Go to them right now.", "Tell them something specific you love about them.", "Not just 'I love you,' but 'I love how you always make me feel safe when I'm stressed.'", "Specific praise waters the roots of a relationship."] },

    # Chapter VII Additions
    { "type": "content", "chapter_target": "Chapter VII", "header": "Love as a Choice", "text": ["There will be days when the feeling of love is completely absent.", "You will be irritated, tired, and disconnected.", "That is the exact moment when love matters most.", "Because in that moment, love is not a feeling. It is a decision.", "Will you choose to speak kindly even when you don't feel like it?", "That is true romance."] },
    { "type": "reflection", "chapter_target": "Chapter VII", "prompt": "What do I need to start doing to show love as an action?" },

    # Chapter VIII Additions
    { "type": "content", "chapter_target": "Chapter VIII", "header": "The Patience of Rebuilding", "text": ["When you break trust, you are resetting the clock.", "You do not get to say, 'But I've been good for two weeks!'", "Two weeks of good behavior does not erase two years of instability.", "You must settle in for the long haul.", "Be relentlessly, boringly consistent.", "That is how trust is rebuilt."] },
    { "type": "special", "chapter_target": "Chapter VIII", "header": "Read This When They Bring Up the Past Again", "text": ["It is frustrating when they bring up a mistake you have already apologized for.", "You feel like you are being punished twice.", "But understand this: They are not trying to punish you.", "They are trying to heal, and the wound still hurts.", "Do not get defensive. Simply say, 'I know I hurt you then, and I am still so sorry. I am here with you now.'"] },

    # Chapter IX Additions
    { "type": "content", "chapter_target": "Chapter IX", "header": "The Art of the Pause", "text": ["Your brain is capable of processing information much faster than you can speak.", "Use that speed.", "When you are triggered, count to five.", "One. Two. Three. Four. Five.", "In those five seconds, the most impulsive, destructive part of your brain will tire out, and the rational, loving part can take the wheel."] },
    { "type": "reflection", "chapter_target": "Chapter IX", "prompt": "What usually happens when I don't pause?" },

    # Chapter X Additions
    { "type": "content", "chapter_target": "Chapter X", "header": "The Compassion Mirror", "text": ["If your best friend came to you and confessed to the exact same mistake you made, what would you tell them?", "Would you tell them they are worthless? Would you tell them to hate themselves forever?", "No.", "You would tell them that they messed up, but they are still a good person.", "Why do you refuse to give yourself the same compassion?"] },

    # Chapter XI Additions
    { "type": "content", "chapter_target": "Chapter XI", "header": "The Power of 'I Was Wrong'", "text": ["There is immense power in admitting you were wrong.", "It immediately diffuses the tension.", "It shows that you value the truth more than your own ego.", "The next time you realize you are losing an argument because your facts are wrong, stop fighting.", "Smile and say, 'You know what? You're right. I was wrong about that.'", "Watch how the energy shifts."] },
    { "type": "reflection", "chapter_target": "Chapter XI", "prompt": "When was the last time I easily admitted I was wrong?" },

    # Chapter XII Additions
    { "type": "content", "chapter_target": "Chapter XII", "header": "Loving Without Clinging", "text": ["To love someone without clinging is an art.", "It means saying, 'I want you here, but I do not need to trap you here.'", "It means trusting that what is meant for you will not require a cage.", "Relax your grip.", "Let them breathe. Let yourself breathe."] },

    # Chapter XIII Additions
    { "type": "special", "chapter_target": "Chapter XIII", "header": "Read This When You Are Disappointed in Yourself", "text": ["You set a standard for yourself, and you failed to meet it.", "It is okay to be disappointed.", "But do not unpack and live in that disappointment.", "Use it.", "Let the bitter taste of failing yourself be the fuel you need to try harder tomorrow.", "You are allowed to be a work in progress."] },
    { "type": "special", "chapter_target": "Chapter XIII", "header": "Read This When You Feel Misunderstood", "text": ["Sometimes, despite your best efforts, they will not understand what you meant.", "They will assume the worst of your intentions.", "It is deeply painful.", "But you cannot control their perception of you in this moment.", "You can only control your reaction.", "Stay calm. State your truth gently. And let time do the rest."] },

    # Chapter XIV Additions
    { "type": "content", "chapter_target": "Chapter XIV", "header": "A Letter to the Person Who Stayed", "text": ["Thank you.", "Thank you for the times you held your ground when I pushed.", "Thank you for seeing the man I could be, even when I was acting like a child.", "I know I have not made it easy.", "But I promise you, I am working to be the soft place to land that you have always been for me."] },

    # Chapter XV Additions
    { "type": "content", "chapter_target": "Chapter XV", "header": "The Quiet Pride", "text": ["One day, you will realize that you haven't raised your voice in months.", "You will realize that the last time you felt jealous, you handled it internally without starting a fight.", "You will realize that you are keeping your promises.", "It will not happen with fireworks.", "It will happen quietly.", "And you will feel a deep, quiet pride in the person you have built."] },
    { "type": "reflection", "chapter_target": "Chapter XV", "prompt": "What would the better version of me do differently?" },

    # Chapter XVI Additions
    { "type": "content", "chapter_target": "Chapter XVI", "header": "The Long Game", "text": ["Healing is the longest game you will ever play.", "There are no shortcuts.", "There are no cheat codes.", "But every single day you choose to be honest, accountable, and kind, you are winning.", "Do not stop playing.", "Do not stop growing."] },
    { "type": "content", "chapter_target": "Chapter XVI", "header": "A Life Well Loved", "text": ["At the end of it all, you will not remember the arguments you 'won.'", "You will remember the times you connected.", "You will remember the laughter, the quiet mornings, the apologies that healed old wounds.", "Focus on what matters.", "Love well. Live well. Be well."] }
]

output_path = os.path.join("content_data", "extra.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(pages, f, indent=2)

print(f"Generated {len(pages)} extra pages in extra.json")
