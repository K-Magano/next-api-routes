import React from "react";

import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
  //No if statement because we are fetching the data regardless of the Method
  // if (req.method === "DELETE"){

  // }
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath); //this is an array soo....
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
