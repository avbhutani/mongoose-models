import mongoose from 'mongoose';
const hospitalHours = new mongoose.Schema(
  {
    hospital: {
      type:String,
      required:true
    },
    hours: {
      type:Number,
      required:true,
    },
    startTime: {
      type:Number
    },
    endTime: {
      type:Number
    }
  }
)
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      required: true,
      default: 0,
    },
    worksInHospitals: [hospitalHours],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
