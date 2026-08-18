const bookPages = [
    {
        "type":  "cover",
        "title":  "A Gentle Reminder",
        "subtitle":  "For you, for us, for healing.",
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
        "type":  "content",
        "header":  "Dedication",
        "text":  [
                     "To anyone who has ever looked back with regret and wished they had known better.",
                     "And to the ones who stayed, waiting for us to figure it out."
                 ],
        "pageNum":  4
    },
    {
        "type":  "content",
        "header":  "Before You Begin",
        "text":  [
                     "This is not a book that will tell you what you want to hear.",
                     "It will not make excuses for your behavior, and it will not pretend that apologies magically fix everything.",
                     "But it is also not a book that will ask you to hate yourself forever.",
                     "It is written with the belief that you can look honestly at the ways you have failed, without believing that you are a failure.",
                     "Take your time with these pages. Read them when you need to be held accountable, and read them when you need to be forgiven."
                 ],
        "pageNum":  5
    },
    {
        "type":  "content",
        "header":  "Introduction",
        "text":  [
                     "We all make mistakes.",
                     "Sometimes, we hurt the people who love us the most. Not because we want to, but because we are still learning how to heal ourselves.",
                     "This is a gentle reminder that you are capable of change. You are capable of being better, for yourself and for the people you love.",
                     "You cannot undo every mistake, but you can become someone who no longer repeats it."
                 ],
        "pageNum":  6
    },
    {
        "type":  "content",
        "header":  "How to Use This Book",
        "text":  [
                     "Treat this like a quiet conversation.",
                     "Some pages are short, meant to be read on days when everything feels heavy.",
                     "Other pages ask you to reflect. Be honest when you answer those.",
                     "If you find a page that speaks directly to your current situation, bookmark it. Return to it.",
                     "You don\u0027t have to read it all at once. Let it be a companion on your journey to becoming someone you can be proud of."
                 ],
        "pageNum":  7
    },
    {
        "type":  "toc",
        "pageNum":  8,
        "toc_entries":  [
                            {
                                "chapter":  "Chapter I",
                                "title":  "Begin Here",
                                "page":  9
                            },
                            {
                                "chapter":  "Chapter II",
                                "title":  "The Things We Don\u0027t Like About Ourselves",
                                "page":  21
                            },
                            {
                                "chapter":  "Chapter III",
                                "title":  "You Are Responsible, But You Are Not Hopeless",
                                "page":  33
                            },
                            {
                                "chapter":  "Chapter IV",
                                "title":  "The Weight of Guilt",
                                "page":  45
                            },
                            {
                                "chapter":  "Chapter V",
                                "title":  "Learning Why You Hurt People",
                                "page":  56
                            },
                            {
                                "chapter":  "Chapter VI",
                                "title":  "For the Person Who Loves You",
                                "page":  67
                            },
                            {
                                "chapter":  "Chapter VII",
                                "title":  "Love Is More Than Feelings",
                                "page":  78
                            },
                            {
                                "chapter":  "Chapter VIII",
                                "title":  "When You Hurt Someone You Love",
                                "page":  87
                            },
                            {
                                "chapter":  "Chapter IX",
                                "title":  "Learning to Control Yourself",
                                "page":  96
                            },
                            {
                                "chapter":  "Chapter X",
                                "title":  "Forgiving Yourself",
                                "page":  106
                            },
                            {
                                "chapter":  "Chapter XI",
                                "title":  "Becoming Better",
                                "page":  114
                            },
                            {
                                "chapter":  "Chapter XII",
                                "title":  "When You Are Afraid of Losing Someone",
                                "page":  123
                            },
                            {
                                "chapter":  "Chapter XIII",
                                "title":  "For the Difficult Days",
                                "page":  130
                            },
                            {
                                "chapter":  "Chapter XIV",
                                "title":  "Letters",
                                "page":  138
                            },
                            {
                                "chapter":  "Chapter XV",
                                "title":  "The Person I Am Becoming",
                                "page":  147
                            },
                            {
                                "chapter":  "Chapter XVI",
                                "title":  "Keep Going",
                                "page":  155
                            }
                        ]
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter I",
        "chapterTitle":  "Begin Here",
        "pageNum":  9
    },
    {
        "type":  "content",
        "header":  "The Courage to Look",
        "text":  [
                     "You are here because something needs to change.",
                     "You have realized that the way you have been navigating your relationships, your emotions, or your reactions is no longer working.",
                     "Admitting this is incredibly painful.",
                     "It is much easier to blame others, to defend your actions, or to pretend that everything is fine.",
                     "But you are choosing to look in the mirror.",
                     "That is the hardest, but most important, first step."
                 ],
        "pageNum":  10
    },
    {
        "type":  "content",
        "header":  "Dropping the Defense",
        "text":  [
                     "When we are told that our actions hurt someone, our first instinct is often to build a wall.",
                     "We explain our intentions. We point out what they did wrong. We say, \u0027But I didn\u0027t mean to.\u0027",
                     "Intentions do not erase impact.",
                     "The beginning of change requires you to lower your weapons.",
                     "You must learn to hear \u0027You hurt me\u0027 without immediately replying with \u0027But...\u0027"
                 ],
        "pageNum":  11
    },
    {
        "type":  "reflection",
        "prompt":  "What am I avoiding admitting to myself?",
        "pageNum":  12
    },
    {
        "type":  "content",
        "header":  "The Uncomfortable Truth",
        "text":  [
                     "Change is not a switch you flip.",
                     "It is not a realization you have once and then suddenly you are a perfect person.",
                     "It is a slow, uncomfortable, and often frustrating process of unlearning.",
                     "You will have to unlearn how you handle anger. You will have to unlearn how you protect your ego. You will have to unlearn the ways you have been taught to communicate.",
                     "It will feel unnatural at first.",
                     "Do it anyway."
                 ],
        "pageNum":  13
    },
    {
        "type":  "special",
        "header":  "Read This When You Feel Like You Are Not Enough",
        "text":  [
                     "You are looking at your flaws and feeling overwhelmed.",
                     "You are wondering how anyone could love someone who still has so much to fix.",
                     "But remember this: perfection is not a requirement for love.",
                     "Effort is.",
                     "Consistency is.",
                     "A willingness to grow is.",
                     "You are enough, exactly as you are, to begin the work of becoming better."
                 ],
        "pageNum":  14
    },
    {
        "type":  "content",
        "header":  "The Myth of Overnight Healing",
        "text":  [
                     "Do not expect applause for finally doing the bare minimum.",
                     "Do not expect the people you hurt to immediately trust you just because you have decided to change.",
                     "Trust is built in drops and lost in buckets.",
                     "You are currently refilling the bucket.",
                     "It will take time.",
                     "Be patient with the process, and be patient with the people waiting for you to prove it."
                 ],
        "pageNum":  15
    },
    {
        "type":  "content",
        "header":  "A Small Reminder",
        "text":  [
                     "You are not the worst thing you have ever done.",
                     "But you are also not just the good intentions you hold in your head.",
                     "You are what you do from this moment forward."
                 ],
        "pageNum":  16
    },
    {
        "type":  "content",
        "header":  "The Resistance",
        "text":  [
                     "Your brain is wired to protect you from pain. And right now, looking at yourself is painful.",
                     "You will feel a strong pull to close this book, to scroll on your phone, to distract yourself with anything else.",
                     "Acknowledge the resistance.",
                     "Say to yourself, \u0027I am uncomfortable right now, and that is okay.\u0027",
                     "Growth only happens in the places that make us want to run away."
                 ],
        "pageNum":  17
    },
    {
        "type":  "content",
        "header":  "No More \u0027Buts\u0027",
        "text":  [
                     "The word \u0027but\u0027 is the eraser of accountability.",
                     "When you say, \u0027I\u0027m sorry I yelled, but you were ignoring me,\u0027 you have erased the apology.",
                     "You have shifted the blame back to them.",
                     "Practice ending your sentences at the apology.",
                     "\u0027I am sorry I yelled. It was wrong of me.\u0027 Full stop.",
                     "If there is an issue with them ignoring you, address it later, calmly. Do not use it as a shield."
                 ],
        "pageNum":  18
    },
    {
        "type":  "content",
        "header":  "The Comfort of the Known",
        "text":  [
                     "It is easier to remain broken than to do the work of healing.",
                     "Brokenness is familiar. It is a script you know how to read.",
                     "Healing requires stepping into the unknown.",
                     "It requires admitting you do not know everything. It requires being uncomfortable.",
                     "Step into the unknown. The familiar script was a tragedy anyway."
                 ],
        "pageNum":  19
    },
    {
        "type":  "reflection",
        "prompt":  "What negative habit feels comfortable to me right now?",
        "pageNum":  20
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter II",
        "chapterTitle":  "The Things We Don\u0027t Like About Ourselves",
        "pageNum":  21
    },
    {
        "type":  "content",
        "header":  "The Shadow",
        "text":  [
                     "We all have parts of ourselves we wish we could surgically remove.",
                     "The jealousy. The anger. The insecurity. The selfishness. The emotional immaturity.",
                     "We hide them because we are afraid that if anyone truly saw them, they would leave.",
                     "But hiding them does not make them disappear. It only gives them power in the dark.",
                     "The only way to strip them of their power is to drag them into the light and say, \u0027I see you. I own you. But you no longer control me.\u0027"
                 ],
        "pageNum":  22
    },
    {
        "type":  "content",
        "header":  "Where Anger Comes From",
        "text":  [
                     "Anger is rarely the first emotion.",
                     "Anger is the bodyguard. It steps in to protect you when you feel embarrassed, misunderstood, rejected, or afraid.",
                     "The next time you feel the heat of anger rising in your chest, pause.",
                     "Ask yourself: What is the softer emotion underneath this?",
                     "Are you actually angry, or are you just afraid of not being heard?"
                 ],
        "pageNum":  23
    },
    {
        "type":  "reflection",
        "prompt":  "What do I usually do when I feel insecure or threatened?",
        "pageNum":  24
    },
    {
        "type":  "content",
        "header":  "The Ego\u0027s Trick",
        "text":  [
                     "Your ego will tell you that admitting you are wrong makes you weak.",
                     "It will tell you that apologizing is a form of losing.",
                     "This is a lie.",
                     "It takes immense strength to look someone in the eye and say, \u0027I was wrong. I handled that poorly. I am sorry.\u0027",
                     "Weakness is doubling down on a mistake because you are too fragile to admit it."
                 ],
        "pageNum":  25
    },
    {
        "type":  "content",
        "header":  "Selfishness in Disguise",
        "text":  [
                     "Sometimes, our \u0027love\u0027 is actually just attachment.",
                     "We want the other person to act in ways that make us comfortable.",
                     "We want them to heal on our timeline.",
                     "We want them to forgive us quickly so we don\u0027t have to sit with the discomfort of our guilt.",
                     "True love requires stepping outside of your own needs and holding space for theirs."
                 ],
        "pageNum":  26
    },
    {
        "type":  "special",
        "header":  "Read This When You Hate Yourself",
        "text":  [
                     "You have realized the extent of your flaws, and the weight of it is crushing you.",
                     "You feel toxic, broken, and unworthy.",
                     "Please listen: Self-hatred is a lazy emotion.",
                     "It feels like accountability, but it is actually an escape.",
                     "If you simply hate yourself, you don\u0027t have to do the hard work of changing.",
                     "Instead of hating yourself, take responsibility. Hate the action, not the person.",
                     "You are a human being who is still learning."
                 ],
        "pageNum":  27
    },
    {
        "type":  "content",
        "header":  "Embracing the Flaws",
        "text":  [
                     "You do not need to eradicate every negative trait to be a good partner.",
                     "You just need to be aware of them.",
                     "Awareness gives you the critical half-second between feeling an impulse and acting on it.",
                     "In that half-second, you have a choice.",
                     "That choice is the difference between who you were yesterday and who you are today."
                 ],
        "pageNum":  28
    },
    {
        "type":  "content",
        "header":  "The Root of Insecurity",
        "text":  [
                     "Insecurity is a quiet voice that says, \u0027If they truly knew me, they wouldn\u0027t stay.\u0027",
                     "So, you try to control the narrative.",
                     "You try to appear stronger, smarter, or more detached.",
                     "But true connection requires vulnerability.",
                     "You cannot be fully loved until you are fully known. And you cannot be fully known if you are always wearing armor."
                 ],
        "pageNum":  29
    },
    {
        "type":  "reflection",
        "prompt":  "What am I most afraid they will find out about me?",
        "pageNum":  30
    },
    {
        "type":  "content",
        "header":  "Self-Awareness vs. Self-Correction",
        "text":  [
                     "Many people mistake self-awareness for self-correction.",
                     "Knowing that you have a bad temper does not make you a better person.",
                     "It just makes you an observant angry person.",
                     "The awareness is only step one. The correctionâ€”the active, difficult choice to act differentlyâ€”is step two.",
                     "Do not pat yourself on the back just for knowing your flaws."
                 ],
        "pageNum":  31
    },
    {
        "type":  "content",
        "header":  "The Fear of Being Found Out",
        "text":  [
                     "Many of us operate under a deep, quiet terror that we are imposters.",
                     "We fear that if our partner saw the truly ugly parts of us, they would pack their bags immediately.",
                     "But love does not require perfection; it requires authenticity.",
                     "If you want to be loved for who you truly are, you have to let them see who you truly are.",
                     "The ugly parts included."
                 ],
        "pageNum":  32
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter III",
        "chapterTitle":  "You Are Responsible, But You Are Not Hopeless",
        "pageNum":  33
    },
    {
        "type":  "content",
        "header":  "The Line Between Guilt and Shame",
        "text":  [
                     "Guilt says, \u0027I did a bad thing.\u0027",
                     "Shame says, \u0027I am a bad person.\u0027",
                     "Guilt is productive. It is your conscience telling you that your actions did not align with your values. It motivates you to repair the damage.",
                     "Shame is destructive. It tells you there is no point in trying because you are inherently flawed.",
                     "You must learn to listen to guilt and reject shame."
                 ],
        "pageNum":  34
    },
    {
        "type":  "content",
        "header":  "Owning the Impact",
        "text":  [
                     "When you hurt someone, their reaction is about their pain, not your character.",
                     "Do not make their pain about you.",
                     "If they are crying, do not say, \u0027Well now I feel like a monster.\u0027",
                     "That forces them to stop expressing their hurt and start comforting you.",
                     "Be strong enough to sit in the discomfort of knowing you caused it, without needing them to make you feel better."
                 ],
        "pageNum":  35
    },
    {
        "type":  "reflection",
        "prompt":  "How do I usually react when someone tells me I hurt them?",
        "pageNum":  36
    },
    {
        "type":  "content",
        "header":  "The Danger of Excuses",
        "text":  [
                     "\u0027I only did it because I was stressed.\u0027",
                     "\u0027I yelled because you provoked me.\u0027",
                     "\u0027I wouldn\u0027t have lied if you weren\u0027t so easily upset.\u0027",
                     "These are not apologies. These are justifications.",
                     "You are responsible for your reactions, regardless of the circumstances.",
                     "Until you accept 100% responsibility for your actions, you cannot change them."
                 ],
        "pageNum":  37
    },
    {
        "type":  "special",
        "header":  "Read This When You Think You Ruined Everything",
        "text":  [
                     "You made a mistake.",
                     "Maybe it was a big one. Maybe it was the same small one for the hundredth time.",
                     "You feel like the bridge is burned and the damage is irreversible.",
                     "Take a deep breath.",
                     "Unless you have completely broken a non-negotiable boundary, most things can be repaired with genuine, consistent effort.",
                     "Do not give up just because it got hard.",
                     "Go apologize. And then do better."
                 ],
        "pageNum":  38
    },
    {
        "type":  "content",
        "header":  "Action Over Words",
        "text":  [
                     "An apology without changed behavior is just manipulation.",
                     "You can write poetry about how sorry you are. You can cry. You can promise the stars.",
                     "But if you wake up the next day and do the exact same thing, your words mean nothing.",
                     "The best apology is changed behavior."
                 ],
        "pageNum":  39
    },
    {
        "type":  "content",
        "header":  "Hope in Action",
        "text":  [
                     "You are not hopeless.",
                     "The fact that you are reading these words, the fact that you care enough to try, proves that there is goodness inside you.",
                     "You have the capacity for deep empathy, profound love, and incredible growth.",
                     "You just have to choose it.",
                     "Over, and over, and over again."
                 ],
        "pageNum":  40
    },
    {
        "type":  "content",
        "header":  "The Anatomy of Deflection",
        "text":  [
                     "Deflection happens when the spotlight of accountability gets too hot.",
                     "You suddenly bring up a mistake they made three months ago.",
                     "This is a survival tactic.",
                     "It is your ego throwing a smoke bomb.",
                     "Recognize when you are reaching for the smoke bomb, and choose to stay in the heat instead."
                 ],
        "pageNum":  41
    },
    {
        "type":  "reflection",
        "prompt":  "What is my favorite \u0027smoke bomb\u0027 to throw when I am caught in a mistake?",
        "pageNum":  42
    },
    {
        "type":  "content",
        "header":  "Stop Negotiating With Accountability",
        "text":  [
                     "Accountability is not a negotiation.",
                     "You do not get to say, \u0027I will admit I was wrong if you also admit you were wrong.\u0027",
                     "That is a transaction.",
                     "True accountability stands alone.",
                     "Take ownership of your actions regardless of what they do with theirs."
                 ],
        "pageNum":  43
    },
    {
        "type":  "special",
        "header":  "Read This When You Feel Falsely Accused",
        "text":  [
                     "Sometimes, they will be upset about something you genuinely did not mean to do.",
                     "You will feel the overwhelming urge to defend your intentions.",
                     "Remember: Intent vs. Impact.",
                     "You did not intend to step on their foot, but their foot still hurts.",
                     "Validate the hurt first. Explain the intention later, if necessary."
                 ],
        "pageNum":  44
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter IV",
        "chapterTitle":  "The Weight of Guilt",
        "pageNum":  45
    },
    {
        "type":  "content",
        "header":  "Carrying the Stone",
        "text":  [
                     "Guilt is a heavy stone to carry in your chest.",
                     "It wakes you up in the middle of the night. It replays your worst moments on a loop.",
                     "It tells you that you do not deserve happiness because of the pain you caused.",
                     "But carrying that stone forever does not serve anyone. It does not heal the person you hurt.",
                     "It only exhausts you."
                 ],
        "pageNum":  46
    },
    {
        "type":  "content",
        "header":  "Productive Regret",
        "text":  [
                     "Regret should be a teacher, not a jailer.",
                     "Let the memory of what you did wrong sting just enough to remind you why you never want to do it again.",
                     "Let it teach you the value of what you almost lost.",
                     "Let it show you the parts of yourself that need more discipline.",
                     "Learn the lesson, and then gently let the memory go."
                 ],
        "pageNum":  47
    },
    {
        "type":  "reflection",
        "prompt":  "What am I most sorry for, and what have I learned from it?",
        "pageNum":  48
    },
    {
        "type":  "content",
        "header":  "The Trap of Pity",
        "text":  [
                     "Do not throw pity parties for yourself.",
                     "When you constantly tell your partner how terrible you are, you are not being accountable.",
                     "You are subtly asking them to validate you.",
                     "You are making them reassure you.",
                     "Stop asking for reassurance when you should be providing stability.",
                     "Stand up. Take the hit. Be better."
                 ],
        "pageNum":  49
    },
    {
        "type":  "special",
        "header":  "Read This When You Cannot Stop Overthinking the Past",
        "text":  [
                     "The past is written in ink.",
                     "No amount of anxiety, no amount of replaying the conversation in your head, no amount of wishing you had done it differently will change what happened.",
                     "You are pouring all your energy into a time machine that does not exist.",
                     "Take that energy and pour it into today.",
                     "You cannot change what you did yesterday. But you can decide what kind of person wakes up tomorrow."
                 ],
        "pageNum":  50
    },
    {
        "type":  "content",
        "header":  "Making Amends",
        "text":  [
                     "Making amends is different from apologizing.",
                     "An apology is \u0027I am sorry I broke your vase.\u0027",
                     "Making amends is \u0027I bought you a new vase, and I am going to be more careful when I walk through this room.\u0027",
                     "Look at the damage you caused. Ask yourself: What can I actually DO to help repair this?"
                 ],
        "pageNum":  51
    },
    {
        "type":  "content",
        "header":  "Forgiving the Past Self",
        "text":  [
                     "The version of you that made those mistakes was operating with less wisdom, more fear, and less emotional control.",
                     "You can be disappointed in them.",
                     "But eventually, you have to realize that they were doing the best they could with the broken tools they had.",
                     "You have better tools now.",
                     "Forgive them, so you can move forward."
                 ],
        "pageNum":  52
    },
    {
        "type":  "content",
        "header":  "Letting Go of the Guilt-Loop",
        "text":  [
                     "You are not required to bleed forever.",
                     "If you have taken responsibility, if you have made amends, if you have changed the behavior... then continuing to punish yourself is just a form of self-indulgence.",
                     "It keeps the focus on you and your pain, rather than on the relationship.",
                     "Stop making them reassure you that you aren\u0027t terrible.",
                     "Be good, and let that be enough."
                 ],
        "pageNum":  53
    },
    {
        "type":  "special",
        "header":  "Read This When You Feel Ashamed",
        "text":  [
                     "Shame thrives in silence.",
                     "It tells you that you are uniquely broken and that no one could possibly understand.",
                     "But human history is built on people making terrible mistakes and learning from them.",
                     "You are not a monster. You are a person who made a bad choice.",
                     "Speak it out loud. Strip it of its power."
                 ],
        "pageNum":  54
    },
    {
        "type":  "content",
        "header":  "The Echo Chamber of Guilt",
        "text":  [
                     "Guilt loves an echo chamber.",
                     "If you isolate yourself, the guilt will bounce off the walls of your mind until it deafens you.",
                     "You have to open the windows.",
                     "Talk to a friend. Talk to a therapist. Talk to your partner.",
                     "Guilt cannot survive in the fresh air of honest conversation."
                 ],
        "pageNum":  55
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter V",
        "chapterTitle":  "Learning Why You Hurt People",
        "pageNum":  56
    },
    {
        "type":  "content",
        "header":  "The Root of the Reaction",
        "text":  [
                     "Nobody wakes up and decides, \u0027I am going to intentionally hurt the person I love today.\u0027",
                     "We hurt people because we are hurting, because we are afraid, or because we are protecting a wound we haven\u0027t healed.",
                     "If you want to stop hurting people, you have to find out what you are protecting.",
                     "Are you afraid of being abandoned? Are you terrified of not being in control? Do you feel inadequate?"
                 ],
        "pageNum":  57
    },
    {
        "type":  "content",
        "header":  "The Trigger is Not the Problem",
        "text":  [
                     "A trigger is just someone bumping into a bruise you already had.",
                     "When your partner says something that makes you explode, it is rarely about what they actually said.",
                     "It is about the old story their words woke up inside your head.",
                     "It is your responsibility to heal the bruise, so that when someone accidentally brushes against it, you do not burn the house down."
                 ],
        "pageNum":  58
    },
    {
        "type":  "reflection",
        "prompt":  "What specific words or actions usually trigger me, and why do I think that is?",
        "pageNum":  59
    },
    {
        "type":  "content",
        "header":  "Defensiveness",
        "text":  [
                     "Defensiveness is the enemy of connection.",
                     "When you are defensive, you are telling the other person that protecting your ego is more important than understanding their feelings.",
                     "The next time you feel the urge to say, \u0027Well, you did this...\u0027, stop.",
                     "Bite your tongue.",
                     "Listen to what they are saying. Find the grain of truth in it, even if you disagree with the rest."
                 ],
        "pageNum":  60
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
                     "Do not create a mess that the calm version of you will have to clean up tomorrow."
                 ],
        "pageNum":  61
    },
    {
        "type":  "content",
        "header":  "Impulsive Decisions",
        "text":  [
                     "Impulsivity feels like freedom in the moment, but it is actually a prison.",
                     "When you act on every passing emotion, you are a slave to your nervous system.",
                     "True freedom is having a thought, feeling an emotion, and choosing how to respond.",
                     "Create space between the feeling and the action."
                 ],
        "pageNum":  62
    },
    {
        "type":  "content",
        "header":  "The Stories We Tell Ourselves",
        "text":  [
                     "We don\u0027t react to what actually happened; we react to the story we tell ourselves about what happened.",
                     "If they don\u0027t text back, the story might be: \u0027They don\u0027t care about me.\u0027",
                     "You get angry at the story, not the reality.",
                     "Before you react, ask yourself: \u0027What is the story I am telling myself right now? And is it actually true?\u0027"
                 ],
        "pageNum":  63
    },
    {
        "type":  "reflection",
        "prompt":  "What is a negative story I constantly tell myself about my relationship?",
        "pageNum":  64
    },
    {
        "type":  "reflection",
        "prompt":  "When I am triggered, what do I physically feel in my body?",
        "pageNum":  65
    },
    {
        "type":  "content",
        "header":  "Tracking the Pattern",
        "text":  [
                     "Look back at your last three major arguments.",
                     "What was the common denominator?",
                     "It is rarely about the dishes, or the schedule, or the tone of voice.",
                     "It is usually about feeling unappreciated, unseen, or unsafe.",
                     "Find the pattern. Once you see the pattern, you can break it."
                 ],
        "pageNum":  66
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter VI",
        "chapterTitle":  "For the Person Who Loves You",
        "pageNum":  67
    },
    {
        "type":  "content",
        "header":  "The Gift of Patience",
        "text":  [
                     "Think about the person who has stayed by your side.",
                     "Think about the times you were difficult, stubborn, angry, or cold.",
                     "And yet, they chose to see the good in you.",
                     "They chose to believe that you were better than your worst moments.",
                     "Do not take that kind of love for granted.",
                     "It is a rare and precious gift, and if you drop it too many times, it will eventually break."
                 ],
        "pageNum":  68
    },
    {
        "type":  "content",
        "header":  "Seeing Them",
        "text":  [
                     "When was the last time you truly looked at them?",
                     "Not just glancing at them while looking at your phone.",
                     "Not just seeing them as a fixture in your life.",
                     "Look at the way they laugh. Look at the exhaustion in their eyes when they have carried too much. Look at how hard they try to love you.",
                     "Appreciate them loudly. Do not let them wonder if they matter to you."
                 ],
        "pageNum":  69
    },
    {
        "type":  "reflection",
        "prompt":  "What are three things I deeply appreciate about the person who loves me?",
        "pageNum":  70
    },
    {
        "type":  "content",
        "header":  "Protecting Their Heart",
        "text":  [
                     "When someone gives you their heart, they are trusting you not to crush it.",
                     "They are trusting you with their softest parts.",
                     "You are the guardian of that softness.",
                     "When you raise your voice, when you lie, when you dismiss their feelings, you are failing your duty as a protector.",
                     "Be the safest place they have ever known."
                 ],
        "pageNum":  71
    },
    {
        "type":  "special",
        "header":  "Read This When Someone Gives You Another Chance",
        "text":  [
                     "They did not give you another chance because you deserve it.",
                     "They gave you another chance because they love you, and they are hoping the version of you they believe in is real.",
                     "Do not make them regret it.",
                     "This is not the time to relax because you \u0027got them back.\u0027",
                     "This is the time to work twice as hard to prove that their faith in you was not a mistake."
                 ],
        "pageNum":  72
    },
    {
        "type":  "content",
        "header":  "Listening to Understand",
        "text":  [
                     "Most of us do not listen.",
                     "We wait for our turn to speak.",
                     "We formulate our counter-argument while the other person is still talking.",
                     "Today, try this: When they speak, look at them. Empty your mind. Just absorb what they are saying.",
                     "And when they finish, say, \u0027Tell me more about that.\u0027"
                 ],
        "pageNum":  73
    },
    {
        "type":  "content",
        "header":  "Noticing the Quiet Love",
        "text":  [
                     "Loud love is easy to see.",
                     "It is the gifts, the grand declarations, the passionate arguments.",
                     "But quiet love is what sustains a life.",
                     "It is the glass of water on your nightstand. It is them listening to you vent about work.",
                     "Do not become so addicted to loud love that you ignore the quiet ways they are choosing you every day."
                 ],
        "pageNum":  74
    },
    {
        "type":  "special",
        "header":  "Read This When You Want to Show Appreciation",
        "text":  [
                     "Do not wait for a special occasion.",
                     "Go to them right now.",
                     "Tell them something specific you love about them.",
                     "Not just \u0027I love you,\u0027 but \u0027I love how you always make me feel safe when I\u0027m stressed.\u0027",
                     "Specific praise waters the roots of a relationship."
                 ],
        "pageNum":  75
    },
    {
        "type":  "content",
        "header":  "The Reservoir",
        "text":  [
                     "Every time you show up, listen, and choose kindness, you are putting a drop in the reservoir.",
                     "When a drought comesâ€”when there is stress, illness, or a major argumentâ€”you will need that reservoir.",
                     "If the reservoir is empty, the relationship will dry up.",
                     "Fill the reservoir today."
                 ],
        "pageNum":  76
    },
    {
        "type":  "reflection",
        "prompt":  "How can I add a drop to the reservoir today?",
        "pageNum":  77
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter VII",
        "chapterTitle":  "Love Is More Than Feelings",
        "pageNum":  78
    },
    {
        "type":  "content",
        "header":  "The Verb of Love",
        "text":  [
                     "Love is not just a warm feeling in your chest.",
                     "Love is a verb. It is a series of choices.",
                     "Love is choosing to bite your tongue when you are annoyed.",
                     "Love is making the coffee in the morning.",
                     "Love is saying \u0027I\u0027m sorry\u0027 first.",
                     "Love is consistency when the feelings fade."
                 ],
        "pageNum":  79
    },
    {
        "type":  "content",
        "header":  "Respect is the Foundation",
        "text":  [
                     "You cannot love someone you do not respect.",
                     "And respect is shown in the small things.",
                     "It is shown in not talking over them. In valuing their time. In not making them the butt of your jokes.",
                     "If love is the house, respect is the foundation.",
                     "If the foundation crumbles, the house falls, no matter how beautiful it is."
                 ],
        "pageNum":  80
    },
    {
        "type":  "reflection",
        "prompt":  "What does love mean to me, beyond just a feeling?",
        "pageNum":  81
    },
    {
        "type":  "content",
        "header":  "Making Them Feel Safe",
        "text":  [
                     "Safety is not just physical.",
                     "Emotional safety means they know you won\u0027t use their secrets against them in an argument.",
                     "It means they know you won\u0027t abandon them when they are sad.",
                     "It means they do not have to walk on eggshells around your moods.",
                     "Are you a safe harbor, or are you the storm?"
                 ],
        "pageNum":  82
    },
    {
        "type":  "content",
        "header":  "Consistency",
        "text":  [
                     "Anyone can be wonderful for a week.",
                     "Anyone can plan a grand romantic gesture after a massive argument.",
                     "But the true measure of a partner is what they do on a random Tuesday.",
                     "Are you kind when you are tired?",
                     "Are you reliable when it is inconvenient?",
                     "Be consistently good, not occasionally great."
                 ],
        "pageNum":  83
    },
    {
        "type":  "content",
        "header":  "Love as a Choice",
        "text":  [
                     "There will be days when the feeling of love is completely absent.",
                     "You will be irritated, tired, and disconnected.",
                     "That is the exact moment when love matters most.",
                     "Because in that moment, love is not a feeling. It is a decision.",
                     "Will you choose to speak kindly even when you don\u0027t feel like it?",
                     "That is true romance."
                 ],
        "pageNum":  84
    },
    {
        "type":  "reflection",
        "prompt":  "What do I need to start doing to show love as an action?",
        "pageNum":  85
    },
    {
        "type":  "content",
        "header":  "Love is Paying Attention",
        "text":  [
                     "To pay attention is the highest form of love.",
                     "Noticing that they changed their hair.",
                     "Noticing that they are quiet today.",
                     "Noticing that they like a certain type of coffee.",
                     "Do not stop studying them just because you have been together for a while.",
                     "The syllabus is always changing."
                 ],
        "pageNum":  86
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter VIII",
        "chapterTitle":  "When You Hurt Someone You Love",
        "pageNum":  87
    },
    {
        "type":  "content",
        "header":  "The Anatomy of a Real Apology",
        "text":  [
                     "A real apology has four parts.",
                     "1. \u0027I am sorry for...\u0027 (State the specific action).",
                     "2. \u0027It was wrong because...\u0027 (Show you understand the impact).",
                     "3. \u0027In the future, I will...\u0027 (State the changed behavior).",
                     "4. \u0027Will you forgive me?\u0027 (Ask for their grace, without demanding it).",
                     "Leave out the word \u0027but\u0027."
                 ],
        "pageNum":  88
    },
    {
        "type":  "content",
        "header":  "Understanding Their Timeline",
        "text":  [
                     "You do not get to dictate how long it takes for someone to forgive you.",
                     "You caused the wound; you do not get to yell at them for bleeding too long.",
                     "If they need space, give it.",
                     "If they need reassurance, give it.",
                     "Be as patient with their healing as they have been with your mistakes."
                 ],
        "pageNum":  89
    },
    {
        "type":  "special",
        "header":  "Read This When You Don\u0027t Know How to Apologize",
        "text":  [
                     "You are staring at them, or at your phone, and the words are stuck in your throat.",
                     "You feel pride welling up, telling you to stay silent.",
                     "Swallow the pride.",
                     "Say this: \u0027I don\u0027t know exactly what to say, and I feel terrible about what happened. I know I hurt you. I was wrong, and I want to fix it.\u0027",
                     "Start there. The rest will follow."
                 ],
        "pageNum":  90
    },
    {
        "type":  "reflection",
        "prompt":  "Think of a time I gave a bad apology. How would the better version of me rewrite it?",
        "pageNum":  91
    },
    {
        "type":  "content",
        "header":  "Rebuilding Trust",
        "text":  [
                     "Rebuilding trust is like building a brick wall.",
                     "You lay one brick of honesty at a time.",
                     "You tell the truth about small things.",
                     "You show up when you say you will.",
                     "You do exactly what you promised.",
                     "Slowly, the wall gets taller.",
                     "But remember: one lie can knock down a hundred bricks."
                 ],
        "pageNum":  92
    },
    {
        "type":  "content",
        "header":  "The Patience of Rebuilding",
        "text":  [
                     "When you break trust, you are resetting the clock.",
                     "You do not get to say, \u0027But I\u0027ve been good for two weeks!\u0027",
                     "Two weeks of good behavior does not erase two years of instability.",
                     "You must settle in for the long haul.",
                     "Be relentlessly, boringly consistent.",
                     "That is how trust is rebuilt."
                 ],
        "pageNum":  93
    },
    {
        "type":  "special",
        "header":  "Read This When They Bring Up the Past Again",
        "text":  [
                     "It is frustrating when they bring up a mistake you have already apologized for.",
                     "You feel like you are being punished twice.",
                     "But understand this: They are not trying to punish you.",
                     "They are trying to heal, and the wound still hurts.",
                     "Do not get defensive. Simply say, \u0027I know I hurt you then, and I am still so sorry. I am here with you now.\u0027"
                 ],
        "pageNum":  94
    },
    {
        "type":  "content",
        "header":  "The Marathon of Repair",
        "text":  [
                     "Repairing a relationship is not a sprint.",
                     "You do not apologize on Monday and expect a parade on Friday.",
                     "It is a marathon.",
                     "It requires pacing yourself. It requires endurance.",
                     "It requires showing up and putting one foot in front of the other, long after the initial adrenaline of the apology has worn off."
                 ],
        "pageNum":  95
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter IX",
        "chapterTitle":  "Learning to Control Yourself",
        "pageNum":  96
    },
    {
        "type":  "content",
        "header":  "The Gap",
        "text":  [
                     "Between every stimulus and response, there is a gap.",
                     "In that gap lies your power.",
                     "Most mistakes are made because we collapse the gap.",
                     "Someone says something sharp, and we immediately say something sharper back.",
                     "Your goal is to stretch that gap.",
                     "Breathe. Let the thought form, look at it, and then decide if it is actually helpful before you speak it."
                 ],
        "pageNum":  97
    },
    {
        "type":  "content",
        "header":  "Taming the Fire",
        "text":  [
                     "Anger is a fire.",
                     "When you are angry, your instinct is to throw fuel on itâ€”to raise your voice, to pace the room, to dig up old arguments.",
                     "But a fire needs oxygen.",
                     "Close your mouth. Slow your breathing.",
                     "Walk away for ten minutes.",
                     "You are not surrendering the argument; you are saving the relationship from the ashes."
                 ],
        "pageNum":  98
    },
    {
        "type":  "reflection",
        "prompt":  "What do I do when I am angry, and how does it affect the people around me?",
        "pageNum":  99
    },
    {
        "type":  "content",
        "header":  "Words Are Not Air",
        "text":  [
                     "You cannot \u0027unsay\u0027 things.",
                     "When you say something cruel in the heat of the moment, you might forget it an hour later when you calm down.",
                     "But the person you said it to will remember it for years.",
                     "Your words have weight. They leave bruises.",
                     "Treat your words like loaded weapons. Do not point them at the people you love."
                 ],
        "pageNum":  100
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
                     "Tomorrow is a new day to try again. Keep trying until the slips become rare."
                 ],
        "pageNum":  101
    },
    {
        "type":  "content",
        "header":  "The Jealousy Trap",
        "text":  [
                     "Jealousy is an ugly emotion that wears the mask of love.",
                     "It tells you that you are protecting what is yours.",
                     "But love does not own.",
                     "Jealousy is just your own insecurity projected onto your partner.",
                     "When you feel jealous, do not interrogate them. Interrogate yourself.",
                     "What are you actually afraid of?"
                 ],
        "pageNum":  102
    },
    {
        "type":  "content",
        "header":  "The Art of the Pause",
        "text":  [
                     "Your brain is capable of processing information much faster than you can speak.",
                     "Use that speed.",
                     "When you are triggered, count to five.",
                     "One. Two. Three. Four. Five.",
                     "In those five seconds, the most impulsive, destructive part of your brain will tire out, and the rational, loving part can take the wheel."
                 ],
        "pageNum":  103
    },
    {
        "type":  "reflection",
        "prompt":  "What usually happens when I don\u0027t pause?",
        "pageNum":  104
    },
    {
        "type":  "special",
        "header":  "Read This Before You Raise Your Voice",
        "text":  [
                     "Lower your volume.",
                     "Raising your voice does not make your point stronger; it only makes it harder to hear.",
                     "When you yell, their brain goes into fight-or-flight mode.",
                     "They literally cannot process your logic when they are assessing your threat level.",
                     "Whisper if you have to. But do not yell."
                 ],
        "pageNum":  105
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter X",
        "chapterTitle":  "Forgiving Yourself",
        "pageNum":  106
    },
    {
        "type":  "content",
        "header":  "The Difference Between Forgetting and Forgiving",
        "text":  [
                     "To forgive yourself is not to develop amnesia.",
                     "You do not forget what you did.",
                     "You simply decide that the punishment phase is over.",
                     "You have learned the lesson. You have paid the toll.",
                     "Now, you must let yourself walk out of the prison you built."
                 ],
        "pageNum":  107
    },
    {
        "type":  "content",
        "header":  "You Are Not Your Worst Moment",
        "text":  [
                     "If a camera recorded your absolute worst moment and played it for the world, you would look like a villain.",
                     "But you are also the person who makes them coffee.",
                     "You are the person who holds them when they cry.",
                     "You are a complex, messy, evolving human being.",
                     "Do not define your entire existence by your lowest points."
                 ],
        "pageNum":  108
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
                     "Forgive yourself, not because you were right, but because you need the energy to be better tomorrow."
                 ],
        "pageNum":  109
    },
    {
        "type":  "reflection",
        "prompt":  "What is something I need to forgive myself for?",
        "pageNum":  110
    },
    {
        "type":  "content",
        "header":  "The Arrogance of Self-Punishment",
        "text":  [
                     "If the person you hurt has forgiven you, but you refuse to forgive yourself, you are telling them that their forgiveness is not good enough.",
                     "It is a strange form of arrogance.",
                     "Accept their grace.",
                     "Say thank you, and let it wash over you."
                 ],
        "pageNum":  111
    },
    {
        "type":  "content",
        "header":  "The Compassion Mirror",
        "text":  [
                     "If your best friend came to you and confessed to the exact same mistake you made, what would you tell them?",
                     "Would you tell them they are worthless? Would you tell them to hate themselves forever?",
                     "No.",
                     "You would tell them that they messed up, but they are still a good person.",
                     "Why do you refuse to give yourself the same compassion?"
                 ],
        "pageNum":  112
    },
    {
        "type":  "reflection",
        "prompt":  "What would it feel like to finally put the burden of my past mistakes down?",
        "pageNum":  113
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XI",
        "chapterTitle":  "Becoming Better",
        "pageNum":  114
    },
    {
        "type":  "content",
        "header":  "Small Daily Changes",
        "text":  [
                     "You do not become a better person by making one grand declaration.",
                     "You become a better person by making a hundred tiny, invisible choices every day.",
                     "Choosing to listen instead of interrupt.",
                     "Choosing to wash the dishes without being asked.",
                     "Choosing to say \u0027I love you\u0027 for no reason.",
                     "The grand gestures are easy. The daily disciplines are what build a life."
                 ],
        "pageNum":  115
    },
    {
        "type":  "content",
        "header":  "The Habit of Honesty",
        "text":  [
                     "Start telling the truth about the little things.",
                     "If you forgot to do something, say \u0027I forgot,\u0027 instead of making an excuse.",
                     "Honesty is a muscle.",
                     "If you exercise it on the small things, it will be strong enough to hold the heavy things when you need it to."
                 ],
        "pageNum":  116
    },
    {
        "type":  "reflection",
        "prompt":  "What is one small, practical thing I can do differently today?",
        "pageNum":  117
    },
    {
        "type":  "content",
        "header":  "Keeping Promises",
        "text":  [
                     "A promise is a small piece of trust you hand to someone.",
                     "When you break it, even a small one, you chip away at that trust.",
                     "Do not make promises you cannot keep.",
                     "And if you make one, move heaven and earth to keep it.",
                     "Let your word be something they can rest their weight on."
                 ],
        "pageNum":  118
    },
    {
        "type":  "content",
        "header":  "Learning from Conflict",
        "text":  [
                     "Every argument is a map.",
                     "It shows you where the hidden landmines are in your relationship.",
                     "After the dust settles, do not just walk away in relief.",
                     "Sit down together and look at the map.",
                     "Ask: \u0027How did we get here? And how do we avoid this specific landmine next time?\u0027"
                 ],
        "pageNum":  119
    },
    {
        "type":  "content",
        "header":  "The Power of \u0027I Was Wrong\u0027",
        "text":  [
                     "There is immense power in admitting you were wrong.",
                     "It immediately diffuses the tension.",
                     "It shows that you value the truth more than your own ego.",
                     "The next time you realize you are losing an argument because your facts are wrong, stop fighting.",
                     "Smile and say, \u0027You know what? You\u0027re right. I was wrong about that.\u0027",
                     "Watch how the energy shifts."
                 ],
        "pageNum":  120
    },
    {
        "type":  "reflection",
        "prompt":  "When was the last time I easily admitted I was wrong?",
        "pageNum":  121
    },
    {
        "type":  "content",
        "header":  "The Beauty of Trying",
        "text":  [
                     "There is something incredibly beautiful about watching someone try.",
                     "Watching them catch themselves before they say something mean.",
                     "Watching them take a deep breath instead of slamming a door.",
                     "It is clunky at first. It is awkward.",
                     "But effort is the most romantic thing in the world."
                 ],
        "pageNum":  122
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XII",
        "chapterTitle":  "When You Are Afraid of Losing Someone",
        "pageNum":  123
    },
    {
        "type":  "content",
        "header":  "The Illusion of Control",
        "text":  [
                     "When we are afraid of losing someone, we often try to grip them tighter.",
                     "We check their phone. We ask constant questions. We become suffocating.",
                     "But love is not a bird you can trap in a cage.",
                     "The tighter you squeeze, the more they will want to escape.",
                     "You cannot protect love through control."
                 ],
        "pageNum":  124
    },
    {
        "type":  "content",
        "header":  "Open Hands",
        "text":  [
                     "Love can only truly exist in open hands.",
                     "You have to love them enough to let them choose you every day, freely.",
                     "And you have to trust that if you are a good, kind, and loving partner, they will want to stay.",
                     "If they don\u0027t, no amount of control would have stopped them anyway."
                 ],
        "pageNum":  125
    },
    {
        "type":  "special",
        "header":  "Read This When You Are Afraid They Will Leave",
        "text":  [
                     "Take a deep breath.",
                     "Anxiety is lying to you.",
                     "It is projecting your worst fears into the future and telling you it is reality.",
                     "Come back to the present.",
                     "Look at the evidence of their love today.",
                     "And focus your energy not on worrying about them leaving, but on being someone worth staying for."
                 ],
        "pageNum":  126
    },
    {
        "type":  "reflection",
        "prompt":  "How does my fear of losing them make me act?",
        "pageNum":  127
    },
    {
        "type":  "content",
        "header":  "Loving Without Clinging",
        "text":  [
                     "To love someone without clinging is an art.",
                     "It means saying, \u0027I want you here, but I do not need to trap you here.\u0027",
                     "It means trusting that what is meant for you will not require a cage.",
                     "Relax your grip.",
                     "Let them breathe. Let yourself breathe."
                 ],
        "pageNum":  128
    },
    {
        "type":  "content",
        "header":  "The Paradox of Attachment",
        "text":  [
                     "The more you cling to someone out of fear of losing them, the more you push them away.",
                     "The more you trust them and give them freedom, the more they want to stay.",
                     "This paradox is terrifying.",
                     "You have to let go of the illusion of control to gain the reality of love."
                 ],
        "pageNum":  129
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XIII",
        "chapterTitle":  "For the Difficult Days",
        "pageNum":  130
    },
    {
        "type":  "special",
        "header":  "Read This When You Miss Someone",
        "text":  [
                     "Missing someone is like an ache in the bone.",
                     "It is a dull, constant reminder of a presence that is no longer there.",
                     "Allow yourself to feel it.",
                     "Do not try to distract yourself immediately. Let the grief wash over you.",
                     "But remember that missing them does not mean you have to break their boundaries.",
                     "Sometimes, the most loving thing you can do is miss them quietly."
                 ],
        "pageNum":  131
    },
    {
        "type":  "special",
        "header":  "Read This When You Feel Lonely",
        "text":  [
                     "Loneliness is a quiet room that forces you to listen to your own thoughts.",
                     "It is terrifying at first.",
                     "But if you sit in it long enough, you realize that you are the only company you are guaranteed for the rest of your life.",
                     "Make peace with yourself. Become someone you enjoy being alone with."
                 ],
        "pageNum":  132
    },
    {
        "type":  "special",
        "header":  "Read This When You Are Angry",
        "text":  [
                     "Your blood is hot. Your mind is racing.",
                     "You want to say something sharp. You want to make them feel the way you are feeling.",
                     "Stop.",
                     "Close your eyes.",
                     "Breathe in for four seconds. Hold for four. Out for four.",
                     "Do this ten times.",
                     "The anger will still be there, but it will no longer be driving the car."
                 ],
        "pageNum":  133
    },
    {
        "type":  "special",
        "header":  "Read This When You Want to Give Up",
        "text":  [
                     "It feels like too much work.",
                     "You are tired of failing, tired of trying, tired of apologizing.",
                     "It would be easier to just walk away and be exactly who you used to be.",
                     "But you left that version of yourself for a reason.",
                     "You are in the messy middle.",
                     "Keep walking. The clearing is ahead."
                 ],
        "pageNum":  134
    },
    {
        "type":  "special",
        "header":  "Read This When You Are Disappointed in Yourself",
        "text":  [
                     "You set a standard for yourself, and you failed to meet it.",
                     "It is okay to be disappointed.",
                     "But do not unpack and live in that disappointment.",
                     "Use it.",
                     "Let the bitter taste of failing yourself be the fuel you need to try harder tomorrow.",
                     "You are allowed to be a work in progress."
                 ],
        "pageNum":  135
    },
    {
        "type":  "special",
        "header":  "Read This When You Feel Misunderstood",
        "text":  [
                     "Sometimes, despite your best efforts, they will not understand what you meant.",
                     "They will assume the worst of your intentions.",
                     "It is deeply painful.",
                     "But you cannot control their perception of you in this moment.",
                     "You can only control your reaction.",
                     "Stay calm. State your truth gently. And let time do the rest."
                 ],
        "pageNum":  136
    },
    {
        "type":  "special",
        "header":  "Read This When You Are Exhausted",
        "text":  [
                     "Healing is tiring work.",
                     "It burns calories. It takes a toll on your nervous system.",
                     "If you are exhausted, it means you are doing the work.",
                     "It means you are fighting decades of muscle memory.",
                     "Rest. Take a nap. Drink a glass of water. Do not quit; just rest."
                 ],
        "pageNum":  137
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XIV",
        "chapterTitle":  "Letters",
        "pageNum":  138
    },
    {
        "type":  "content",
        "header":  "A Letter to My Younger Self",
        "text":  [
                     "I am sorry that no one taught you how to process your emotions.",
                     "I am sorry that you learned to protect yourself with anger and walls.",
                     "But I want you to know that it is okay to put the armor down now.",
                     "We are safe.",
                     "You don\u0027t have to fight every battle anymore."
                 ],
        "pageNum":  139
    },
    {
        "type":  "reflection",
        "prompt":  "What would I tell my younger self right now?",
        "pageNum":  140
    },
    {
        "type":  "content",
        "header":  "A Letter to the Person I Hurt",
        "text":  [
                     "I see the pain I caused you, and I do not want to look away from it anymore.",
                     "I am sorry for the nights you cried when you should have been sleeping.",
                     "I am sorry for the times I made you question your worth.",
                     "You have always been enough. It was my own insufficiency that made me act that way.",
                     "I am working every day to become a person who only adds peace to your life."
                 ],
        "pageNum":  141
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
                     "I am coming to meet you. Wait for me."
                 ],
        "pageNum":  142
    },
    {
        "type":  "reflection",
        "prompt":  "Who is the person I want to become?",
        "pageNum":  143
    },
    {
        "type":  "content",
        "header":  "A Letter for the Day I Finally Change",
        "text":  [
                     "If you are reading this, and you have finally strung together months of healthy choices, consistency, and peace...",
                     "I am so proud of you.",
                     "You did the impossible.",
                     "You broke the cycle.",
                     "Do not forget how hard it was. Do not forget the tears it took to get here.",
                     "Protect this new life fiercely."
                 ],
        "pageNum":  144
    },
    {
        "type":  "content",
        "header":  "A Letter to the Person Who Stayed",
        "text":  [
                     "Thank you.",
                     "Thank you for the times you held your ground when I pushed.",
                     "Thank you for seeing the man I could be, even when I was acting like a child.",
                     "I know I have not made it easy.",
                     "But I promise you, I am working to be the soft place to land that you have always been for me."
                 ],
        "pageNum":  145
    },
    {
        "type":  "reflection",
        "prompt":  "Write a letter of apology to yourself.",
        "pageNum":  146
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XV",
        "chapterTitle":  "The Person I Am Becoming",
        "pageNum":  147
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
                     "Let your new identity dictate your actions."
                 ],
        "pageNum":  148
    },
    {
        "type":  "content",
        "header":  "The Quiet Confidence",
        "text":  [
                     "True growth does not need to announce itself.",
                     "You do not need to constantly tell your partner how much you have changed.",
                     "Let your actions be the announcement.",
                     "There is a quiet, unshakeable confidence in knowing that you are doing the right thing, even when no one is watching."
                 ],
        "pageNum":  149
    },
    {
        "type":  "reflection",
        "prompt":  "What is one old habit I am finally starting to break?",
        "pageNum":  150
    },
    {
        "type":  "content",
        "header":  "Patience with the Process",
        "text":  [
                     "You are unlearning decades of conditioning.",
                     "It will take more than a few weeks.",
                     "Be as patient with yourself as you want others to be with you.",
                     "Celebrate the small victories.",
                     "You paused for three seconds today before responding? That is a victory. Claim it."
                 ],
        "pageNum":  151
    },
    {
        "type":  "content",
        "header":  "The Quiet Pride",
        "text":  [
                     "One day, you will realize that you haven\u0027t raised your voice in months.",
                     "You will realize that the last time you felt jealous, you handled it internally without starting a fight.",
                     "You will realize that you are keeping your promises.",
                     "It will not happen with fireworks.",
                     "It will happen quietly.",
                     "And you will feel a deep, quiet pride in the person you have built."
                 ],
        "pageNum":  152
    },
    {
        "type":  "reflection",
        "prompt":  "What would the better version of me do differently?",
        "pageNum":  153
    },
    {
        "type":  "content",
        "header":  "The New Normal",
        "text":  [
                     "One day, you will wake up and the healthy choice will be the automatic choice.",
                     "You won\u0027t have to count to five.",
                     "You won\u0027t have to bite your tongue.",
                     "The healthy response will just be... who you are.",
                     "That is the destination you are walking toward. Keep walking."
                 ],
        "pageNum":  154
    },
    {
        "type":  "chapter_divider",
        "chapterNumber":  "Chapter XVI",
        "chapterTitle":  "Keep Going",
        "pageNum":  155
    },
    {
        "type":  "content",
        "header":  "The Work Never Truly Ends",
        "text":  [
                     "There is no finish line.",
                     "You do not suddenly cross a threshold and become a perfect, enlightened being who never makes a mistake.",
                     "The goal is not perfection.",
                     "The goal is simply a shorter recovery time.",
                     "When you fall, you get up faster. You apologize sooner. You correct the behavior quicker."
                 ],
        "pageNum":  156
    },
    {
        "type":  "content",
        "header":  "A Final Promise",
        "text":  [
                     "Make a promise to yourself right now.",
                     "Promise that no matter how hard it gets, no matter how many times you stumble, you will not revert to the person you were.",
                     "You have seen the light now.",
                     "You know what love actually looks like.",
                     "Do not go back to sleep."
                 ],
        "pageNum":  157
    },
    {
        "type":  "content",
        "header":  "You Are Capable",
        "text":  [
                     "You are entirely capable of being the partner they deserve.",
                     "You are entirely capable of being the person you want to be.",
                     "The blueprint is in your hands.",
                     "The work is hard, but the reward is a life of peace, deep connection, and true love."
                 ],
        "pageNum":  158
    },
    {
        "type":  "content",
        "header":  "The Long Game",
        "text":  [
                     "Healing is the longest game you will ever play.",
                     "There are no shortcuts.",
                     "There are no cheat codes.",
                     "But every single day you choose to be honest, accountable, and kind, you are winning.",
                     "Do not stop playing.",
                     "Do not stop growing."
                 ],
        "pageNum":  159
    },
    {
        "type":  "content",
        "header":  "A Life Well Loved",
        "text":  [
                     "At the end of it all, you will not remember the arguments you \u0027won.\u0027",
                     "You will remember the times you connected.",
                     "You will remember the laughter, the quiet mornings, the apologies that healed old wounds.",
                     "Focus on what matters.",
                     "Love well. Live well. Be well."
                 ],
        "pageNum":  160
    },
    {
        "type":  "reflection",
        "prompt":  "What am I taking away from this book?",
        "pageNum":  161
    },
    {
        "type":  "special",
        "header":  "The End is Only the Beginning",
        "text":  [
                     "You cannot change what you did yesterday.",
                     "But you can decide what kind of person wakes up tomorrow.",
                     "Close this book.",
                     "And go be that person."
                 ],
        "pageNum":  162
    },
    {
        "type":  "cover",
        "title":  "Keep Growing",
        "subtitle":  "A Gentle Reminder",
        "pageNum":  163
    }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { bookPages }; }
