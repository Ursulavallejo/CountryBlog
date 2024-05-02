<<<<<<< HEAD
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
=======
const connectionMySQL = require('../connectionMySQL.js')

exports.getLanguages = async (req, res) => {
  let sql = 'SELECT * FROM language'
  try {
    await connectionMySQL.query(sql, (error, results, fields) => {
      if (error) throw error
      res.json(results)
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.createLanguage = async (req, res) => {
  const {
    languageId,
    languageName,
  } = req.body

  let sql =
    'INSERT INTO language (languageId, languageName) VALUES (?,?,?,?)'

  let params = [
    languageId,
    languageName,
  ]
>>>>>>> 658ba38bfa7d56a07f4b56260ddc509c2d1d1bf0

  if (!languageName || languageName.trim().length < 1) {
    return res.status(400).json({
      success: false,
<<<<<<< HEAD
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
=======
      error: 'You have not written a languageName',
    })
  }

  try {
    await connectionMySQL.query(sql, params, (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: '',
        message: 'You have now added a new language!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

exports.updateLanguage = async (req, res) => {
  const {
    languageId,
    languageName,
  } = req.body

  let sql =
    'UPDATE language SET languageId = ?, languageName = ? WHERE  languageId = ?'
  let params = [
    languageId,
    languageName,
  ]
>>>>>>> 658ba38bfa7d56a07f4b56260ddc509c2d1d1bf0

  if (!languageName || languageName.trim().length < 1) {
    return res.status(400).json({
      success: false,
<<<<<<< HEAD
      error: 'You have not provided any languageName for the country',
    });
=======
      error: 'You have not written any language for the country',
    })
>>>>>>> 658ba38bfa7d56a07f4b56260ddc509c2d1d1bf0
  }

  if (!languageId) {
    return res.status(400).json({
      success: false,
<<<<<<< HEAD
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
=======
      error: 'You have not provide any ID of the language you wish to update!!',
    })
  }

  try {
    await connectionMySQL.query(sql, params, (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: '',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

exports.deleteLanguage = async (req, res) => {
  const { languageId } = req.body

  let sql = 'DELETE FROM language WHERE languageId = ?'
>>>>>>> 658ba38bfa7d56a07f4b56260ddc509c2d1d1bf0

  if (!languageId) {
    return res.status(400).json({
      success: false,
<<<<<<< HEAD
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
=======
      error: 'You have not provide any ID of the language you wish to delete!',
    })
  }

  try {
    await connectionMySQL.query(sql, [languageId], (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: '',
        message: 'The language is now deleted!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

>>>>>>> 658ba38bfa7d56a07f4b56260ddc509c2d1d1bf0
