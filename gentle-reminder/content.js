const bookPages = [
    {
        "type":  "cover",
        "title":  "A Gentle Reminder",
        "subtitle":  "For when you don\u0027t recognize yourself anymore.",
        "pageNum":  1
    },
    {
        "type":  "blank",
        "pageNum":  2
    },
    {
        "type":  "title",
        "content":  "A Gentle Reminder",
        "pageNum":  3
    },
    {
        "type":  "toc",
        "pageNum":  4,
        "toc_entries":  [
                            {
                                "chapter":  "Chapter I",
                                "title":  "The Weight of the Past",
                                "page":  5
                            },
                            {
                                "chapter":  "Chapter II",
                                "title":  "The Myth of Perfection",
                                "page":  13
                            },
                            {
                                "chapter":  "Chapter III",
                                "title":  "Learning How to Apologize",
                                "page":  20
                            },
                            {
                                "chapter":  "Chapter IV",
                                "title":  "The Anatomy of Healing",
                                "page":  25
                            },
                            {
                                "chapter":  "Chapter V",
                                "title":  "Learning Why You Hurt People",
                                "page":  31
                            },
                            {
                                "chapter":  "Chapter VI",
                                "title":  "For the Person Who Loves You",
                                "page":  41
                            },
                            {
                                "chapter":  "Chapter VII",
                                "title":  "Love Is More Than Feelings",
                                "page":  50
                            },
                            {
                                "chapter":  "Chapter VIII",
                                "title":  "When You Hurt Someone You Love",
                                "page":  57
                            },
                            {
                                "chapter":  "Chapter IX",
                                "title":  "Learning to Control Yourself",
                                "page":  64
                            },
                            {
                                "chapter":  "Chapter X",
                                "title":  "Forgiving Yourself",
                                "page":  74
                            },
                            {
                                "chapter":  "Chapter XI",
                                "title":  "Becoming Better",
                                "page":  82
                            },
                            {
                                "chapter":  "Chapter XII",
                                "title":  "When You Are Afraid of Losing Someone",
                                "page":  91
                            },
                            {
                                "chapter":  "Chapter XIII",
                                "title":  "For the Difficult Days",
                                "page":  98
                            },
                            {
                                "chapter":  "Chapter XIV",
                                "title":  "Letters",
                                "page":  106
                            },
                            {
                                "chapter":  "Chapter XV",
                                "title":  "The Person I Am Becoming",
                                "page":  115
                            },
                            {
                                "chapter":  "Chapter XVI",
                                "title":  "Keep Going",
                                "page":  123
                            }
                        ]
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter I",
        "chapterTitle":  "The Weight of the Past",
        "pageNum":  5
    },
    {
        "type":  "content",
        "header":  "You Are Allowed to Change",
        "subtitle":  "Even if you don\u0027t recognize yourself anymore.",
        "text":  [
                     "You cannot change what happened yesterday.",
                     "\u003cstrong\u003eBut you can decide what kind of person you become tomorrow.\u003c/strong\u003e",
                     "The fact that you are reading this means you are already starting.",
                     "It means you care enough to try. That is not nothing. That is the entire foundation."
                 ],
        "pageNum":  6
    },
    {
        "type":  "reminder",
        "text":  "You don\u0027t have to hate yourself in order to take responsibility for yourself.",
        "pageNum":  7
    },
    {
        "type":  "content",
        "header":  "The Archive of Regret",
        "text":  [
                     "We keep an archive in our minds of everything we have ever done wrong.",
                     "We pull the files out at 2 AM.",
                     "We study them. We memorize the mistakes.",
                     "You may regret what you did.",
                     "\u003cstrong\u003eBut regret is supposed to teach you, not become your permanent home.\u003c/strong\u003e",
                     "Learn the lesson, and then close the file."
                 ],
        "pageNum":  8
    },
    {
        "type":  "reflection",
        "prompt":  "What am I avoiding admitting to myself?",
        "subtitle":  "Write it down so it stops haunting you.",
        "pageNum":  9
    },
    {
        "type":  "content",
        "header":  "Forgiving the Past You",
        "subtitle":  "They were doing their best.",
        "text":  [
                     "You are judging a past version of yourself with the wisdom you only gained *because* of their mistakes.",
                     "It is an unfair trial.",
                     "The version of you that made those choices was likely hurting, scared, or lost.",
                     "Have some grace for them. They got you here."
                 ],
        "pageNum":  10
    },
    {
        "type":  "quote",
        "text":  "You are allowed to become someone your past self would not recognize.",
        "pageNum":  11
    },
    {
        "type":  "special",
        "header":  "Read This When You Feel Like You Ruined Everything",
        "text":  [
                     "Take a breath.",
                     "You have broken things, yes. We all do.",
                     "But almost nothing is beyond repair, and even the things that are broken can be rebuilt into something new.",
                     "The world has not ended.",
                     "You are still here, and you still have a choice about what you do next."
                 ],
        "pageNum":  12
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter II",
        "chapterTitle":  "The Myth of Perfection",
        "pageNum":  13
    },
    {
        "type":  "content",
        "header":  "The Impossibly High Bar",
        "subtitle":  "Lower it to where you can actually jump.",
        "text":  [
                     "You want to be perfect immediately. You want to wake up tomorrow and never make a mistake again.",
                     "That is not growth. That is fantasy.",
                     "Growth is messy.",
                     "Growth is two steps forward, one step back, and a sincere apology in between.",
                     "\u003cstrong\u003eStop demanding perfection and start demanding consistency.\u003c/strong\u003e"
                 ],
        "pageNum":  14
    },
    {
        "type":  "content",
        "header":  "The Danger of \u0027Should\u0027",
        "text":  [
                     "\u0027I should be over this by now.\u0027",
                     "\u0027I should know better.\u0027",
                     "The word \u0027should\u0027 is a weapon we use against ourselves.",
                     "Remove it from your vocabulary.",
                     "Replace it with \u0027I am learning how to...\u0027",
                     "\u003cstrong\u003eI am learning how to be over this. I am learning how to know better.\u003c/strong\u003e"
                 ],
        "pageNum":  15
    },
    {
        "type":  "reflection",
        "prompt":  "What is an unrealistic expectation I have placed on myself?",
        "pageNum":  16
    },
    {
        "type":  "reminder",
        "text":  "Saying sorry matters. But real change is what happens after the apology.",
        "pageNum":  17
    },
    {
        "type":  "content",
        "header":  "Embracing the Flaws",
        "text":  [
                     "Your flaws are not the enemy.",
                     "They are the map.",
                     "They show you exactly where the work needs to be done.",
                     "Do not hide them. Do not pretend they do not exist.",
                     "Put them on the table. Look at them.",
                     "They lose their power when you stop being afraid of them."
                 ],
        "pageNum":  18
    },
    {
        "type":  "quote",
        "text":  "A mistake is an event. It is not an identity.",
        "pageNum":  19
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter III",
        "chapterTitle":  "Learning How to Apologize",
        "pageNum":  20
    },
    {
        "type":  "content",
        "header":  "The Anatomy of \u0027I\u0027m Sorry\u0027",
        "text":  [
                     "A real apology does not include the word \u0027but\u0027.",
                     "\u0027I am sorry, but you made me mad\u0027 is not an apology. It is an accusation.",
                     "A real apology takes full ownership.",
                     "\u003cstrong\u003e\u0027I am sorry that I raised my voice. It was wrong, and I will do better.\u0027\u003c/strong\u003e",
                     "Full stop."
                 ],
        "pageNum":  21
    },
    {
        "type":  "content",
        "header":  "The Wait",
        "subtitle":  "Patience is part of the apology.",
        "text":  [
                     "When you apologize, you hand someone a gift.",
                     "They are not obligated to open it immediately.",
                     "They might need time. They might be angry.",
                     "You do not get to dictate their timeline for forgiveness.",
                     "\u003cstrong\u003eYour job is to apologize and wait.\u003c/strong\u003e"
                 ],
        "pageNum":  22
    },
    {
        "type":  "reflection",
        "prompt":  "Who deserves an apology from me that I have been withholding out of pride?",
        "pageNum":  23
    },
    {
        "type":  "content",
        "header":  "Apologizing to Yourself",
        "text":  [
                     "We apologize to the people we hurt, but we rarely apologize to the person who has carried the heaviest burden: ourselves.",
                     "Look in the mirror.",
                     "Say, \u0027I am sorry for the way I have spoken to you.\u0027",
                     "Say, \u0027I am sorry for not protecting you.\u0027",
                     "It sounds silly until you do it. Then, it sounds like healing."
                 ],
        "pageNum":  24
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter IV",
        "chapterTitle":  "The Anatomy of Healing",
        "pageNum":  25
    },
    {
        "type":  "quote",
        "text":  "Healing is not a destination. It is a daily practice.",
        "pageNum":  26
    },
    {
        "type":  "content",
        "header":  "The Spiral Staircase",
        "text":  [
                     "Healing is not a straight line up a mountain.",
                     "It is a spiral staircase.",
                     "Sometimes you will feel like you are looking at the exact same scenery you saw a year ago.",
                     "You will think, \u0027I haven\u0027t made any progress.\u0027",
                     "But you have.",
                     "\u003cstrong\u003eYou are looking at the same scenery, but from one level higher.\u003c/strong\u003e"
                 ],
        "pageNum":  27
    },
    {
        "type":  "content",
        "header":  "The Messy Middle",
        "text":  [
                     "Starting is exciting. Finishing is satisfying.",
                     "The middle is where most people quit.",
                     "The middle is boring. The middle is doing the right thing when no one is watching.",
                     "The middle is biting your tongue for the fiftieth time.",
                     "Do not quit in the middle. The middle is where the actual changing happens."
                 ],
        "pageNum":  28
    },
    {
        "type":  "reflection",
        "prompt":  "What does a healed version of me look like? How do they walk, talk, and love?",
        "pageNum":  29
    },
    {
        "type":  "special",
        "header":  "Read This When You Feel Like You\u0027re Going Backwards",
        "text":  [
                     "A relapse in behavior is not a reset of your progress.",
                     "If you walk ten miles and trip, you do not magically teleport back to the starting line.",
                     "You are just a person who tripped ten miles in.",
                     "Dust your knees off.",
                     "Apologize if you need to. And take the next step forward."
                 ],
        "pageNum":  30
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter V",
        "chapterTitle":  "Learning Why You Hurt People",
        "pageNum":  31
    },
    {
        "type":  "content",
        "header":  "The Root of the Reaction",
        "subtitle":  "We don\u0027t explode for no reason.",
        "text":  [
                     "Nobody wakes up and decides, \u0027I am going to intentionally hurt the person I love today.\u0027",
                     "We hurt people because we are hurting, because we are afraid, or because we are protecting a wound we haven\u0027t healed.",
                     "\u003cstrong\u003eIf you want to stop hurting people, you have to find out what you are protecting.\u003c/strong\u003e",
                     "Are you afraid of being abandoned? Are you terrified of not being in control? Do you feel inadequate?"
                 ],
        "pageNum":  32
    },
    {
        "type":  "content",
        "header":  "The Trigger is Not the Problem",
        "text":  [
                     "A trigger is just someone bumping into a bruise you already had.",
                     "When your partner says something that makes you explode, it is rarely about what they actually said.",
                     "It is about the old story their words woke up inside your head.",
                     "\u003cstrong\u003eIt is your responsibility to heal the bruise, so that when someone accidentally brushes against it, you do not burn the house down.\u003c/strong\u003e"
                 ],
        "pageNum":  33
    },
    {
        "type":  "reflection",
        "prompt":  "What specific words or actions usually trigger me?",
        "subtitle":  "And why do I think that is?",
        "pageNum":  34
    },
    {
        "type":  "content",
        "header":  "Defensiveness",
        "subtitle":  "The enemy of connection.",
        "text":  [
                     "When you are defensive, you are telling the other person that protecting your ego is more important than understanding their feelings.",
                     "The next time you feel the urge to say, \u0027Well, you did this...\u0027, stop.",
                     "Bite your tongue.",
                     "\u003cstrong\u003eListen to what they are saying. Find the grain of truth in it, even if you disagree with the rest.\u003c/strong\u003e"
                 ],
        "pageNum":  35
    },
    {
        "type":  "special",
        "header":  "Read This Before You Send That Angry Message",
        "text":  [
                     "Stop typing.",
                     "Put the phone down.",
                     "Nothing good has ever come from a message sent with a racing heart and clenched teeth.",
                     "You are reacting, not communicating.",
                     "Walk away for twenty minutes. Let your nervous system calm down.",
                     "If it is still important to say later, you can say it calmly.",
                     "\u003cstrong\u003eDo not create a mess that the calm version of you will have to clean up tomorrow.\u003c/strong\u003e"
                 ],
        "pageNum":  36
    },
    {
        "type":  "quote",
        "text":  "True freedom is having a thought, feeling an emotion, and choosing how to respond.",
        "pageNum":  37
    },
    {
        "type":  "content",
        "header":  "The Stories We Tell Ourselves",
        "text":  [
                     "We don\u0027t react to what actually happened; we react to the story we tell ourselves about what happened.",
                     "If they don\u0027t text back, the story might be: \u0027They don\u0027t care about me.\u0027",
                     "You get angry at the story, not the reality.",
                     "\u003cstrong\u003eBefore you react, ask yourself: \u0027What is the story I am telling myself right now? And is it actually true?\u0027\u003c/strong\u003e"
                 ],
        "pageNum":  38
    },
    {
        "type":  "reflection",
        "prompt":  "What is a negative story I constantly tell myself about my relationship?",
        "pageNum":  39
    },
    {
        "type":  "reminder",
        "text":  "Look back at your last three major arguments. Find the common denominator. Once you see the pattern, you can break it.",
        "pageNum":  40
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter VI",
        "chapterTitle":  "For the Person Who Loves You",
        "pageNum":  41
    },
    {
        "type":  "content",
        "header":  "The Gift of Patience",
        "subtitle":  "Do not take it for granted.",
        "text":  [
                     "Think about the person who has stayed by your side.",
                     "Think about the times you were difficult, stubborn, angry, or cold.",
                     "And yet, they chose to see the good in you.",
                     "They chose to believe that you were better than your worst moments.",
                     "\u003cstrong\u003eIt is a rare and precious gift, and if you drop it too many times, it will eventually break.\u003c/strong\u003e"
                 ],
        "pageNum":  42
    },
    {
        "type":  "content",
        "header":  "Seeing Them",
        "text":  [
                     "When was the last time you truly looked at them?",
                     "Not just glancing at them while looking at your phone.",
                     "Not just seeing them as a fixture in your life.",
                     "Look at the way they laugh. Look at the exhaustion in their eyes when they have carried too much.",
                     "\u003cstrong\u003eAppreciate them loudly. Do not let them wonder if they matter to you.\u003c/strong\u003e"
                 ],
        "pageNum":  43
    },
    {
        "type":  "reflection",
        "prompt":  "What are three things I deeply appreciate about the person who loves me?",
        "pageNum":  44
    },
    {
        "type":  "content",
        "header":  "Protecting Their Heart",
        "text":  [
                     "When someone gives you their heart, they are trusting you not to crush it.",
                     "They are trusting you with their softest parts.",
                     "You are the guardian of that softness.",
                     "When you raise your voice, when you lie, when you dismiss their feelings, you are failing your duty as a protector.",
                     "\u003cstrong\u003eBe the safest place they have ever known.\u003c/strong\u003e"
                 ],
        "pageNum":  45
    },
    {
        "type":  "special",
        "header":  "Read This When Someone Gives You Another Chance",
        "text":  [
                     "They did not give you another chance because you deserve it.",
                     "They gave you another chance because they love you, and they are hoping the version of you they believe in is real.",
                     "Do not make them regret it.",
                     "This is not the time to relax because you \u0027got them back.\u0027",
                     "\u003cstrong\u003eThis is the time to work twice as hard to prove that their faith in you was not a mistake.\u003c/strong\u003e"
                 ],
        "pageNum":  46
    },
    {
        "type":  "content",
        "header":  "Noticing the Quiet Love",
        "text":  [
                     "Loud love is easy to see.",
                     "It is the gifts, the grand declarations, the passionate arguments.",
                     "But quiet love is what sustains a life.",
                     "It is the glass of water on your nightstand. It is them listening to you vent about work.",
                     "\u003cstrong\u003eDo not become so addicted to loud love that you ignore the quiet ways they are choosing you every day.\u003c/strong\u003e"
                 ],
        "pageNum":  47
    },
    {
        "type":  "content",
        "header":  "The Reservoir",
        "subtitle":  "Fill it before the drought.",
        "text":  [
                     "Every time you show up, listen, and choose kindness, you are putting a drop in the reservoir.",
                     "When a drought comesâ€”when there is stress, illness, or a major argumentâ€”you will need that reservoir.",
                     "If the reservoir is empty, the relationship will dry up.",
                     "Fill the reservoir today."
                 ],
        "pageNum":  48
    },
    {
        "type":  "reflection",
        "prompt":  "How can I add a drop to the reservoir today?",
        "pageNum":  49
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter VII",
        "chapterTitle":  "Love Is More Than Feelings",
        "pageNum":  50
    },
    {
        "type":  "quote",
        "text":  "Love is not just a warm feeling in your chest. Love is a verb. It is a series of choices.",
        "pageNum":  51
    },
    {
        "type":  "content",
        "header":  "Respect is the Foundation",
        "text":  [
                     "You cannot love someone you do not respect.",
                     "And respect is shown in the small things.",
                     "It is shown in not talking over them. In valuing their time. In not making them the butt of your jokes.",
                     "If love is the house, respect is the foundation.",
                     "\u003cstrong\u003eIf the foundation crumbles, the house falls, no matter how beautiful it is.\u003c/strong\u003e"
                 ],
        "pageNum":  52
    },
    {
        "type":  "reflection",
        "prompt":  "What does love mean to me, beyond just a feeling?",
        "pageNum":  53
    },
    {
        "type":  "content",
        "header":  "Making Them Feel Safe",
        "text":  [
                     "Safety is not just physical.",
                     "Emotional safety means they know you won\u0027t use their secrets against them in an argument.",
                     "It means they know you won\u0027t abandon them when they are sad.",
                     "It means they do not have to walk on eggshells around your moods.",
                     "\u003cstrong\u003eAre you a safe harbor, or are you the storm?\u003c/strong\u003e"
                 ],
        "pageNum":  54
    },
    {
        "type":  "content",
        "header":  "Love as a Choice",
        "subtitle":  "Especially when it\u0027s hard.",
        "text":  [
                     "There will be days when the feeling of love is completely absent.",
                     "You will be irritated, tired, and disconnected.",
                     "That is the exact moment when love matters most.",
                     "Because in that moment, love is not a feeling. It is a decision.",
                     "\u003cstrong\u003eWill you choose to speak kindly even when you don\u0027t feel like it?\u003c/strong\u003e",
                     "That is true romance."
                 ],
        "pageNum":  55
    },
    {
        "type":  "reminder",
        "text":  "To pay attention is the highest form of love. The syllabus is always changing.",
        "pageNum":  56
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter VIII",
        "chapterTitle":  "When You Hurt Someone You Love",
        "pageNum":  57
    },
    {
        "type":  "content",
        "header":  "Understanding Their Timeline",
        "text":  [
                     "You do not get to dictate how long it takes for someone to forgive you.",
                     "You caused the wound; you do not get to yell at them for bleeding too long.",
                     "If they need space, give it. If they need reassurance, give it.",
                     "\u003cstrong\u003eBe as patient with their healing as they have been with your mistakes.\u003c/strong\u003e"
                 ],
        "pageNum":  58
    },
    {
        "type":  "special",
        "header":  "Read This When You Don\u0027t Know How to Apologize",
        "text":  [
                     "You are staring at them, or at your phone, and the words are stuck in your throat.",
                     "You feel pride welling up, telling you to stay silent.",
                     "Swallow the pride.",
                     "Say this: \u0027I don\u0027t know exactly what to say, and I feel terrible about what happened. I know I hurt you. I was wrong, and I want to fix it.\u0027",
                     "\u003cstrong\u003eStart there. The rest will follow.\u003c/strong\u003e"
                 ],
        "pageNum":  59
    },
    {
        "type":  "reflection",
        "prompt":  "Think of a time I gave a bad apology.",
        "subtitle":  "How would the better version of me rewrite it?",
        "pageNum":  60
    },
    {
        "type":  "content",
        "header":  "Rebuilding Trust",
        "subtitle":  "Brick by brick.",
        "text":  [
                     "Rebuilding trust is like building a brick wall.",
                     "You lay one brick of honesty at a time.",
                     "You tell the truth about small things. You show up when you say you will.",
                     "Slowly, the wall gets taller.",
                     "\u003cstrong\u003eBut remember: one lie can knock down a hundred bricks.\u003c/strong\u003e"
                 ],
        "pageNum":  61
    },
    {
        "type":  "special",
        "header":  "Read This When They Bring Up the Past Again",
        "text":  [
                     "It is frustrating when they bring up a mistake you have already apologized for.",
                     "You feel like you are being punished twice.",
                     "But understand this: They are not trying to punish you.",
                     "They are trying to heal, and the wound still hurts.",
                     "\u003cstrong\u003eDo not get defensive. Simply say, \u0027I know I hurt you then, and I am still so sorry. I am here with you now.\u0027\u003c/strong\u003e"
                 ],
        "pageNum":  62
    },
    {
        "type":  "quote",
        "text":  "Repairing a relationship is not a sprint. It is a marathon. It requires endurance.",
        "pageNum":  63
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter IX",
        "chapterTitle":  "Learning to Control Yourself",
        "pageNum":  64
    },
    {
        "type":  "content",
        "header":  "The Gap",
        "subtitle":  "Between stimulus and response.",
        "text":  [
                     "Between every stimulus and response, there is a gap.",
                     "In that gap lies your power.",
                     "Most mistakes are made because we collapse the gap.",
                     "Someone says something sharp, and we immediately say something sharper back.",
                     "\u003cstrong\u003eYour goal is to stretch that gap. Breathe. Let the thought form, look at it, and then decide if it is actually helpful before you speak it.\u003c/strong\u003e"
                 ],
        "pageNum":  65
    },
    {
        "type":  "content",
        "header":  "Taming the Fire",
        "text":  [
                     "Anger is a fire.",
                     "When you are angry, your instinct is to throw fuel on itâ€”to raise your voice, to pace the room, to dig up old arguments.",
                     "But a fire needs oxygen.",
                     "Close your mouth. Slow your breathing. Walk away for ten minutes.",
                     "\u003cstrong\u003eYou are not surrendering the argument; you are saving the relationship from the ashes.\u003c/strong\u003e"
                 ],
        "pageNum":  66
    },
    {
        "type":  "reflection",
        "prompt":  "What do I do when I am angry?",
        "subtitle":  "And how does it affect the people around me?",
        "pageNum":  67
    },
    {
        "type":  "content",
        "header":  "Words Are Not Air",
        "text":  [
                     "You cannot \u0027unsay\u0027 things.",
                     "When you say something cruel in the heat of the moment, you might forget it an hour later when you calm down.",
                     "But the person you said it to will remember it for years.",
                     "\u003cstrong\u003eYour words have weight. They leave bruises. Treat your words like loaded weapons. Do not point them at the people you love.\u003c/strong\u003e"
                 ],
        "pageNum":  68
    },
    {
        "type":  "special",
        "header":  "Read This When You Made the Same Mistake Again",
        "text":  [
                     "You slipped.",
                     "You promised yourself you wouldn\u0027t react that way again, and yet, here you are.",
                     "It is okay to be frustrated with yourself.",
                     "But do not let a slip turn into a slide.",
                     "Acknowledge the mistake immediately. Apologize without defending it.",
                     "\u003cstrong\u003eTomorrow is a new day to try again. Keep trying until the slips become rare.\u003c/strong\u003e"
                 ],
        "pageNum":  69
    },
    {
        "type":  "reminder",
        "text":  "When you feel jealous, do not interrogate them. Interrogate yourself. What are you actually afraid of?",
        "pageNum":  70
    },
    {
        "type":  "content",
        "header":  "The Art of the Pause",
        "text":  [
                     "Your brain is capable of processing information much faster than you can speak.",
                     "Use that speed.",
                     "When you are triggered, count to five.",
                     "One. Two. Three. Four. Five.",
                     "\u003cstrong\u003eIn those five seconds, the most impulsive, destructive part of your brain will tire out, and the rational, loving part can take the wheel.\u003c/strong\u003e"
                 ],
        "pageNum":  71
    },
    {
        "type":  "reflection",
        "prompt":  "What usually happens when I don\u0027t pause?",
        "pageNum":  72
    },
    {
        "type":  "special",
        "header":  "Read This Before You Raise Your Voice",
        "text":  [
                     "Lower your volume.",
                     "Raising your voice does not make your point stronger; it only makes it harder to hear.",
                     "When you yell, their brain goes into fight-or-flight mode.",
                     "They literally cannot process your logic when they are assessing your threat level.",
                     "\u003cstrong\u003eWhisper if you have to. But do not yell.\u003c/strong\u003e"
                 ],
        "pageNum":  73
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter X",
        "chapterTitle":  "Forgiving Yourself",
        "pageNum":  74
    },
    {
        "type":  "content",
        "header":  "The Difference Between Forgetting and Forgiving",
        "text":  [
                     "To forgive yourself is not to develop amnesia.",
                     "You do not forget what you did.",
                     "You simply decide that the punishment phase is over.",
                     "You have learned the lesson. You have paid the toll.",
                     "\u003cstrong\u003eNow, you must let yourself walk out of the prison you built.\u003c/strong\u003e"
                 ],
        "pageNum":  75
    },
    {
        "type":  "content",
        "header":  "You Are Not Your Worst Moment",
        "subtitle":  "A complex, messy, evolving human being.",
        "text":  [
                     "If a camera recorded your absolute worst moment and played it for the world, you would look like a villain.",
                     "But you are also the person who makes them coffee.",
                     "You are the person who holds them when they cry.",
                     "\u003cstrong\u003eDo not define your entire existence by your lowest points.\u003c/strong\u003e"
                 ],
        "pageNum":  76
    },
    {
        "type":  "special",
        "header":  "Read This When You Need to Forgive Yourself",
        "text":  [
                     "Put your hand on your chest.",
                     "Feel that steady rhythm.",
                     "You are alive. You are here. You are trying.",
                     "You caused pain, yes. But you also hold the capacity to heal.",
                     "Release the grip you have on your own throat.",
                     "\u003cstrong\u003eForgive yourself, not because you were right, but because you need the energy to be better tomorrow.\u003c/strong\u003e"
                 ],
        "pageNum":  77
    },
    {
        "type":  "reflection",
        "prompt":  "What is something I need to forgive myself for?",
        "pageNum":  78
    },
    {
        "type":  "content",
        "header":  "The Arrogance of Self-Punishment",
        "text":  [
                     "If the person you hurt has forgiven you, but you refuse to forgive yourself, you are telling them that their forgiveness is not good enough.",
                     "It is a strange form of arrogance.",
                     "Accept their grace.",
                     "\u003cstrong\u003eSay thank you, and let it wash over you.\u003c/strong\u003e"
                 ],
        "pageNum":  79
    },
    {
        "type":  "content",
        "header":  "The Compassion Mirror",
        "text":  [
                     "If your best friend came to you and confessed to the exact same mistake you made, what would you tell them?",
                     "Would you tell them they are worthless? Would you tell them to hate themselves forever?",
                     "No.",
                     "You would tell them that they messed up, but they are still a good person.",
                     "\u003cstrong\u003eWhy do you refuse to give yourself the same compassion?\u003c/strong\u003e"
                 ],
        "pageNum":  80
    },
    {
        "type":  "reflection",
        "prompt":  "What would it feel like to finally put the burden of my past mistakes down?",
        "pageNum":  81
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XI",
        "chapterTitle":  "Becoming Better",
        "pageNum":  82
    },
    {
        "type":  "content",
        "header":  "Small Daily Changes",
        "text":  [
                     "You do not become a better person by making one grand declaration.",
                     "You become a better person by making a hundred tiny, invisible choices every day.",
                     "Choosing to listen instead of interrupt.",
                     "Choosing to wash the dishes without being asked.",
                     "\u003cstrong\u003eThe grand gestures are easy. The daily disciplines are what build a life.\u003c/strong\u003e"
                 ],
        "pageNum":  83
    },
    {
        "type":  "content",
        "header":  "The Habit of Honesty",
        "subtitle":  "Honesty is a muscle.",
        "text":  [
                     "Start telling the truth about the little things.",
                     "If you forgot to do something, say \u0027I forgot,\u0027 instead of making an excuse.",
                     "If you exercise it on the small things, it will be strong enough to hold the heavy things when you need it to."
                 ],
        "pageNum":  84
    },
    {
        "type":  "reflection",
        "prompt":  "What is one small, practical thing I can do differently today?",
        "pageNum":  85
    },
    {
        "type":  "reminder",
        "text":  "A promise is a small piece of trust you hand to someone. Let your word be something they can rest their weight on.",
        "pageNum":  86
    },
    {
        "type":  "content",
        "header":  "Learning from Conflict",
        "text":  [
                     "Every argument is a map.",
                     "It shows you where the hidden landmines are in your relationship.",
                     "After the dust settles, do not just walk away in relief.",
                     "Sit down together and look at the map.",
                     "\u003cstrong\u003eAsk: \u0027How did we get here? And how do we avoid this specific landmine next time?\u0027\u003c/strong\u003e"
                 ],
        "pageNum":  87
    },
    {
        "type":  "content",
        "header":  "The Power of \u0027I Was Wrong\u0027",
        "text":  [
                     "There is immense power in admitting you were wrong.",
                     "It immediately diffuses the tension.",
                     "It shows that you value the truth more than your own ego.",
                     "The next time you realize you are losing an argument because your facts are wrong, stop fighting.",
                     "\u003cstrong\u003eSmile and say, \u0027You know what? You\u0027re right. I was wrong about that.\u0027\u003c/strong\u003e Watch how the energy shifts."
                 ],
        "pageNum":  88
    },
    {
        "type":  "reflection",
        "prompt":  "When was the last time I easily admitted I was wrong?",
        "pageNum":  89
    },
    {
        "type":  "quote",
        "text":  "Effort is the most romantic thing in the world.",
        "pageNum":  90
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XII",
        "chapterTitle":  "When You Are Afraid of Losing Someone",
        "pageNum":  91
    },
    {
        "type":  "content",
        "header":  "The Illusion of Control",
        "text":  [
                     "When we are afraid of losing someone, we often try to grip them tighter.",
                     "We check their phone. We ask constant questions. We become suffocating.",
                     "But love is not a bird you can trap in a cage.",
                     "The tighter you squeeze, the more they will want to escape.",
                     "\u003cstrong\u003eYou cannot protect love through control.\u003c/strong\u003e"
                 ],
        "pageNum":  92
    },
    {
        "type":  "content",
        "header":  "Open Hands",
        "text":  [
                     "Love can only truly exist in open hands.",
                     "You have to love them enough to let them choose you every day, freely.",
                     "And you have to trust that if you are a good, kind, and loving partner, they will want to stay.",
                     "\u003cstrong\u003eIf they don\u0027t, no amount of control would have stopped them anyway.\u003c/strong\u003e"
                 ],
        "pageNum":  93
    },
    {
        "type":  "special",
        "header":  "Read This When You Are Afraid They Will Leave",
        "text":  [
                     "Take a deep breath. Anxiety is lying to you.",
                     "It is projecting your worst fears into the future and telling you it is reality.",
                     "Come back to the present. Look at the evidence of their love today.",
                     "\u003cstrong\u003eAnd focus your energy not on worrying about them leaving, but on being someone worth staying for.\u003c/strong\u003e"
                 ],
        "pageNum":  94
    },
    {
        "type":  "reflection",
        "prompt":  "How does my fear of losing them make me act?",
        "pageNum":  95
    },
    {
        "type":  "content",
        "header":  "Loving Without Clinging",
        "text":  [
                     "To love someone without clinging is an art.",
                     "It means saying, \u0027I want you here, but I do not need to trap you here.\u0027",
                     "It means trusting that what is meant for you will not require a cage.",
                     "\u003cstrong\u003eRelax your grip. Let them breathe. Let yourself breathe.\u003c/strong\u003e"
                 ],
        "pageNum":  96
    },
    {
        "type":  "quote",
        "text":  "The more you trust them and give them freedom, the more they want to stay.",
        "pageNum":  97
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XIII",
        "chapterTitle":  "For the Difficult Days",
        "pageNum":  98
    },
    {
        "type":  "special",
        "header":  "Read This When You Miss Someone",
        "text":  [
                     "Missing someone is like an ache in the bone.",
                     "It is a dull, constant reminder of a presence that is no longer there.",
                     "Allow yourself to feel it. Do not try to distract yourself immediately. Let the grief wash over you.",
                     "But remember that missing them does not mean you have to break their boundaries.",
                     "\u003cstrong\u003eSometimes, the most loving thing you can do is miss them quietly.\u003c/strong\u003e"
                 ],
        "pageNum":  99
    },
    {
        "type":  "special",
        "header":  "Read This When You Feel Lonely",
        "text":  [
                     "Loneliness is a quiet room that forces you to listen to your own thoughts.",
                     "It is terrifying at first.",
                     "But if you sit in it long enough, you realize that you are the only company you are guaranteed for the rest of your life.",
                     "\u003cstrong\u003eMake peace with yourself. Become someone you enjoy being alone with.\u003c/strong\u003e"
                 ],
        "pageNum":  100
    },
    {
        "type":  "special",
        "header":  "Read This When You Are Angry",
        "text":  [
                     "Your blood is hot. Your mind is racing.",
                     "You want to say something sharp. You want to make them feel the way you are feeling.",
                     "Stop.",
                     "Close your eyes.",
                     "Breathe in for four seconds. Hold for four. Out for four. Do this ten times.",
                     "\u003cstrong\u003eThe anger will still be there, but it will no longer be driving the car.\u003c/strong\u003e"
                 ],
        "pageNum":  101
    },
    {
        "type":  "special",
        "header":  "Read This When You Want to Give Up",
        "text":  [
                     "It feels like too much work.",
                     "You are tired of failing, tired of trying, tired of apologizing.",
                     "It would be easier to just walk away and be exactly who you used to be. But you left that version of yourself for a reason.",
                     "\u003cstrong\u003eYou are in the messy middle. Keep walking. The clearing is ahead.\u003c/strong\u003e"
                 ],
        "pageNum":  102
    },
    {
        "type":  "special",
        "header":  "Read This When You Are Disappointed in Yourself",
        "text":  [
                     "You set a standard for yourself, and you failed to meet it.",
                     "It is okay to be disappointed.",
                     "But do not unpack and live in that disappointment.",
                     "Let the bitter taste of failing yourself be the fuel you need to try harder tomorrow.",
                     "\u003cstrong\u003eYou are allowed to be a work in progress.\u003c/strong\u003e"
                 ],
        "pageNum":  103
    },
    {
        "type":  "special",
        "header":  "Read This When You Feel Misunderstood",
        "text":  [
                     "Sometimes, despite your best efforts, they will not understand what you meant.",
                     "They will assume the worst of your intentions.",
                     "It is deeply painful.",
                     "But you cannot control their perception of you in this moment. You can only control your reaction.",
                     "\u003cstrong\u003eStay calm. State your truth gently. And let time do the rest.\u003c/strong\u003e"
                 ],
        "pageNum":  104
    },
    {
        "type":  "special",
        "header":  "Read This When You Are Exhausted",
        "text":  [
                     "Healing is tiring work.",
                     "It burns calories. It takes a toll on your nervous system.",
                     "If you are exhausted, it means you are doing the work.",
                     "It means you are fighting decades of muscle memory.",
                     "\u003cstrong\u003eRest. Take a nap. Drink a glass of water. Do not quit; just rest.\u003c/strong\u003e"
                 ],
        "pageNum":  105
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XIV",
        "chapterTitle":  "Letters",
        "pageNum":  106
    },
    {
        "type":  "content",
        "header":  "A Letter to My Younger Self",
        "text":  [
                     "I am sorry that no one taught you how to process your emotions.",
                     "I am sorry that you learned to protect yourself with anger and walls.",
                     "But I want you to know that it is okay to put the armor down now.",
                     "We are safe.",
                     "\u003cstrong\u003eYou don\u0027t have to fight every battle anymore.\u003c/strong\u003e"
                 ],
        "pageNum":  107
    },
    {
        "type":  "reflection",
        "prompt":  "What would I tell my younger self right now?",
        "pageNum":  108
    },
    {
        "type":  "content",
        "header":  "A Letter to the Person I Hurt",
        "text":  [
                     "I see the pain I caused you, and I do not want to look away from it anymore.",
                     "I am sorry for the nights you cried when you should have been sleeping.",
                     "I am sorry for the times I made you question your worth.",
                     "You have always been enough. It was my own insufficiency that made me act that way.",
                     "\u003cstrong\u003eI am working every day to become a person who only adds peace to your life.\u003c/strong\u003e"
                 ],
        "pageNum":  109
    },
    {
        "type":  "content",
        "header":  "A Letter to the Person I Want to Become",
        "text":  [
                     "I am building you.",
                     "It is slow work. It requires tearing down a lot of old foundations.",
                     "But I can see you clearly.",
                     "You are calm. You listen. You love without condition.",
                     "You take responsibility. You do not run from conflict, but you handle it gently.",
                     "\u003cstrong\u003eI am coming to meet you. Wait for me.\u003c/strong\u003e"
                 ],
        "pageNum":  110
    },
    {
        "type":  "reflection",
        "prompt":  "Who is the person I want to become?",
        "pageNum":  111
    },
    {
        "type":  "content",
        "header":  "A Letter for the Day I Finally Change",
        "text":  [
                     "If you are reading this, and you have finally strung together months of healthy choices, consistency, and peace...",
                     "I am so proud of you.",
                     "You did the impossible.",
                     "You broke the cycle.",
                     "\u003cstrong\u003eDo not forget how hard it was. Do not forget the tears it took to get here. Protect this new life fiercely.\u003c/strong\u003e"
                 ],
        "pageNum":  112
    },
    {
        "type":  "content",
        "header":  "A Letter to the Person Who Stayed",
        "text":  [
                     "Thank you.",
                     "Thank you for the times you held your ground when I pushed.",
                     "Thank you for seeing the man I could be, even when I was acting like a child.",
                     "I know I have not made it easy.",
                     "\u003cstrong\u003eBut I promise you, I am working to be the soft place to land that you have always been for me.\u003c/strong\u003e"
                 ],
        "pageNum":  113
    },
    {
        "type":  "reflection",
        "prompt":  "Write a letter of apology to yourself.",
        "subtitle":  "Take your time.",
        "pageNum":  114
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XV",
        "chapterTitle":  "The Person I Am Becoming",
        "pageNum":  115
    },
    {
        "type":  "content",
        "header":  "Identity Shift",
        "text":  [
                     "You are no longer \u0027someone who tries to be good.\u0027",
                     "You are becoming a good person.",
                     "It is a shift in identity.",
                     "When you are tempted to lie, you don\u0027t say \u0027I shouldn\u0027t lie.\u0027 You say, \u0027I am not a liar.\u0027",
                     "When you are tempted to yell, you say, \u0027I am not someone who yells.\u0027",
                     "\u003cstrong\u003eLet your new identity dictate your actions.\u003c/strong\u003e"
                 ],
        "pageNum":  116
    },
    {
        "type":  "reminder",
        "text":  "True growth does not need to announce itself. Let your actions be the announcement.",
        "pageNum":  117
    },
    {
        "type":  "reflection",
        "prompt":  "What is one old habit I am finally starting to break?",
        "pageNum":  118
    },
    {
        "type":  "content",
        "header":  "Patience with the Process",
        "text":  [
                     "You are unlearning decades of conditioning.",
                     "It will take more than a few weeks.",
                     "Be as patient with yourself as you want others to be with you.",
                     "Celebrate the small victories.",
                     "\u003cstrong\u003eYou paused for three seconds today before responding? That is a victory. Claim it.\u003c/strong\u003e"
                 ],
        "pageNum":  119
    },
    {
        "type":  "content",
        "header":  "The Quiet Pride",
        "text":  [
                     "One day, you will realize that you haven\u0027t raised your voice in months.",
                     "You will realize that the last time you felt jealous, you handled it internally without starting a fight.",
                     "You will realize that you are keeping your promises.",
                     "It will not happen with fireworks. It will happen quietly.",
                     "\u003cstrong\u003eAnd you will feel a deep, quiet pride in the person you have built.\u003c/strong\u003e"
                 ],
        "pageNum":  120
    },
    {
        "type":  "reflection",
        "prompt":  "What would the better version of me do differently?",
        "pageNum":  121
    },
    {
        "type":  "quote",
        "text":  "One day, you will wake up and the healthy choice will be the automatic choice.",
        "pageNum":  122
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XVI",
        "chapterTitle":  "Keep Going",
        "pageNum":  123
    },
    {
        "type":  "content",
        "header":  "The Work Never Truly Ends",
        "text":  [
                     "There is no finish line.",
                     "You do not suddenly cross a threshold and become a perfect, enlightened being who never makes a mistake.",
                     "The goal is not perfection.",
                     "\u003cstrong\u003eThe goal is simply a shorter recovery time.\u003c/strong\u003e",
                     "When you fall, you get up faster. You apologize sooner. You correct the behavior quicker."
                 ],
        "pageNum":  124
    },
    {
        "type":  "content",
        "header":  "A Final Promise",
        "text":  [
                     "Make a promise to yourself right now.",
                     "Promise that no matter how hard it gets, no matter how many times you stumble, you will not revert to the person you were.",
                     "You have seen the light now.",
                     "You know what love actually looks like.",
                     "\u003cstrong\u003eDo not go back to sleep.\u003c/strong\u003e"
                 ],
        "pageNum":  125
    },
    {
        "type":  "reminder",
        "text":  "You are entirely capable of being the partner they deserve. The blueprint is in your hands.",
        "pageNum":  126
    },
    {
        "type":  "content",
        "header":  "The Long Game",
        "text":  [
                     "Healing is the longest game you will ever play.",
                     "There are no shortcuts.",
                     "There are no cheat codes.",
                     "\u003cstrong\u003eBut every single day you choose to be honest, accountable, and kind, you are winning.\u003c/strong\u003e",
                     "Do not stop playing.",
                     "Do not stop growing."
                 ],
        "pageNum":  127
    },
    {
        "type":  "content",
        "header":  "A Life Well Loved",
        "text":  [
                     "At the end of it all, you will not remember the arguments you \u0027won.\u0027",
                     "You will remember the times you connected.",
                     "You will remember the laughter, the quiet mornings, the apologies that healed old wounds.",
                     "Focus on what matters.",
                     "\u003cstrong\u003eLove well. Live well. Be well.\u003c/strong\u003e"
                 ],
        "pageNum":  128
    },
    {
        "type":  "reflection",
        "prompt":  "What am I taking away from this book?",
        "subtitle":  "Write it down so you don\u0027t forget.",
        "pageNum":  129
    },
    {
        "type":  "quote",
        "text":  "You cannot change what you did yesterday. But you can decide what kind of person wakes up tomorrow.",
        "subtitle":  "Close this book. And go be that person.",
        "pageNum":  130
    },
    {
        "type":  "cover",
        "title":  "Keep Growing",
        "subtitle":  "A Gentle Reminder",
        "pageNum":  131
    }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { bookPages }; }
