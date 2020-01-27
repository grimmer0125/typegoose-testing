// NodeJS: 12.14.1
// MongoDB: 4.2-bionic (Docker)
import { getModelForClass, prop } from "@typegoose/typegoose"; // @typegoose/typegoose@6.2.2
import * as mongoose from "mongoose"; // mongoose@5.8.9

class User {
  @prop()
  public username?: string;
}
const UserModel = getModelForClass(User);

(async () => {
  await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: "verifyMASTER", useCreateIndex: true, useUnifiedTopology: true });

  const user = new UserModel({ username: "user1" });

  console.log(user);

  await mongoose.disconnect();
})();
