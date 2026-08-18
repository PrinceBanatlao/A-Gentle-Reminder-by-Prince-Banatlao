import json
import os

pages = [
    # CHAPTER 5
    { "type": "chapter_divider", "chapterNumber": "Chapter V", "chapterTitle": "Learning Why You Hurt People" },
    { "type": "content", "header": "The Root of the Reaction", "text": ["Nobody wakes up and decides, 'I am going to intentionally hurt the person I love today.'", "We hurt people because we are hurting, because we are afraid, or because we are protecting a wound we haven't healed.", "If you want to stop hurting people, you have to find out what you are protecting.", "Are you afraid of being abandoned? Are you terrified of not being in control? Do you feel inadequate?"] },
    { "type": "content", "header": "The Trigger is Not the Problem", "text": ["A trigger is just someone bumping into a bruise you already had.", "When your partner says something that makes you explode, it is rarely about what they actually said.", "It is about the old story their words woke up inside your head.", "It is your responsibility to heal the bruise, so that when someone accidentally brushes against it, you do not burn the house down."] },
    { "type": "reflection", "prompt": "What specific words or actions usually trigger me, and why do I think that is?" },
    { "type": "content", "header": "Defensiveness", "text": ["Defensiveness is the enemy of connection.", "When you are defensive, you are telling the other person that protecting your ego is more important than understanding their feelings.", "The next time you feel the urge to say, 'Well, you did this...', stop.", "Bite your tongue.", "Listen to what they are saying. Find the grain of truth in it, even if you disagree with the rest."] },
    { "type": "special", "header": "Read This Before You Send That Angry Message", "text": ["Stop typing.", "Put the phone down.", "Nothing good has ever come from a message sent with a racing heart and clenched teeth.", "You are reacting, not communicating.", "Walk away for twenty minutes. Let your nervous system calm down.", "If it is still important to say later, you can say it calmly.", "Do not create a mess that the calm version of you will have to clean up tomorrow."] },
    { "type": "content", "header": "Impulsive Decisions", "text": ["Impulsivity feels like freedom in the moment, but it is actually a prison.", "When you act on every passing emotion, you are a slave to your nervous system.", "True freedom is having a thought, feeling an emotion, and choosing how to respond.", "Create space between the feeling and the action."] },

    # CHAPTER 6
    { "type": "chapter_divider", "chapterNumber": "Chapter VI", "chapterTitle": "For the Person Who Loves You" },
    { "type": "content", "header": "The Gift of Patience", "text": ["Think about the person who has stayed by your side.", "Think about the times you were difficult, stubborn, angry, or cold.", "And yet, they chose to see the good in you.", "They chose to believe that you were better than your worst moments.", "Do not take that kind of love for granted.", "It is a rare and precious gift, and if you drop it too many times, it will eventually break."] },
    { "type": "content", "header": "Seeing Them", "text": ["When was the last time you truly looked at them?", "Not just glancing at them while looking at your phone.", "Not just seeing them as a fixture in your life.", "Look at the way they laugh. Look at the exhaustion in their eyes when they have carried too much. Look at how hard they try to love you.", "Appreciate them loudly. Do not let them wonder if they matter to you."] },
    { "type": "reflection", "prompt": "What are three things I deeply appreciate about the person who loves me?" },
    { "type": "content", "header": "Protecting Their Heart", "text": ["When someone gives you their heart, they are trusting you not to crush it.", "They are trusting you with their softest parts.", "You are the guardian of that softness.", "When you raise your voice, when you lie, when you dismiss their feelings, you are failing your duty as a protector.", "Be the safest place they have ever known."] },
    { "type": "special", "header": "Read This When Someone Gives You Another Chance", "text": ["They did not give you another chance because you deserve it.", "They gave you another chance because they love you, and they are hoping the version of you they believe in is real.", "Do not make them regret it.", "This is not the time to relax because you 'got them back.'", "This is the time to work twice as hard to prove that their faith in you was not a mistake."] },
    { "type": "content", "header": "Listening to Understand", "text": ["Most of us do not listen.", "We wait for our turn to speak.", "We formulate our counter-argument while the other person is still talking.", "Today, try this: When they speak, look at them. Empty your mind. Just absorb what they are saying.", "And when they finish, say, 'Tell me more about that.'"] },

    # CHAPTER 7
    { "type": "chapter_divider", "chapterNumber": "Chapter VII", "chapterTitle": "Love Is More Than Feelings" },
    { "type": "content", "header": "The Verb of Love", "text": ["Love is not just a warm feeling in your chest.", "Love is a verb. It is a series of choices.", "Love is choosing to bite your tongue when you are annoyed.", "Love is making the coffee in the morning.", "Love is saying 'I'm sorry' first.", "Love is consistency when the feelings fade."] },
    { "type": "content", "header": "Respect is the Foundation", "text": ["You cannot love someone you do not respect.", "And respect is shown in the small things.", "It is shown in not talking over them. In valuing their time. In not making them the butt of your jokes.", "If love is the house, respect is the foundation.", "If the foundation crumbles, the house falls, no matter how beautiful it is."] },
    { "type": "reflection", "prompt": "What does love mean to me, beyond just a feeling?" },
    { "type": "content", "header": "Making Them Feel Safe", "text": ["Safety is not just physical.", "Emotional safety means they know you won't use their secrets against them in an argument.", "It means they know you won't abandon them when they are sad.", "It means they do not have to walk on eggshells around your moods.", "Are you a safe harbor, or are you the storm?"] },
    { "type": "content", "header": "Consistency", "text": ["Anyone can be wonderful for a week.", "Anyone can plan a grand romantic gesture after a massive argument.", "But the true measure of a partner is what they do on a random Tuesday.", "Are you kind when you are tired?", "Are you reliable when it is inconvenient?", "Be consistently good, not occasionally great."] },

    # CHAPTER 8
    { "type": "chapter_divider", "chapterNumber": "Chapter VIII", "chapterTitle": "When You Hurt Someone You Love" },
    { "type": "content", "header": "The Anatomy of a Real Apology", "text": ["A real apology has four parts.", "1. 'I am sorry for...' (State the specific action).", "2. 'It was wrong because...' (Show you understand the impact).", "3. 'In the future, I will...' (State the changed behavior).", "4. 'Will you forgive me?' (Ask for their grace, without demanding it).", "Leave out the word 'but'."] },
    { "type": "content", "header": "Understanding Their Timeline", "text": ["You do not get to dictate how long it takes for someone to forgive you.", "You caused the wound; you do not get to yell at them for bleeding too long.", "If they need space, give it.", "If they need reassurance, give it.", "Be as patient with their healing as they have been with your mistakes."] },
    { "type": "special", "header": "Read This When You Don't Know How to Apologize", "text": ["You are staring at them, or at your phone, and the words are stuck in your throat.", "You feel pride welling up, telling you to stay silent.", "Swallow the pride.", "Say this: 'I don't know exactly what to say, and I feel terrible about what happened. I know I hurt you. I was wrong, and I want to fix it.'", "Start there. The rest will follow."] },
    { "type": "reflection", "prompt": "Think of a time I gave a bad apology. How would the better version of me rewrite it?" },
    { "type": "content", "header": "Rebuilding Trust", "text": ["Rebuilding trust is like building a brick wall.", "You lay one brick of honesty at a time.", "You tell the truth about small things.", "You show up when you say you will.", "You do exactly what you promised.", "Slowly, the wall gets taller.", "But remember: one lie can knock down a hundred bricks."] }
]

output_path = os.path.join("content_data", "ch5_8.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(pages, f, indent=2)

print(f"Generated {len(pages)} pages for Chapters 5-8")
