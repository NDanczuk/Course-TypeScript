import mongoose from "mongoose";
import config from "config";

// Logger
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Successfully connected to DB!");
  } catch (e) {
    Logger.error("Connection unsuccessfull!");
    Logger.error(`Error: ${e}`);
    process.exit(1);
  }
}

export default connect;
