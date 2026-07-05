export default async function handler(req, res) {
  // Allow CodePen (or anywhere) to call this proxy
  res.setHeader('Access-Control-Allow-Origin', '*');

  const country = req.query.country || '';

  try {
    const targetUrl = `http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`;
    const response = await fetch(targetUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from Hipolabs API', details: error.message });
  }
}
