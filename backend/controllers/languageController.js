const connectionMySQL = require('../connectionMySQL.js');

exports.getLanguages = async (req, res) => {
  try {
    const sql = 'SELECT * FROM language';
    const results = await connectionMySQL.query(sql);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLanguage = async (req, res) => {
  const { languageId, languageName } = req.body;

  if (!languageName || languageName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'You have not provided a languageName',
    });
  }

  try {
    const sql = 'INSERT INTO language (languageId, languageName) VALUES (?, ?)';
    await connectionMySQL.query(sql, [languageId, languageName]);
    res.status(201).json({
      success: true,
      error: '',
      message: 'You have now added a new language!',
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateLanguage = async (req, res) => {
  const { languageId, languageName } = req.body;

  if (!languageName || languageName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'You have not provided any languageName for the country',
    });
  }

  if (!languageId) {
    return res.status(400).json({
      success: false,
      error: 'You have not provided any ID of the language you wish to update!!',
    });
  }

  try {
    const sql = 'UPDATE language SET languageName = ? WHERE languageId = ?';
    await connectionMySQL.query(sql, [languageName, languageId]);
    res.json({ success: true, error: '' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteLanguage = async (req, res) => {
  const { languageId } = req.body;

  if (!languageId) {
    return res.status(400).json({
      success: false,
      error: 'You have not provided any ID of the language you wish to delete!',
    });
  }

  try {
    const sql = 'DELETE FROM language WHERE languageId = ?';
    await connectionMySQL.query(sql, [languageId]);
    res.json({
      success: true,
      error: '',
      message: 'The language is now deleted!',
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
