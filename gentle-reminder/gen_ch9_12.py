import json
import os

pages = [
    # CHAPTER 9
    { "type": "chapter_divider", "chapterNumber": "Chapter IX", "chapterTitle": "Learning to Control Yourself" },
    { "type": "content", "header": "The Gap", "text": ["Between every stimulus and response, there is a gap.", "In that gap lies your power.", "Most mistakes are made because we collapse the gap.", "Someone says something sharp, and we immediately say something sharper back.", "Your goal is to stretch that gap.", "Breathe. Let the thought form, look at it, and then decide if it is actually helpful before you speak it."] },
    { "type": "content", "header": "Taming the Fire", "text": ["Anger is a fire.", "When you are angry, your instinct is to throw fuel on it—to raise your voice, to pace the room, to dig up old arguments.", "But a fire needs oxygen.", "Close your mouth. Slow your breathing.", "Walk away for ten minutes.", "You are not surrendering the argument; you are saving the relationship from the ashes."] },
    { "type": "reflection", "prompt": "What do I do when I am angry, and how does it affect the people around me?" },
    { "type": "content", "header": "Words Are Not Air", "text": ["You cannot 'unsay' things.", "When you say something cruel in the heat of the moment, you might forget it an hour later when you calm down.", "But the person you said it to will remember it for years.", "Your words have weight. They leave bruises.", "Treat your words like loaded weapons. Do not point them at the people you love."] },
    { "type": "special", "header": "Read This When You Made the Same Mistake Again", "text": ["You slipped.", "You promised yourself you wouldn't react that way again, and yet, here you are.", "It is okay to be frustrated with yourself.", "But do not let a slip turn into a slide.", "Acknowledge the mistake immediately. Apologize without defending it.", "Tomorrow is a new day to try again. Keep trying until the slips become rare."] },
    { "type": "content", "header": "The Jealousy Trap", "text": ["Jealousy is an ugly emotion that wears the mask of love.", "It tells you that you are protecting what is yours.", "But love does not own.", "Jealousy is just your own insecurity projected onto your partner.", "When you feel jealous, do not interrogate them. Interrogate yourself.", "What are you actually afraid of?"] },

    # CHAPTER 10
    { "type": "chapter_divider", "chapterNumber": "Chapter X", "chapterTitle": "Forgiving Yourself" },
    { "type": "content", "header": "The Difference Between Forgetting and Forgiving", "text": ["To forgive yourself is not to develop amnesia.", "You do not forget what you did.", "You simply decide that the punishment phase is over.", "You have learned the lesson. You have paid the toll.", "Now, you must let yourself walk out of the prison you built."] },
    { "type": "content", "header": "You Are Not Your Worst Moment", "text": ["If a camera recorded your absolute worst moment and played it for the world, you would look like a villain.", "But you are also the person who makes them coffee.", "You are the person who holds them when they cry.", "You are a complex, messy, evolving human being.", "Do not define your entire existence by your lowest points."] },
    { "type": "special", "header": "Read This When You Need to Forgive Yourself", "text": ["Put your hand on your chest.", "Feel that steady rhythm.", "You are alive. You are here. You are trying.", "You caused pain, yes. But you also hold the capacity to heal.", "Release the grip you have on your own throat.", "Forgive yourself, not because you were right, but because you need the energy to be better tomorrow."] },
    { "type": "reflection", "prompt": "What is something I need to forgive myself for?" },
    { "type": "content", "header": "The Arrogance of Self-Punishment", "text": ["If the person you hurt has forgiven you, but you refuse to forgive yourself, you are telling them that their forgiveness is not good enough.", "It is a strange form of arrogance.", "Accept their grace.", "Say thank you, and let it wash over you."] },

    # CHAPTER 11
    { "type": "chapter_divider", "chapterNumber": "Chapter XI", "chapterTitle": "Becoming Better" },
    { "type": "content", "header": "Small Daily Changes", "text": ["You do not become a better person by making one grand declaration.", "You become a better person by making a hundred tiny, invisible choices every day.", "Choosing to listen instead of interrupt.", "Choosing to wash the dishes without being asked.", "Choosing to say 'I love you' for no reason.", "The grand gestures are easy. The daily disciplines are what build a life."] },
    { "type": "content", "header": "The Habit of Honesty", "text": ["Start telling the truth about the little things.", "If you forgot to do something, say 'I forgot,' instead of making an excuse.", "Honesty is a muscle.", "If you exercise it on the small things, it will be strong enough to hold the heavy things when you need it to."] },
    { "type": "reflection", "prompt": "What is one small, practical thing I can do differently today?" },
    { "type": "content", "header": "Keeping Promises", "text": ["A promise is a small piece of trust you hand to someone.", "When you break it, even a small one, you chip away at that trust.", "Do not make promises you cannot keep.", "And if you make one, move heaven and earth to keep it.", "Let your word be something they can rest their weight on."] },
    { "type": "content", "header": "Learning from Conflict", "text": ["Every argument is a map.", "It shows you where the hidden landmines are in your relationship.", "After the dust settles, do not just walk away in relief.", "Sit down together and look at the map.", "Ask: 'How did we get here? And how do we avoid this specific landmine next time?'"] },

    # CHAPTER 12
    { "type": "chapter_divider", "chapterNumber": "Chapter XII", "chapterTitle": "When You Are Afraid of Losing Someone" },
    { "type": "content", "header": "The Illusion of Control", "text": ["When we are afraid of losing someone, we often try to grip them tighter.", "We check their phone. We ask constant questions. We become suffocating.", "But love is not a bird you can trap in a cage.", "The tighter you squeeze, the more they will want to escape.", "You cannot protect love through control."] },
    { "type": "content", "header": "Open Hands", "text": ["Love can only truly exist in open hands.", "You have to love them enough to let them choose you every day, freely.", "And you have to trust that if you are a good, kind, and loving partner, they will want to stay.", "If they don't, no amount of control would have stopped them anyway."] },
    { "type": "special", "header": "Read This When You Are Afraid They Will Leave", "text": ["Take a deep breath.", "Anxiety is lying to you.", "It is projecting your worst fears into the future and telling you it is reality.", "Come back to the present.", "Look at the evidence of their love today.", "And focus your energy not on worrying about them leaving, but on being someone worth staying for."] },
    { "type": "reflection", "prompt": "How does my fear of losing them make me act?" }
]

output_path = os.path.join("content_data", "ch9_12.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(pages, f, indent=2)

print(f"Generated {len(pages)} pages for Chapters 9-12")
