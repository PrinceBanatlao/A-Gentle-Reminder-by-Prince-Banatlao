import json
import os

pages = [
    # CHAPTER 13
    { "type": "chapter_divider", "chapterNumber": "Chapter XIII", "chapterTitle": "For the Difficult Days" },
    { "type": "special", "header": "Read This When You Miss Someone", "text": ["Missing someone is like an ache in the bone.", "It is a dull, constant reminder of a presence that is no longer there.", "Allow yourself to feel it.", "Do not try to distract yourself immediately. Let the grief wash over you.", "But remember that missing them does not mean you have to break their boundaries.", "Sometimes, the most loving thing you can do is miss them quietly."] },
    { "type": "special", "header": "Read This When You Feel Lonely", "text": ["Loneliness is a quiet room that forces you to listen to your own thoughts.", "It is terrifying at first.", "But if you sit in it long enough, you realize that you are the only company you are guaranteed for the rest of your life.", "Make peace with yourself. Become someone you enjoy being alone with."] },
    { "type": "special", "header": "Read This When You Are Angry", "text": ["Your blood is hot. Your mind is racing.", "You want to say something sharp. You want to make them feel the way you are feeling.", "Stop.", "Close your eyes.", "Breathe in for four seconds. Hold for four. Out for four.", "Do this ten times.", "The anger will still be there, but it will no longer be driving the car."] },
    { "type": "special", "header": "Read This When You Want to Give Up", "text": ["It feels like too much work.", "You are tired of failing, tired of trying, tired of apologizing.", "It would be easier to just walk away and be exactly who you used to be.", "But you left that version of yourself for a reason.", "You are in the messy middle.", "Keep walking. The clearing is ahead."] },

    # CHAPTER 14
    { "type": "chapter_divider", "chapterNumber": "Chapter XIV", "chapterTitle": "Letters" },
    { "type": "content", "header": "A Letter to My Younger Self", "text": ["I am sorry that no one taught you how to process your emotions.", "I am sorry that you learned to protect yourself with anger and walls.", "But I want you to know that it is okay to put the armor down now.", "We are safe.", "You don't have to fight every battle anymore."] },
    { "type": "reflection", "prompt": "What would I tell my younger self right now?" },
    { "type": "content", "header": "A Letter to the Person I Hurt", "text": ["I see the pain I caused you, and I do not want to look away from it anymore.", "I am sorry for the nights you cried when you should have been sleeping.", "I am sorry for the times I made you question your worth.", "You have always been enough. It was my own insufficiency that made me act that way.", "I am working every day to become a person who only adds peace to your life."] },
    { "type": "content", "header": "A Letter to the Person I Want to Become", "text": ["I am building you.", "It is slow work. It requires tearing down a lot of old foundations.", "But I can see you clearly.", "You are calm. You listen. You love without condition.", "You take responsibility. You do not run from conflict, but you handle it gently.", "I am coming to meet you. Wait for me."] },
    { "type": "reflection", "prompt": "Who is the person I want to become?" },
    { "type": "content", "header": "A Letter for the Day I Finally Change", "text": ["If you are reading this, and you have finally strung together months of healthy choices, consistency, and peace...", "I am so proud of you.", "You did the impossible.", "You broke the cycle.", "Do not forget how hard it was. Do not forget the tears it took to get here.", "Protect this new life fiercely."] },

    # CHAPTER 15
    { "type": "chapter_divider", "chapterNumber": "Chapter XV", "chapterTitle": "The Person I Am Becoming" },
    { "type": "content", "header": "Identity Shift", "text": ["You are no longer 'someone who tries to be good.'", "You are becoming a good person.", "It is a shift in identity.", "When you are tempted to lie, you don't say 'I shouldn't lie.' You say, 'I am not a liar.'", "When you are tempted to yell, you say, 'I am not someone who yells.'", "Let your new identity dictate your actions."] },
    { "type": "content", "header": "The Quiet Confidence", "text": ["True growth does not need to announce itself.", "You do not need to constantly tell your partner how much you have changed.", "Let your actions be the announcement.", "There is a quiet, unshakeable confidence in knowing that you are doing the right thing, even when no one is watching."] },
    { "type": "reflection", "prompt": "What is one old habit I am finally starting to break?" },
    { "type": "content", "header": "Patience with the Process", "text": ["You are unlearning decades of conditioning.", "It will take more than a few weeks.", "Be as patient with yourself as you want others to be with you.", "Celebrate the small victories.", "You paused for three seconds today before responding? That is a victory. Claim it."] },

    # CHAPTER 16
    { "type": "chapter_divider", "chapterNumber": "Chapter XVI", "chapterTitle": "Keep Going" },
    { "type": "content", "header": "The Work Never Truly Ends", "text": ["There is no finish line.", "You do not suddenly cross a threshold and become a perfect, enlightened being who never makes a mistake.", "The goal is not perfection.", "The goal is simply a shorter recovery time.", "When you fall, you get up faster. You apologize sooner. You correct the behavior quicker."] },
    { "type": "content", "header": "A Final Promise", "text": ["Make a promise to yourself right now.", "Promise that no matter how hard it gets, no matter how many times you stumble, you will not revert to the person you were.", "You have seen the light now.", "You know what love actually looks like.", "Do not go back to sleep."] },
    { "type": "content", "header": "You Are Capable", "text": ["You are entirely capable of being the partner they deserve.", "You are entirely capable of being the person you want to be.", "The blueprint is in your hands.", "The work is hard, but the reward is a life of peace, deep connection, and true love."] },
    { "type": "special", "header": "The End is Only the Beginning", "text": ["You cannot change what you did yesterday.", "But you can decide what kind of person wakes up tomorrow.", "Close this book.", "And go be that person."] },
    
    # End Page
    { "type": "cover", "title": "Keep Growing", "subtitle": "A Gentle Reminder." }
]

output_path = os.path.join("content_data", "ch13_16.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(pages, f, indent=2)

print(f"Generated {len(pages)} pages for Chapters 13-16")
