import { nanoid } from "nanoid";

const urls = new Map();

export const generateShortUrl = (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({
      message: "URL is Required",
    });
  }

  const shortId = nanoid(8);
  urls.set(shortId, url);
  res.status(201).json({
    shortUrl: `http://localhost:1234/api/url/${shortId}`,
  });
};
export const redirectController = (req, res) => {
  const { shortId } = req.params;

  const originalUrl = urls.get(shortId);
  if (!originalUrl) {
    return res.status(404).json({
      message: "Short Url Not Found",
    });
  }

  return res.redirect(originalUrl);
};
