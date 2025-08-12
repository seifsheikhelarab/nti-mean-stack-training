import { getDayName, getFullDate, getMonthName } from "./modules/date.js";
import fs from "fs";

fs.writeFileSync("date.txt", getFullDate(new Date()), "utf8");
