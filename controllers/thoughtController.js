const { Thought, User } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thoughts with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'New thought created, but found no user with that ID' });
      }

      res.json('Created a thought 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
 
  async updateThought(req, res) {
    try {
       const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body},
        { new: true }
      );

      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: 'no thought with this id!' });
      } 
      res.status(200).json("updated!!!!!!")
    }catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      // const user = await User.findOneAndUpdate(
      //   { thought: req.params.thoughtId },
      //   { $pull: { thoughts: req.params.thoughtId } },
      //   { new: true }
      // );

      // if (!user) {
      //   return res
      //     .status(404)
      //     .json({ message: 'Thought created but no user with this id!' });
      // }

      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true }
      );
      if (!thought) {
        return res
          .status(404)
          .json({ message: 'New reaction created, but found no thought with that ID' });
      }

      res.json('Created a reaction 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: {reactionId: req.params.reactionId} } },
        { new: true }
        );

      if (!thought) {
        return res.status(404).json({ message: 'No reaction with this id!' });
      }


      res.json({ message: 'Reaction successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
