# name =input("Enter your name: ")
# color = input("Enter your favorite color: ")
# print(f"Hello {name}, your favorite color is {color}.")


# def quiz_game():
#     score = 0

#     questions = [
#         {
#             "question": "What is the keyword to define a function in Python?",
#             "options": ["A. function", "B. def", "C. define"],
#             "answer": "B"
#         },
#         {
#             "question": "Which data type is used to store True or False?",
#             "options": ["A. bool", "B. str", "C. int"],
#             "answer": "A"
#         },
#         {
#             "question": "What symbol is used for comments in Python?",
#             "options": ["A. //", "B. <!-- -->", "C. #"],
#             "answer": "C"
#         }
#     ]

#     for q in questions:
#         print("\n" + q["question"])
#         for opt in q["options"]:
#             print(opt)
#         answer = input("Your answer (A/B/C): ").upper()

#         if answer == q["answer"]:
#             print("✅ Correct!")
#             score += 1
#         else:
#             print("❌ Wrong! The correct answer was", q["answer"])

#     print(f"\n🏁 Quiz Over! You scored {score} out of {len(questions)}")

# # Game loop to allow replay
# while True:
#     quiz_game()
#     again = input("\nDo you want to play again? (yes/no): ").lower()
#     if again != "yes":
#         print("Thanks for playing! 👋")
#         break


questions = [
    {
        "question": "1. What is Python mostly used for?",
        "options": ["A. Making shoes", "B. Programming", "C. Catching snakes"],
        "answer": "B"
    },
    {
        "question": "2. What does 'print()' do in Python?",
        "options": ["A. Prints documents", "B. Displays output", "C. Summons a printer"],
        "answer": "B"
    },
    {
        "question": "3. Which of these is a valid Python variable name?",
        "options": ["A. 2cool4school", "B. my-variable", "C. my_variable"],
        "answer": "C"
    },
    {
        "question": "4. What will this code print?\n   print('Hello' + 'World')",
        "options": ["A. Hello World", "B. HelloWorld", "C. Error"],
        "answer": "B"
    },
    {
        "question": "5. Why do Python programmers prefer dark mode?",
        "options": ["A. It's easier on the eyes", "B. Light attracts bugs", "C. They love the mystery"],
        "answer": "B"
    }
]