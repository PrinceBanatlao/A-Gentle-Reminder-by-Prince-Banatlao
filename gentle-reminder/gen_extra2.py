import json
import os

pages = [
    # Chapter I Additions
    { "type": "content", "chapter_target": "Chapter I", "header": "The Comfort of the Known", "text": ["It is easier to remain broken than to do the work of healing.", "Brokenness is familiar. It is a script you know how to read.", "Healing requires stepping into the unknown.", "It requires admitting you do not know everything. It requires being uncomfortable.", "Step into the unknown. The familiar script was a tragedy anyway."] },
    { "type": "reflection", "chapter_target": "Chapter I", "prompt": "What negative habit feels comfortable to me right now?" },

    # Chapter II Additions
    { "type": "content", "chapter_target": "Chapter II", "header": "The Fear of Being Found Out", "text": ["Many of us operate under a deep, quiet terror that we are imposters.", "We fear that if our partner saw the truly ugly parts of us, they would pack their bags immediately.", "But love does not require perfection; it requires authenticity.", "If you want to be loved for who you truly are, you have to let them see who you truly are.", "The ugly parts included."] },

    # Chapter III Additions
    { "type": "content", "chapter_target": "Chapter III", "header": "Stop Negotiating With Accountability", "text": ["Accountability is not a negotiation.", "You do not get to say, 'I will admit I was wrong if you also admit you were wrong.'", "That is a transaction.", "True accountability stands alone.", "Take ownership of your actions regardless of what they do with theirs."] },
    { "type": "special", "chapter_target": "Chapter III", "header": "Read This When You Feel Falsely Accused", "text": ["Sometimes, they will be upset about something you genuinely did not mean to do.", "You will feel the overwhelming urge to defend your intentions.", "Remember: Intent vs. Impact.", "You did not intend to step on their foot, but their foot still hurts.", "Validate the hurt first. Explain the intention later, if necessary."] },

    # Chapter IV Additions
    { "type": "content", "chapter_target": "Chapter IV", "header": "The Echo Chamber of Guilt", "text": ["Guilt loves an echo chamber.", "If you isolate yourself, the guilt will bounce off the walls of your mind until it deafens you.", "You have to open the windows.", "Talk to a friend. Talk to a therapist. Talk to your partner.", "Guilt cannot survive in the fresh air of honest conversation."] },

    # Chapter V Additions
    { "type": "reflection", "chapter_target": "Chapter V", "prompt": "When I am triggered, what do I physically feel in my body?" },
    { "type": "content", "chapter_target": "Chapter V", "header": "Tracking the Pattern", "text": ["Look back at your last three major arguments.", "What was the common denominator?", "It is rarely about the dishes, or the schedule, or the tone of voice.", "It is usually about feeling unappreciated, unseen, or unsafe.", "Find the pattern. Once you see the pattern, you can break it."] },

    # Chapter VI Additions
    { "type": "content", "chapter_target": "Chapter VI", "header": "The Reservoir", "text": ["Every time you show up, listen, and choose kindness, you are putting a drop in the reservoir.", "When a drought comes—when there is stress, illness, or a major argument—you will need that reservoir.", "If the reservoir is empty, the relationship will dry up.", "Fill the reservoir today."] },
    { "type": "reflection", "chapter_target": "Chapter VI", "prompt": "How can I add a drop to the reservoir today?" },

    # Chapter VII Additions
    { "type": "content", "chapter_target": "Chapter VII", "header": "Love is Paying Attention", "text": ["To pay attention is the highest form of love.", "Noticing that they changed their hair.", "Noticing that they are quiet today.", "Noticing that they like a certain type of coffee.", "Do not stop studying them just because you have been together for a while.", "The syllabus is always changing."] },

    # Chapter VIII Additions
    { "type": "content", "chapter_target": "Chapter VIII", "header": "The Marathon of Repair", "text": ["Repairing a relationship is not a sprint.", "You do not apologize on Monday and expect a parade on Friday.", "It is a marathon.", "It requires pacing yourself. It requires endurance.", "It requires showing up and putting one foot in front of the other, long after the initial adrenaline of the apology has worn off."] },

    # Chapter IX Additions
    { "type": "special", "chapter_target": "Chapter IX", "header": "Read This Before You Raise Your Voice", "text": ["Lower your volume.", "Raising your voice does not make your point stronger; it only makes it harder to hear.", "When you yell, their brain goes into fight-or-flight mode.", "They literally cannot process your logic when they are assessing your threat level.", "Whisper if you have to. But do not yell."] },

    # Chapter X Additions
    { "type": "reflection", "chapter_target": "Chapter X", "prompt": "What would it feel like to finally put the burden of my past mistakes down?" },

    # Chapter XI Additions
    { "type": "content", "chapter_target": "Chapter XI", "header": "The Beauty of Trying", "text": ["There is something incredibly beautiful about watching someone try.", "Watching them catch themselves before they say something mean.", "Watching them take a deep breath instead of slamming a door.", "It is clunky at first. It is awkward.", "But effort is the most romantic thing in the world."] },

    # Chapter XII Additions
    { "type": "content", "chapter_target": "Chapter XII", "header": "The Paradox of Attachment", "text": ["The more you cling to someone out of fear of losing them, the more you push them away.", "The more you trust them and give them freedom, the more they want to stay.", "This paradox is terrifying.", "You have to let go of the illusion of control to gain the reality of love."] },

    # Chapter XIII Additions
    { "type": "special", "chapter_target": "Chapter XIII", "header": "Read This When You Are Exhausted", "text": ["Healing is tiring work.", "It burns calories. It takes a toll on your nervous system.", "If you are exhausted, it means you are doing the work.", "It means you are fighting decades of muscle memory.", "Rest. Take a nap. Drink a glass of water. Do not quit; just rest."] },

    # Chapter XIV Additions
    { "type": "reflection", "chapter_target": "Chapter XIV", "prompt": "Write a letter of apology to yourself." },

    # Chapter XV Additions
    { "type": "content", "chapter_target": "Chapter XV", "header": "The New Normal", "text": ["One day, you will wake up and the healthy choice will be the automatic choice.", "You won't have to count to five.", "You won't have to bite your tongue.", "The healthy response will just be... who you are.", "That is the destination you are walking toward. Keep walking."] },

    # Chapter XVI Additions
    { "type": "reflection", "chapter_target": "Chapter XVI", "prompt": "What am I taking away from this book?" }
]

output_path = os.path.join("content_data", "extra2.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(pages, f, indent=2)

print(f"Generated {len(pages)} extra pages in extra2.json")
