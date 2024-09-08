// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
    Query: {
        // get a single user by either their id or their username
        async me(parent, args, context) {
            const foundUser = await User.findOne(
                { _id: context.user._id },
            );

            if (!foundUser) {
                return null;
            }

            // res.json(foundUser);
            return foundUser;
        },
    },
    Mutation: {
        // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
        async addUser(parent, args, context) {
            const user = await User.create(args);

            if (!user) {
                return null;
            }
            const token = signToken(user);
            // res.json({ token, user });
            return ({token, user})
        },
        // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
        // {body} is destructured req.body
        async login(parent, args, context) {
            const user = await User.findOne({ email: args.email });
            if (!user) {
                return null;
            }

            const correctPw = await user.isCorrectPassword(args.password);

            if (!correctPw) {
                return null;
            }
            const token = signToken(user);
            return ({ token, user });
        },

        // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
        // user comes from `req.user` created in the auth middleware function
        async saveBook(parent, args, context) {
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: args } },
                    { new: true, runValidators: true }
                );
                return (updatedUser);
            } catch (err) {
                console.log(err);
                return null;
            }
        },


        // remove a book from `savedBooks`
        async removeBook(parent, args, context) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: args.bookId } } },
                { new: true }
            );
            if (!updatedUser) {
                return null;
            }
            return (updatedUser);
        },
    }

};
