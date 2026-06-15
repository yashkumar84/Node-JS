import { nanoid } from "nanoid";
import Url from "../model/Url.js";
import mongoose from "mongoose";

const urls = new Map();

export const generateShortUrl = async (req, res) => {
  const { longUrl } = req.body;
  const { email } = req.user;
  if (!longUrl) {
    return res.status(400).json({
      message: "URL is Required",
    });
  }

  const shortId = nanoid(8);
  // urls.set(shortId, url);
  const urlObject = new Url({
    shortCode: shortId,
    longUrl: longUrl,
    email: email,
  });

  await urlObject.save();
  res.status(201).json({
    shortUrl: `http://localhost:1234/api/url/${shortId}`,
  });
};
export const redirectController = async (req, res) => {
  const { shortId } = req.params;

  // const originalUrl = urls.get(shortId);
  const doc = await Url.findOne({ shortCode: shortId });
  const originalUrl = doc.longUrl;
  if (!originalUrl) {
    return res.status(404).json({
      message: "Short Url Not Found",
    });
  }

  return res.redirect(originalUrl);
};

export const getAllURL = async (req, res) => {
  const { email, user_id } = req.user;
  const urls = await Url.find({ email: email });
  console.log(urls);
  res.status(200).json({
    msg: "Urls Founded ",
    urls: urls,
  });
};
