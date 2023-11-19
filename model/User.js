import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50
    },

    auth_type: {
      type: String,
      required: true,
      enum: ['guest', 'google']
    },
    role: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user'
    },
    avatar: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    },

    configuration_steps: {
      completed: {
        type: Boolean,
        default: false
      },
      status: {
        total: {
          type: Number,
          default: 6,
          max: 6,
          min: 6
        },
        current: {
          type: Number,
          default: 0,
          min: 0,
          max: 6
        }
      }
    },
    user_details: {
      age: {
        type: Number,
        required: true,
        min: 0,
        max: 66,
        default: 32
      },
      tall: {
        type: Number,
        required: true,
        min: 40,
        max: 201,
        default: 173
      },
      sex: {
        type: String,
        required: true,
        enum: ['Male', 'Female'],
        default: 'Male'
      },
      before_diseases: {
        type: [String],
        required: true,
        default: []
      },
      ongoing_diseases: {
        type: [String],
        required: true,
        default: []
      },
      weight: {
        type: Number,
        required: true,
        min: 4,
        max: 201,
        default: 80
      },
    }
  },

  {
    timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);

export default User;
