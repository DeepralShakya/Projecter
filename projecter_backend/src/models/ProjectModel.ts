import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: [true, "Project name is required"],
      maxLength: [100, "100 characters max"],
    },
    projectDescription: {
      type: String,
      required: [true, "Project description is required"],
      maxLength: [500, "500 characters max"],
    },
    projectStatus: {
      type: String,
      required: [true, "Project status is required"],
      enum: {
        values: ["completed", "inprogress", "assigned"],
      },
      default: "assigned",
    },
    projectDeadline: {
      type: Date,
      required: [true, "Project deadline is required"],
    },
    projectManager: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Project manager is required"],
    },
    projectMembers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    projectTasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  { timestamps: true }
);

// 'Project' table is created in the database.
export default model("Project", projectSchema);
