const express = require("express");
const router = express.Router();

const sequenceGenerator = require("./sequenceGenerator");
const Message = require("../models/message");

// GET: Get all messages
router.get("/", (req, res, next) => {
  Message.find()
    .populate("sender") // get the full sender object instead of just the ObjectId
    .then((messages) => {
      res.status(200).json({
        message: "Messages fetched successfully!",
        messages: messages,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occurred while fetching messages",
        error: error,
      });
    });
});

// POST: Add a new message
router.post("/", (req, res, next) => {
  const maxMessageId = sequenceGenerator.nextId("messages");

  const message = new Message({
    id: maxMessageId,
    subject: req.body.subject,
    msgText: req.body.msgText,
    sender: req.body.sender, // expected to be ObjectId of a contact
  });

  message
    .save()
    .then((createdMessage) => {
      res.status(201).json({
        message: "Message added successfully",
        messageObj: createdMessage,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occurred while adding the message",
        error: error,
      });
    });
});

// PUT: Update an existing message
router.put("/:id", (req, res, next) => {
  Message.findOne({ id: req.params.id })
    .then((message) => {
      if (!message) {
        return res.status(500).json({
          message: "Message not found.",
          error: { message: "Message not found" },
        });
      }

      message.subject = req.body.subject;
      message.msgText = req.body.msgText;
      message.sender = req.body.sender;

      Message.updateOne({ id: req.params.id }, message)
        .then((result) => {
          res.status(204).json({
            message: "Message updated successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred while updating the message",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Message not found.",
        error: { message: "Message not found" },
      });
    });
});

// DELETE: Remove a message by ID
router.delete("/:id", (req, res, next) => {
  Message.findOne({ id: req.params.id })
    .then((message) => {
      if (!message) {
        return res.status(500).json({
          message: "Message not found.",
          error: { message: "Message not found" },
        });
      }

      Message.deleteOne({ id: req.params.id })
        .then((result) => {
          res.status(204).json({
            message: "Message deleted successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred while deleting the message",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Message not found.",
        error: { message: "Message not found" },
      });
    });
});

module.exports = router;
