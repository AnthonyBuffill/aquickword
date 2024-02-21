const { Schema, model } = require('mongoose');
const Reaction = require('./Reactionschema');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
   
    createdAt: {
      type: Date,
      default: Date.now,
    },
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Create a virtual property `responses` that gets the amount of response per video
thoughtSchema
  .virtual('getReactions')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Video model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
