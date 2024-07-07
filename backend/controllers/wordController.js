import Word from '../models/Word.js';

export const getRandomWord = async (req, res) => {
  try {
    const count = await Word.countDocuments();
    const randomWord = await Word.findOne().skip(Math.floor(Math.random() * count));
    res.json(randomWord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
