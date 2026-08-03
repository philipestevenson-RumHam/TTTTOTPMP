// Test file for the "match" question type — try a full 6-pair set and a
// smaller 4-pair set to see how it handles different sizes.

window.QUIZ_QUESTIONS = {
  "2026-08-01": [
    {
      "type": "match",
      "question": "Match the song to the artist",
      "left": ["Yellow", "Chandelier", "Rolling in the Deep", "Shape of You", "Bad Guy", "Uptown Funk"],
      "right": ["Coldplay", "Sia", "Adele", "Ed Sheeran", "Billie Eilish", "Bruno Mars"]
    },
    {
      "type": "match",
      "question": "Match the album to the year it was released",
      "left": ["Rumours", "Thriller", "Back in Black", "Nevermind"],
      "right": ["1977", "1982", "1980", "1991"]
    },
    {
      "type": "multiple_choice",
      "question": "Just a normal multiple choice question, for comparison",
      "options": ["Coldplay", "The Eagles", "Steely Dan", "Toto"],
      "answer": "Coldplay"
    }
  ]
};
