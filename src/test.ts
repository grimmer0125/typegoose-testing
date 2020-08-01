// NodeJS: 14.7.0
// MongoDB: 4.2-bionic (Docker)
import pkg from "@typegoose/typegoose"; // @typegoose/typegoose@7.3.1
import mongoose from "mongoose"; // mongoose@5.9.26 @types/mongoose@5.7.34
const { getModelForClass, prop, modelOptions } = pkg;

@modelOptions({ schemaOptions: { timestamps: true, strict: "throw", collection: "user" } })
class User {
  @prop({ required: true, index: true })
  public userId!: number;
}
const UserModel = getModelForClass(User);

(async () => {
  await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: "verify326again", useCreateIndex: true, useUnifiedTopology: true });



  await mongoose.disconnect();
})();
