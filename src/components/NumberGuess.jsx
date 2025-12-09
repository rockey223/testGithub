
import { useState } from "react";

export default function GuessGame() {
  const [number, setNumber] = useState(
    () => Math.floor(Math.random() * 10) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    const g = parseInt(guess);
    if (!g) return setMessage("⚠️Enter a number!");

    if (g === number) {
      setMessage("🎉Correct! You guessed it!");
    } else if (g < number) {
      setMessage("📉Too low!");
    } else {
      setMessage("📈Too high!");
    }
  };

  const resetGame = () => {
    setNumber(Math.floor(Math.random() * 10) + 1);
    setGuess("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600 p-6">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          🎯 Guess the Number (1–10)
        </h1>

        <input
          type="number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center mb-4"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess..."
        />

        <button
          onClick={handleGuess}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition mb-3"
        >
          Guess
        </button>

        <p className="text-lg font-medium text-gray-700 h-8">{message}</p>

        <button
          onClick={resetGame}
          className="mt-4 text-sm text-indigo-600 font-semibold hover:underline"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}
